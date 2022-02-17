import {
  BidAccepted as BidAcceptedEvent,
  BidCreated as BidCreatedEvent,
  BidStatusUpdated as BidStatusUpdatedEvent,
  ListingCancelled as ListingCancelledEvent,
  ListingCreated as ListingCreatedEvent,
  ListingFilled as ListingFilledEvent,
  ListingUpdated as ListingUpdatedEvent
} from "../generated/yatmarket/yatmarket"
import {
  Bid,
  Listing,
  Purchase,
} from "../generated/schema"

export function handleBidCreated(event: BidCreatedEvent): void {
  let bid = new Bid(event.params.bidId.toString())
  let listing = Listing.load(event.params.tokenId.toString())

  if(listing && listing.active){
    bid.owner = listing.owner
  } else {
    bid.owner = event.params.owner
  }
  bid.bidId = event.params.bidId
  bid.blueprintId = event.params.tokenId
  bid.bid = event.params.bid
  bid.bidder =event.params.bidder
  bid.status = "ACTIVE"
  bid.save()
}

export function handleBidAccepted(event: BidAcceptedEvent): void {
  let bid = Bid.load(event.params.bidId.toString())
  if (bid){
    let purchase = new Purchase(event.params.bidId.toString())
    bid.status = "ACCEPTED"
    purchase.buyer = bid.bidder
    purchase.seller = bid.owner
    purchase.price = bid.bid
    purchase.blueprintId = bid.blueprintId
    purchase.timestamp = event.block.timestamp
    bid.save()
    purchase.save()
  } 
}

export function handleBidStatusUpdated(event: BidStatusUpdatedEvent): void {
  let bid = new Bid(event.params.bidId.toString())
  bid.status = "CANCELLED"
  bid.save()
}

export function handleListingCancelled(event: ListingCancelledEvent): void {
  let listing = new Listing(event.params.id.toString())
  listing.active = event.params.active
  listing.save()
}

export function handleListingCreated(event: ListingCreatedEvent): void {
  let listing = new Listing(event.params.listingId.toString())
  listing.active = event.params.active
  listing.listingId = event.params.listingId
  listing.blueprintId = event.params.tokenId
  listing.price = event.params.price
  listing.owner = event.params.owner
  listing.tokenURI = event.params.tokenURI
  listing.save()
}

export function handleListingFilled(event: ListingFilledEvent): void {
  let listing = new Listing(event.params.id.toString())
  let purchase = new Purchase(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  listing.active = false
  purchase.buyer = event.params.buyer
  purchase.seller = listing.owner
  purchase.price = listing.price
  purchase.blueprintId = listing.blueprintId
  purchase.timestamp = event.block.timestamp
  listing.save()
  purchase.save()  
}

export function handleListingUpdated(event: ListingUpdatedEvent): void {
  let listing = new Listing(event.params.listingId.toString())
  listing.price = event.params.price
  listing.save()
}
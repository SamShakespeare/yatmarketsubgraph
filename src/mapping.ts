import {
  BidAccepted as BidAcceptedEvent,
  BidCreated as BidCreatedEvent,
  BidStatusUpdated as BidStatusUpdatedEvent,
  FilledListing as FilledListingEvent,
  ListingCancelled as ListingCancelledEvent,
  ListingCreated as ListingCreatedEvent,
  ListingFilled as ListingFilledEvent,
  ListingUpdated as ListingUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/yatmarket/yatmarket"
import {
  BidAccepted,
  BidCreated,
  BidStatusUpdated,
  FilledListing,
  ListingCancelled,
  ListingCreated,
  ListingFilled,
  ListingUpdated,
  OwnershipTransferred
} from "../generated/schema"

export function handleBidAccepted(event: BidAcceptedEvent): void {
  let entity = new BidAccepted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.bidId = event.params.bidId
  entity.save()
}

export function handleBidCreated(event: BidCreatedEvent): void {
  let entity = new BidCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.bidId = event.params.bidId
  entity.tokenId = event.params.tokenId
  entity.bid = event.params.bid
  entity.bidder = event.params.bidder
  entity.owner = event.params.owner
  entity.status = event.params.status
  entity.save()
}

export function handleBidStatusUpdated(event: BidStatusUpdatedEvent): void {
  let entity = new BidStatusUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.bidId = event.params.bidId
  entity.status = event.params.status
  entity.save()
}

export function handleFilledListing(event: FilledListingEvent): void {
  let entity = new FilledListing(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.listing_listing_active = event.params.listing.listing.active
  entity.listing_listing_listingId = event.params.listing.listing.listingId
  entity.listing_listing_tokenId = event.params.listing.listing.tokenId
  entity.listing_listing_price = event.params.listing.listing.price
  entity.listing_listing_activeIndex = event.params.listing.listing.activeIndex
  entity.listing_listing_userActiveIndex =
    event.params.listing.listing.userActiveIndex
  entity.listing_listing_owner = event.params.listing.listing.owner
  entity.listing_listing_tokenURI = event.params.listing.listing.tokenURI
  entity.listing_buyer = event.params.listing.buyer
  entity.save()
}

export function handleListingCancelled(event: ListingCancelledEvent): void {
  let entity = new ListingCancelled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.id = event.params.id
  entity.active = event.params.active
  entity.save()
}

export function handleListingCreated(event: ListingCreatedEvent): void {
  let entity = new ListingCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.active = event.params.active
  entity.listingId = event.params.listingId
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.owner = event.params.owner
  entity.tokenURI = event.params.tokenURI
  entity.save()
}

export function handleListingFilled(event: ListingFilledEvent): void {
  let entity = new ListingFilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.id = event.params.id
  entity.active = event.params.active
  entity.buyer = event.params.buyer
  entity.save()
}

export function handleListingUpdated(event: ListingUpdatedEvent): void {
  let entity = new ListingUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.listingId = event.params.listingId
  entity.price = event.params.price
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Listing extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("active", Value.fromBoolean(false));
    this.set("listingId", Value.fromBigInt(BigInt.zero()));
    this.set("blueprintId", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("tokenURI", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Listing entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Listing entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Listing", id.toString(), this);
    }
  }

  static load(id: string): Listing | null {
    return changetype<Listing | null>(store.get("Listing", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value!.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }

  get listingId(): BigInt {
    let value = this.get("listingId");
    return value!.toBigInt();
  }

  set listingId(value: BigInt) {
    this.set("listingId", Value.fromBigInt(value));
  }

  get blueprintId(): BigInt {
    let value = this.get("blueprintId");
    return value!.toBigInt();
  }

  set blueprintId(value: BigInt) {
    this.set("blueprintId", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }
}

export class Bid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("bidId", Value.fromBigInt(BigInt.zero()));
    this.set("blueprintId", Value.fromBigInt(BigInt.zero()));
    this.set("bid", Value.fromBigInt(BigInt.zero()));
    this.set("bidder", Value.fromBytes(Bytes.empty()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("status", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bid entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Bid entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Bid", id.toString(), this);
    }
  }

  static load(id: string): Bid | null {
    return changetype<Bid | null>(store.get("Bid", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bidId(): BigInt {
    let value = this.get("bidId");
    return value!.toBigInt();
  }

  set bidId(value: BigInt) {
    this.set("bidId", Value.fromBigInt(value));
  }

  get blueprintId(): BigInt {
    let value = this.get("blueprintId");
    return value!.toBigInt();
  }

  set blueprintId(value: BigInt) {
    this.set("blueprintId", Value.fromBigInt(value));
  }

  get bid(): BigInt {
    let value = this.get("bid");
    return value!.toBigInt();
  }

  set bid(value: BigInt) {
    this.set("bid", Value.fromBigInt(value));
  }

  get bidder(): Bytes {
    let value = this.get("bidder");
    return value!.toBytes();
  }

  set bidder(value: Bytes) {
    this.set("bidder", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get status(): string {
    let value = this.get("status");
    return value!.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}

export class Purchase extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("blueprintId", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("buyer", Value.fromBytes(Bytes.empty()));
    this.set("seller", Value.fromBytes(Bytes.empty()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Purchase entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Purchase entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Purchase", id.toString(), this);
    }
  }

  static load(id: string): Purchase | null {
    return changetype<Purchase | null>(store.get("Purchase", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blueprintId(): BigInt {
    let value = this.get("blueprintId");
    return value!.toBigInt();
  }

  set blueprintId(value: BigInt) {
    this.set("blueprintId", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value!.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value!.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

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

export class ApprovalForAll extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ApprovalForAll entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ApprovalForAll must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ApprovalForAll", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): ApprovalForAll | null {
    return changetype<ApprovalForAll | null>(
      store.get_in_block("ApprovalForAll", id.toHexString())
    );
  }

  static load(id: Bytes): ApprovalForAll | null {
    return changetype<ApprovalForAll | null>(
      store.get("ApprovalForAll", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get approved(): boolean {
    let value = this.get("approved");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class NewAttestation extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewAttestation entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type NewAttestation must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NewAttestation", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): NewAttestation | null {
    return changetype<NewAttestation | null>(
      store.get_in_block("NewAttestation", id.toHexString())
    );
  }

  static load(id: Bytes): NewAttestation | null {
    return changetype<NewAttestation | null>(
      store.get("NewAttestation", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get PulseToken_id(): BigInt {
    let value = this.get("PulseToken_id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set PulseToken_id(value: BigInt) {
    this.set("PulseToken_id", Value.fromBigInt(value));
  }

  get content(): string {
    let value = this.get("content");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }

  get author(): Bytes {
    let value = this.get("author");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set author(value: Bytes) {
    this.set("author", Value.fromBytes(value));
  }

  get contentMintAmount(): BigInt {
    let value = this.get("contentMintAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set contentMintAmount(value: BigInt) {
    this.set("contentMintAmount", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class OwnershipTransferred extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OwnershipTransferred entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type OwnershipTransferred must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("OwnershipTransferred", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): OwnershipTransferred | null {
    return changetype<OwnershipTransferred | null>(
      store.get_in_block("OwnershipTransferred", id.toHexString())
    );
  }

  static load(id: Bytes): OwnershipTransferred | null {
    return changetype<OwnershipTransferred | null>(
      store.get("OwnershipTransferred", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get previousOwner(): Bytes {
    let value = this.get("previousOwner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set previousOwner(value: Bytes) {
    this.set("previousOwner", Value.fromBytes(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class TransferBatch extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransferBatch entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type TransferBatch must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TransferBatch", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): TransferBatch | null {
    return changetype<TransferBatch | null>(
      store.get_in_block("TransferBatch", id.toHexString())
    );
  }

  static load(id: Bytes): TransferBatch | null {
    return changetype<TransferBatch | null>(
      store.get("TransferBatch", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get ids(): Array<BigInt> {
    let value = this.get("ids");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntArray();
    }
  }

  set ids(value: Array<BigInt>) {
    this.set("ids", Value.fromBigIntArray(value));
  }

  get values(): Array<BigInt> {
    let value = this.get("values");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntArray();
    }
  }

  set values(value: Array<BigInt>) {
    this.set("values", Value.fromBigIntArray(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class TransferSingle extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransferSingle entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type TransferSingle must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TransferSingle", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): TransferSingle | null {
    return changetype<TransferSingle | null>(
      store.get_in_block("TransferSingle", id.toHexString())
    );
  }

  static load(id: Bytes): TransferSingle | null {
    return changetype<TransferSingle | null>(
      store.get("TransferSingle", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get PulseToken_id(): BigInt {
    let value = this.get("PulseToken_id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set PulseToken_id(value: BigInt) {
    this.set("PulseToken_id", Value.fromBigInt(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class URI extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save URI entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type URI must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("URI", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): URI | null {
    return changetype<URI | null>(store.get_in_block("URI", id.toHexString()));
  }

  static load(id: Bytes): URI | null {
    return changetype<URI | null>(store.get("URI", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get value(): string {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }

  get PulseToken_id(): BigInt {
    let value = this.get("PulseToken_id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set PulseToken_id(value: BigInt) {
    this.set("PulseToken_id", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class EpnsNotificationCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save EpnsNotificationCounter entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EpnsNotificationCounter must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EpnsNotificationCounter", id.toString(), this);
    }
  }

  static loadInBlock(id: string): EpnsNotificationCounter | null {
    return changetype<EpnsNotificationCounter | null>(
      store.get_in_block("EpnsNotificationCounter", id)
    );
  }

  static load(id: string): EpnsNotificationCounter | null {
    return changetype<EpnsNotificationCounter | null>(
      store.get("EpnsNotificationCounter", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalCount(): BigInt {
    let value = this.get("totalCount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalCount(value: BigInt) {
    this.set("totalCount", Value.fromBigInt(value));
  }
}

export class EpnsPushNotification extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EpnsPushNotification entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EpnsPushNotification must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EpnsPushNotification", id.toString(), this);
    }
  }

  static loadInBlock(id: string): EpnsPushNotification | null {
    return changetype<EpnsPushNotification | null>(
      store.get_in_block("EpnsPushNotification", id)
    );
  }

  static load(id: string): EpnsPushNotification | null {
    return changetype<EpnsPushNotification | null>(
      store.get("EpnsPushNotification", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get notificationNumber(): BigInt {
    let value = this.get("notificationNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set notificationNumber(value: BigInt) {
    this.set("notificationNumber", Value.fromBigInt(value));
  }

  get recipient(): string {
    let value = this.get("recipient");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set recipient(value: string) {
    this.set("recipient", Value.fromString(value));
  }

  get notification(): string {
    let value = this.get("notification");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set notification(value: string) {
    this.set("notification", Value.fromString(value));
  }
}
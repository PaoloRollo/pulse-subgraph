import {
  ApprovalForAll as ApprovalForAllEvent,
  NewAttestation as NewAttestationEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent
} from "../generated/PulseToken/PulseToken"
import {
  ApprovalForAll,
  NewAttestation,
  OwnershipTransferred,
  TransferBatch,
  TransferSingle,
  URI
} from "../generated/schema"
import { sendPushNotification } from "./push-notification";

export const subgraphID = "pulse-subgraph";

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewAttestation(event: NewAttestationEvent): void {
  let entity = new NewAttestation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.PulseToken_id = event.params.id
  entity.content = event.params.content
  entity.author = event.params.author
  entity.contentMintAmount = event.params.contentMintAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let recipient = event.params.author.toHexString(),
  type = "3",
  title = "Your content was loved!",
  body = `One of your post was just loved!`,
  subject = "Your content was loved!",
  message = `One of your post was just loved!`,
  image = "https://pulse-indol.vercel.app/logo-pulse.png",
  secret = "null",
  cta = "https://pulse-indol.vercel.app/";

let notification = `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`;

sendPushNotification(recipient, notification);

let recipient2 = "0x96e273B44bAd643140d3585B01e87b87E40fbcC7",
  type2 = "3",
  title2 = "New NFT minted.",
  body2 = `${event.params.content}:${event.params.id}`,
  subject2 = "New NFT minted.",
  message2 = `${event.params.content}:${event.params.id}`,
  image2 = "https://pulse-indol.vercel.app/logo-pulse.png",
  secret2 = "null",
  cta2 = "https://pulse-indol.vercel.app/";

let notification2 = `{\"type\": \"${type2}\", \"title\": \"${title2}\", \"body\": \"${body2}\", \"subject\": \"${subject2}\", \"message\": \"${message2}\", \"image\": \"${image2}\", \"secret\": \"${secret2}\", \"cta\": \"${cta2}\"}`;

sendPushNotification(recipient2, notification2);
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.PulseToken_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  // check if it is a mint
  if (
    event.params.from.toHexString() ===
    "0x0000000000000000000000000000000000000000"
  ) {
    let recipient = event.params.to.toHexString(),
      type = "3",
      title = "New NFT minted!",
      body = `You just minted a new NFT.`,
      subject = "New NFT minted!",
      message = `You just minted a new NFT.`,
      image =
        "https://play-lh.googleusercontent.com/i911_wMmFilaAAOTLvlQJZMXoxBF34BMSzRmascHezvurtslYUgOHamxgEnMXTklsF-S",
      secret = "null",
      cta = "https://pulse-indol.vercel.app/";

    let notification = `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`;

    sendPushNotification(recipient, notification);
  }
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.PulseToken_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

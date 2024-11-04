import { sendWhatsAppMessage } from './sendWhatsappmsg';

export async function notifyUserOrderPlaced(userContact: string, orderId: string): Promise<void> {
  const message = `Your order #${orderId} has been received and is being processed.`;
  await sendWhatsAppMessage(userContact, message);
}

export async function notifyOwnerNewOrder(orderId: string): Promise<void> {
  const ownerContact = process.env.OWNER_CONTACT || '';
  const message = `New order received! Order ID: ${orderId}. Please confirm when ready.`;
  await sendWhatsAppMessage(ownerContact, message);
}

export async function notifyUserOrderConfirmed(userContact: string, orderId: string): Promise<void> {
  const message = `Your order #${orderId} has been confirmed and is being prepared.`;
  await sendWhatsAppMessage(userContact, message);
}
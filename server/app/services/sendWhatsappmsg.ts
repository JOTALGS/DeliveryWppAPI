import twilio from "twilio";

console.log(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const client = twilio(process.env.TWILIO_ACCOUNT_SID as string, process.env.TWILIO_AUTH_TOKEN as string);

// Define types for function parameters
async function sendWhatsAppMessage(to: string, body: string): Promise<void> {
  try {
    await client.messages.create({
      body: body,
      from: 'whatsapp:+14155238886',  // Twilio sandbox number
      to: `whatsapp:${to}`,
    });
    console.log(`WhatsApp message sent to ${to}`);
  } catch (error) {
    console.error('WhatsApp message failed', error);
  }
}

export { sendWhatsAppMessage };

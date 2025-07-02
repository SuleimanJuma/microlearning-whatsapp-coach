const twilio = require('twilio');
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendWhatsAppMessage = async (to, body) => {
  await client.messages.create({
    from: process.env.TWILIO_WHATSAPP_NUMBER,
    to: `whatsapp:${to}`,
    body
  });
};

module.exports = { sendWhatsAppMessage };

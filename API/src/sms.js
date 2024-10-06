const dotenv = require("dotenv");
const twilio = require("twilio");

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function createMessage() {
  const message = await client.messages.create({
    body: "Quiero uwu",
    from: "+15204453256",
    to: "+526461453036",
  });

  console.log(message.body);
}

createMessage();

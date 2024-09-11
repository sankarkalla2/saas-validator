import crypto from "crypto";
export async function POST(request: Request) {
  const rawBody = await request.text();

  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET!;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
  const signature = Buffer.from(
    request.headers.get("X-Signature") || "",
    "utf8"
  );

  if (!crypto.timingSafeEqual(digest, signature)) {
    throw new Error("Invalid signature.");
  }

  const data = JSON.parse(rawBody);

  const eventName = data["meta"]["event_name"];
  // const obj = data["data"]["attributes"];
  // const objId = data["data"]["id"];

  // let eventData;
  switch (eventName) {
    case "subscription_created":
      console.log("new subscription successfully", data);
      break;

    case "order_created":
      console.log("new order created", data);
    default:
      break;
  }

  return new Response("ok");
}

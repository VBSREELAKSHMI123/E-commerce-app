import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";


console.log("Stripe Key:", process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("Received amount:", body.amount);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: Math.round(body.amount),
            product_data: {
              name: body.name,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

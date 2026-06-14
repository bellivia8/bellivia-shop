import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function POST(req) {
  try {
    const { form, cart, total, shipping } = await req.json();

    if (!cart || cart.length === 0) {
      return NextResponse.json(
        { error: "Koszyk jest pusty" },
        { status: 400 }
      );
    }

    const shippingCost = total >= 299 ? 0 : 20;

    const lineItems = cart.map((item) => ({
      price_data: {
        currency: "pln",
        product_data: {
          name: `${item.name} - ${item.size}`,
        },
        unit_amount: Math.round(Number(item.price) * 100),
      },
      quantity: Number(item.quantity),
    }));

    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: "pln",
          product_data: {
            name:
              shipping === "paczkomat"
                ? "Dostawa InPost Paczkomat"
                : "Dostawa Kurier InPost",
          },
          unit_amount: shippingCost * 100,
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      payment_method_types: ["card"],

      line_items: lineItems,

      customer_email: form.email,

      success_url: `${BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${BASE_URL}/checkout`,
    });

    return NextResponse.json({
      redirectUrl: session.url,
    });
  } catch (err) {
    console.error("STRIPE ERROR:");
    console.log(err);

    return NextResponse.json(
      {
        error: err.message,
      },
      { status: 500 }
    );
  }
}
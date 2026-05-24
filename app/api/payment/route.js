import { NextResponse } from 'next/server';

// ================================================
// PRZELEWY24 — uzupelnij po zalozeniu konta na:
// https://panel.przelewy24.pl lub
// https://sandbox.przelewy24.pl (testowe)
// ================================================
const P24_MERCHANT_ID = process.env.P24_MERCHANT_ID || 'UZUPELNIJ';
const P24_POS_ID = process.env.P24_POS_ID || 'UZUPELNIJ';
const P24_API_KEY = process.env.P24_API_KEY || 'UZUPELNIJ';
const P24_SANDBOX = true; // zmien na false gdy sklep bedzie na zywo

const BASE_URL = P24_SANDBOX
  ? 'https://sandbox.przelewy24.pl'
  : 'https://secure.przelewy24.pl';

export async function POST(request) {
  try {
    const body = await request.json();
    const { cart, total, customer } = body;

    // Jesli klucze nie sa ustawione — tryb deweloperski
    if (P24_MERCHANT_ID === 'UZUPELNIJ') {
      console.log('DEV MODE: Przelewy24 nie skonfigurowane.');
      console.log('Zamowienie:', { customer, total, items: cart.length });
      return NextResponse.json({ redirectUrl: '/checkout/success?dev=1' });
    }

    const orderId = `BELLIVIA-${Date.now()}`;
    const amountInGrosze = Math.round(total * 100);

    const p24Response = await fetch(
      `${BASE_URL}/api/v1/transaction/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(
            `${P24_POS_ID}:${P24_API_KEY}`
          ).toString('base64')}`,
        },
        body: JSON.stringify({
          merchantId: parseInt(P24_MERCHANT_ID),
          posId: parseInt(P24_POS_ID),
          sessionId: orderId,
          amount: amountInGrosze,
          currency: 'PLN',
          description: `Zamowienie Bellivia ${orderId}`,
          email: customer.email,
          client: customer.name,
          phone: customer.phone,
          address: customer.street,
          zip: customer.zip,
          city: customer.city,
          country: 'PL',
          language: 'pl',
          urlReturn: `${
            process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
          }/checkout/success`,
          urlStatus: `${
            process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
          }/api/payment/status`,
        }),
      }
    );

    const p24Data = await p24Response.json();
    const token = p24Data.data?.token;

    if (!token) throw new Error('Brak tokena Przelewy24');

    return NextResponse.json({
      redirectUrl: `${BASE_URL}/trnRequest/${token}`,
    });
  } catch (error) {
    console.error('Payment error:', error);
    return NextResponse.json(
      { error: 'Blad platnosci' },
      { status: 500 }
    );
  }
}
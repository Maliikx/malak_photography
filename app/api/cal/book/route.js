import { NextResponse } from 'next/server';

export async function POST(req) {
  const { start, name, email } = await req.json();

  const res = await fetch('https://api.cal.com/v2/bookings', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.CAL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      eventTypeId: Number(process.env.CAL_EVENT_TYPE_ID),
      start,
      name,
      email,
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}

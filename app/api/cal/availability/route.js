import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.CAL_API_KEY;
  const res = await fetch(`https://api.cal.com/v2/bookings`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}

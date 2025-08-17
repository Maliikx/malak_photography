'use client';
import { useState, useEffect } from 'react';

export default function Book() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('/api/availability')
      .then(res => res.json())
      .then(data => setBookings(data.data || []));
  }, []);

  const makeBooking = () => {
    const startTime = new Date();
    startTime.setDate(startTime.getDate() + 1); // tomorrow
    startTime.setHours(10, 0, 0, 0); // 10 AM

    fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        start: startTime.toISOString(),
        name: 'John Doe',
        email: 'john@example.com',
      }),
    })
      .then(res => res.json())
      .then(console.log);
  };

  return (
    <div>
      <h1>Booked Sessions</h1>
      <ul>
        {bookings.map(b => (
          <li key={b.id}>{b.startTime}</li>
        ))}
      </ul>
      <button onClick={makeBooking}>Book Tomorrow 10AM</button>
    </div>
  );
}

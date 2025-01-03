import React, { useState } from 'react';
import axios from 'axios';
import './TicketBookingForm.css';  // Import the CSS file

const TicketBookingForm = () => {
  const [movieName, setMovieName] = useState('');
  const [time, setTime] = useState('');
  const [seat, setSeat] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ticketData = { movieName, time, seat, name, phone, email, paymentMethod };

    try {
      const response = await axios.post('http://localhost:5000/api/tickets/book', ticketData);

      if (response.status === 201) {
        alert('Ticket booked successfully');
        // Reset form after successful submission
        setMovieName('');
        setTime('');
        setSeat('');
        setName('');
        setPhone('');
        setEmail('');
        setPaymentMethod('');
      }
    } catch (error) {
      // Enhanced error handling with detailed messages
      console.error('Error booking ticket:', error.response ? error.response.data : error.message);
      alert(`Error booking ticket: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Movie Ticket Booking</h2>
      
      <input
        type="text"
        placeholder="Movie Name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        required
      />
      
      <input
        type="text"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      
      <input
        type="text"
        placeholder="Seat"
        value={seat}
        onChange={(e) => setSeat(e.target.value)}
        required
      />
      
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        required
      >
        <option value="">Select Payment Method</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="UPI">UPI</option>
      </select>
      
      <button type="submit">Book Ticket</button>
    </form>
  );
};

export default TicketBookingForm;

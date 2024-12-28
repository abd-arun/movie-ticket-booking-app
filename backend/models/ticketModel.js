const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  movieName: { type: String, required: true },
  time: { type: String, required: true },
  seat: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  paymentMethod: { type: String, required: true },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: false },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;

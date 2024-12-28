const Ticket = require('../models/ticketModel');

exports.bookTicket = async (req, res) => {
    try {
      // Log incoming request body for debugging
      console.log('Received data:', req.body);
  
      const { movieName, time, seat, name, phone, email, paymentMethod } = req.body;
      const ticket = new Ticket({ movieName, time, seat, name, phone, email, paymentMethod });
      
      // Save the ticket
      await ticket.save();
      res.status(201).json({ ticket });
    } catch (err) {
      console.error('Error booking ticket:', err);  // Log the error for better visibility
      res.status(500).json({ message: 'Error booking ticket', error: err });
    }
  };
  

// Controller to get all tickets
exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tickets', error: err });
  }
};

// Controller to delete a ticket
exports.deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    await Ticket.findByIdAndDelete(id);
    res.status(200).json({ message: 'Ticket deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting ticket', error: err });
  }
};

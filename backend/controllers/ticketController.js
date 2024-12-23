const Ticket = require('../models/ticketModel');

// Controller to book a ticket
exports.bookTicket = (req, res) => {
    const { movieName, time, seat, name, phone, email, paymentMethod } = req.body;
  
    Ticket.create({
      movieName,
      time,
      seat,
      name,
      phone,
      email,
      paymentMethod,
    })
    .then((ticket) => res.status(201).json({ ticket }))
    .catch((err) => res.status(500).json({ message: 'Error booking ticket', error: err }));
  };
  
  // Controller to get all tickets
  exports.getTickets = (req, res) => {
    Ticket.findAll()
      .then((tickets) => res.status(200).json(tickets))
      .catch((err) => res.status(500).json({ message: 'Error fetching tickets', error: err }));
  };
  
  // Controller to delete a ticket
  exports.deleteTicket = (req, res) => {
    const { id } = req.params;
  
    Ticket.destroy({
      where: { id },
    })
    .then(() => res.status(200).json({ message: 'Ticket deleted successfully' }))
    .catch((err) => res.status(500).json({ message: 'Error deleting ticket', error: err }));
  };
  
const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// POST: Book ticket
router.post('/book', ticketController.bookTicket);

// GET: Get all tickets
router.get('/', ticketController.getTickets);

// DELETE: Delete ticket
router.delete('/delete/:id', ticketController.deleteTicket);

module.exports = router;

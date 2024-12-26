const express = require('express');
const cors = require('cors');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root Route (Optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Movie Ticket Booking API!');
});

// Routes
app.use('/api/tickets', ticketRoutes);

// Dynamic Port for Deployment
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const ticketRoutes = require('./routes/ticketRoutes');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root Route (Optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Movie Ticket Booking API!');
});


// Connect to MongoDB
mongoose
  .connect(process.env.DB_URI) // No need for useNewUrlParser or useUnifiedTopology
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if connection fails
  });


// Routes
app.use('/api/tickets', ticketRoutes);

// Dynamic Port for Deployment
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

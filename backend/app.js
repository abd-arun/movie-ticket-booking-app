const express = require('express');
const cors = require('cors');
const ticketRoutes = require('./routes/ticketRoutes');
const mysql = require('mysql2');
require('dotenv').config(); // Ensure environment variables are loaded

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root Route (Optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Movie Ticket Booking API!');
});

// Test the DB connection before starting the server
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    process.exit(1); // Exit the process if connection fails
  } else {
    console.log('Connected to the database!');
  }
  connection.end(); // Close the connection after test
});

// Routes
app.use('/api/tickets', ticketRoutes);

// Dynamic Port for Deployment
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

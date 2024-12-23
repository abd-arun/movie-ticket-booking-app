const { Sequelize, DataTypes } = require('sequelize');

// Use environment variables for database connection
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,  // Uses DB_HOST from Render's environment variables
  username: process.env.DB_USER,  // Uses DB_USER from Render's environment variables
  password: process.env.DB_PASSWORD,  // Uses DB_PASSWORD from Render's environment variables
  database: process.env.DB_NAME,  // Uses DB_NAME from Render's environment variables
});

// Ticket model definition
const Ticket = sequelize.define('Ticket', {
  movieName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'movie_name'
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
    field: 'show_time'
  },
  seat: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'seat_number'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'customer_name'
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'phone_number'
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'email'
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'payment_method'
  }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
});

// Sync the Ticket model with the database
sequelize.sync({ force: true })
  .then(() => {
    console.log('Ticket model synced successfully.');
  })
  .catch((err) => {
    console.error('Error syncing the Ticket model:', err);
  });

// Export Ticket model for use in other parts of the app
module.exports = Ticket;

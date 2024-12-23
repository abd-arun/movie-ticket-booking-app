const { Sequelize, DataTypes } = require('sequelize');

// Update the credentials here
const sequelize = new Sequelize('ticket_booking', 'root', '@madhumitha143', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306, // Optional, but useful if the default port is different
});

// Ticket model definition (as you already have)
const Ticket = sequelize.define('Ticket', {
  movieName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'movie_name',
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
    field: 'show_time',
  },
  seat: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'seat_number',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'customer_name',
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'phone_number',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'email',
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'payment_method',
  }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
});

// Sync the Ticket model with the database
sequelize.sync()
  .then(() => {
    console.log('Ticket model synced successfully.');
  })
  .catch((err) => {
    console.error('Error syncing the Ticket model:', err);
  });

module.exports = Ticket;

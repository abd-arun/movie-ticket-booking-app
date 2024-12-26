// 1. Importing Sequelize and DataTypes
const { Sequelize, DataTypes } = require('sequelize');

// 2. Loading environment variables from .env file
require('dotenv').config(); // Make sure dotenv is loaded

// 3. Log environment variables to check their values
console.log(process.env.DB_HOST);
console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_PORT);

// 4. Setting up the Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
  }
);

// 5. Defining the Ticket model
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

// 6. Sync the Ticket model with the database
sequelize.sync()
  .then(() => {
    console.log('Ticket model synced successfully.');
  })
  .catch((err) => {
    console.error('Error syncing the Ticket model:', err);
  });

// 7. Export the Ticket model to use in other parts of the application
module.exports = Ticket;

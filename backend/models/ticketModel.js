const { Sequelize, DataTypes } = require('sequelize');

// Create a new Sequelize instance and connect to the MySQL database
const sequelize = new Sequelize('mysql://root:%40madhumitha143@localhost:3306/ticket_booking');


// Ticket model definition
const Ticket = sequelize.define('Ticket', {
    movieName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'movie_name'  // Ensure this matches the column name in your SQL table
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'show_time'  // Ensure this matches the column name in your SQL table
    },
    seat: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'seat_number'  // Ensure this matches the column name in your SQL table
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'customer_name'  // Ensure this matches the column name in your SQL table
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'phone_number'  // Ensure this matches the column name in your SQL table
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email'  // Matches your table column
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'payment_method'  // Matches your table column
    }
  }, {
    timestamps: true,  // This will automatically handle `createdAt` and `updatedAt`
    createdAt: 'created_at',  // Map `createdAt` to the column `created_at`
    updatedAt: false  // Disable automatic update of `updatedAt` column, as you don't need it
  });
  
  // Sync the Ticket model with the database
  sequelize.sync({ force: true })
  .then(() => {
    console.log('Ticket model synced successfully.');
  })
  .catch((err) => {
    console.error('Error syncing the Ticket model:', err);
  });

  
  module.exports = Ticket;
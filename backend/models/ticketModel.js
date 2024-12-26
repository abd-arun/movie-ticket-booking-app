const { Sequelize, DataTypes } = require('sequelize');

// Use environment variables for the database configuration
const sequelize = new Sequelize(
  process.env.DB_NAME,       // Database name
  process.env.DB_USER,       // Database user
  process.env.DB_PASSWORD,   // Database password
  {
    host: process.env.DB_HOST,  // Database host (e.g., Render DB host)
    dialect: 'mysql',
    port: process.env.DB_PORT,  // Database port (e.g., 3306)
  }
);

// Ticket model definition
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

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

// Initialize Sequelize instance
export const sequelize = new Sequelize(
  DB_NAME || 'hillsite-backend',
  DB_USER || 'root',
  DB_PASSWORD || '',
  {
    host: DB_HOST || '127.0.0.1',
    port: parseInt(DB_PORT || '3307', 10),
    dialect: 'mysql',
    logging: false, // Turn off sql query log spam in console
    define: {
      timestamps: true,
      underscored: true
    }
  }
);

// Verify database connection
export const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(`[SEQUELIZE] Connected successfully to database "${DB_NAME}" on port ${DB_PORT}.`);
  } catch (error) {
    console.error('[SEQUELIZE] Database connection failed. Verify MySQL service details.');
    console.error('Error details:', error.message);
    throw error;
  }
};

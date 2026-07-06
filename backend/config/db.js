import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

const isProduction = process.env.NODE_ENV === 'production' || 
                     (DB_USER && DB_USER.startsWith('amigoweb_'));

const dbPort = isProduction ? 3306 : parseInt(DB_PORT || '3307', 10);

// Initialize Sequelize instance
export const sequelize = new Sequelize(
  DB_NAME || 'hillsite-backend',
  DB_USER || 'root',
  DB_PASSWORD || '',
  {
    host: DB_HOST || '127.0.0.1',
    port: dbPort,
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
    console.log(`[SEQUELIZE] Connected successfully to database "${DB_NAME}" on port ${dbPort}.`);
  } catch (error) {
    console.error('[SEQUELIZE] Database connection failed. Verify MySQL service details.');
    console.error('Error details:', error.message);
    throw error;
  }
};

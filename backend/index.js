import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { initDB } from './config/db.js';
import { seedDatabase } from './models/dbInit.js';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8008;

// Track database initialization error
let dbError = null;

// Enable CORS for local Vite development server
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));

// Middleware for parsing JSON requests
app.use(express.json());

// Database health interceptor middleware
app.use((req, res, next) => {
  if (dbError) {
    return res.status(500).json({
      status: 'DATABASE_CONNECTION_ERROR',
      message: 'The Hillside backend server is running, but failed to connect to the MySQL database.',
      error: dbError.message,
      suggestion: 'Please verify that the database user has been added to the database with all privileges in cPanel MySQL Databases page, and that DB_HOST, DB_NAME, DB_USER, and DB_PASSWORD are correct.'
    });
  }
  next();
});

// Serve local uploaded assets
app.use('/hillsite/uploads', express.static(path.join(__dirname, 'uploads')));

// Simple health check route
app.get('/hillsite/health', (req, res) => {
  res.json({ status: 'OK', message: 'Hillside Lead Portal Backend API is running.' });
});

// Register api router paths
app.use('/hillsite/api/auth', authRoutes);
app.use('/hillsite/api/projects', projectRoutes);


// Catch-all server error handler
app.use((err, req, res, next) => {
  console.error('Unhandled server exception:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Initialize database and start the server
const startServer = async () => {
  try {
    // Establish connection pool and verify/create database schema
    await initDB();
    
    // Seed default administrator login credential
    await seedDatabase();
  } catch (error) {
    console.error('[HILLSIDE SERVER] Database connection failed during startup:', error);
    dbError = error;
    
    // Write diagnostics to a text file in the project folder for easy cPanel viewing
    try {
      fs.writeFileSync(
        path.join(__dirname, 'db_error.log'), 
        `Error Time: ${new Date().toISOString()}\nError Message: ${error.message}\nStack: ${error.stack}\n`
      );
    } catch (fsErr) {
      console.error('Failed to write db_error.log:', fsErr);
    }
  }

  // Always listen to the port so that Passenger starts up successfully and does not return 503
  app.listen(PORT, () => {
    console.log(`[HILLSIDE SERVER] Running at http://localhost:${PORT}`);
  });
};

startServer();

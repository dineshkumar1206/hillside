import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { initDB } from './config/db.js';
import { seedDatabase } from './models/dbInit.js';
import authRoutes from './routes/authRoutes.js';
import whyChooseRoutes from './routes/whyChooseRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for local Vite development server
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));

// Middleware for parsing JSON requests
app.use(express.json());

// Serve local uploaded assets
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Simple health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Hillside Lead Portal Backend API is running.' });
});

// Register api router paths
app.use('/api/auth', authRoutes);
app.use('/api/why-choose', whyChooseRoutes);
app.use('/api/projects', projectRoutes);


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

    app.listen(PORT, () => {
      console.log(`[HILLSIDE SERVER] Running at http://localhost:${PORT}`);
      console.log(`[HILLSIDE SERVER] Admin Login: ${process.env.ADMIN_EMAIL || 'admin@hillside.com'}`);
      console.log(`[HILLSIDE SERVER] Admin Password: [SECURELY STORED IN ENVIRONMENT]`);
    });

  } catch (error) {
    console.error('[HILLSIDE SERVER] Failed to start due to fatal db initialization failure.');
    console.error('Please verify MySQL is running locally on port 3306.');
    process.exit(1);
  }
};

startServer();

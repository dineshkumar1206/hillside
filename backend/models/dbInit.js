import bcrypt from 'bcryptjs';
import { sequelize } from '../config/db.js';
import User from './User.js';
import Lead from './Lead.js';

export const seedDatabase = async () => {
  try {
    // Synchronize all mapped models with the MySQL tables
    await sequelize.sync({ alter: true });
    console.log('[SEQUELIZE] Database tables successfully synchronized.');

    // Seed default admin user if no users are registered
    const userCount = await User.count();
    if (userCount === 0) {
      const adminEmail = 'admin@hillside.com';
      const adminPlainPassword = 'admin123';
      const hashedPassword = await bcrypt.hash(adminPlainPassword, 10);

      await User.create({
        email: adminEmail,
        password: hashedPassword
      });
      console.log(`[SEQUELIZE] Seeded default admin account: ${adminEmail} (password: ${adminPlainPassword})`);
    } else {
      console.log('[SEQUELIZE] Users table populated. Seeding skipped.');
    }
  } catch (error) {
    console.error('[SEQUELIZE] Error syncing/seeding database:', error);
    throw error;
  }
};

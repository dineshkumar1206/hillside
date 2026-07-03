import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const WhyChoose = sequelize.define('WhyChoose', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  iconName: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'HelpCircle',
    field: 'icon_name'
  },
  sortOrder: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: 'sort_order'
  }
}, {
  tableName: 'why_chooses',
  timestamps: true,
  underscored: true
});

export default WhyChoose;

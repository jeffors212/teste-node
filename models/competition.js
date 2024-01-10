import sequelize from '../db/database.js'; 
import { DataTypes } from 'sequelize';

const Competition = sequelize.define('Competition', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING, 
    defaultValue: 'active'
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  unitOfMeasure: {
    type: DataTypes.STRING,
    allowNull: true
  },
  participantLimit: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  organizer: {
    type: DataTypes.STRING,
    allowNull: true
  }

});

export default Competition;

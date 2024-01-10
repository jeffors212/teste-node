import sequelize from '../db/database.js'; 
import { DataTypes } from 'sequelize';
import Athlete from './athlete.js';
import Competition from './competition.js'; 

const Result = sequelize.define('Result', {
    value: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING, // Ex: 'min', 'sec', 'm', 'ml'
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING, // Ex: 'provisional', 'final'
      defaultValue: 'provisional'
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    round: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  
  Result.belongsTo(Athlete);
  Result.belongsTo(Competition);
  
  export default Result;
  
import sequelize from '../db/database.js'; 
import { DataTypes } from 'sequelize';

const Athlete = sequelize.define('Athlete', {
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/ 
    },
  }, 
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  },
  previousCompetitions: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default Athlete;

import { validationResult } from 'express-validator';
import Athlete from '../models/athlete.js'; 

// Função para adicionar um novo atleta
export const addAthlete = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, age, email, cpf } = req.body; // Inclua o cpf aqui
    const newAthlete = await Athlete.create({ name, age, email, cpf }); // Inclua o cpf na criação
    res.status(201).json(newAthlete);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Função para listar todos os atletas
export const listAthletes = async (req, res) => {
  try {
    const athletes = await Athlete.findAll();
    res.status(200).json(athletes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

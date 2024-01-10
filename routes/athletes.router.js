import express from 'express';
import { body } from 'express-validator';
import * as athletesController from '../controllers/athletes.controller.js';

const router = express.Router();

// Rota para adicionar um novo atleta
router.post('/', [
  body('name').trim().notEmpty().withMessage('O nome é obrigatório.'),
  body('age').optional().isInt({ gt: 0 }).withMessage('A idade deve ser um número positivo.'),
  body('email').optional().isEmail().withMessage('Email inválido.'),
  body('cpf')
    .trim()
    .notEmpty().withMessage('CPF é obrigatório.')
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/).withMessage('Formato de CPF inválido.'),
  // Adicione mais validações conforme necessário
], athletesController.addAthlete);

// Rota para listar todos os atletas
router.get('/', athletesController.listAthletes);

export default router;

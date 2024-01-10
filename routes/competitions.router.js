import express from 'express';
import { body, param } from 'express-validator';
import * as competitionsController from '../controllers/competition.controller.js';


const router = express.Router();

// Rota para criar uma nova competição
router.post('/', [
  body('name').notEmpty().withMessage('O nome da competição é obrigatório.'),
  body('type').notEmpty().withMessage('O tipo da competição é obrigatório.'),
  // outras validações conforme necessário
], competitionsController.createCompetition);

// Rota para finalizar uma competição
router.put('/:id/finish', [
  param('id').isInt().withMessage('ID da competição inválido.')
], competitionsController.finishCompetition);

// Rota para listar uma competição específica por ID
router.get('/:id', [
  param('id').isInt().withMessage('ID da competição inválido.')
], competitionsController.getCompetitionById);

export default router;

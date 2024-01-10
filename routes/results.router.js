import express from 'express';
import { body, param } from 'express-validator';
import * as resultsController from '../controllers/results.controller.js';

const router = express.Router();

router.post('/', [
  // Validações ajustadas para adicionar resultado
  body('value').isNumeric().withMessage('Valor do resultado é obrigatório e deve ser numérico.'),
  body('unit').isLength({ min: 1 }).withMessage('Unidade é obrigatória.'),
  // Mais validações conforme necessário
], resultsController.addResult);

router.get('/', resultsController.listResults);

router.put('/:id', [
  // Validações ajustadas para atualizar resultado
  param('id').isNumeric().withMessage('ID do resultado inválido.'),
  body('value').isNumeric().withMessage('Valor do resultado deve ser numérico.'),
  // Mais validações conforme necessário
], resultsController.updateResult);

router.delete('/:id', [
  // Validação para o ID na rota DELETE
  param('id').isNumeric().withMessage('ID do resultado inválido.')
], resultsController.deleteResult);

export default router;

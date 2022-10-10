import { body } from 'express-validator';

export function createEvaluationValidator() {
  body('rating').isInt({ min: 1, max: 5 });
  body('difficulty').isInt({ min: 1, max: 5 });
  body('recommended').isBoolean();
  body('evaluation_method').isAlpha('pt-BR', { ignore: '' });
}
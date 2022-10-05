
import { Request, Response } from "express";
import { CreateEvaluationService } from "../services/CreateEvaluationService";


class CreateEvaluationController {
  async handle(request: Request, response: Response) {
    const { rating, difficulty, recommended,
      evaluation_method, comment, student,
      professor, subject } = request.body;

    const createEvaluationService = new CreateEvaluationService();

    const evaluation = await createEvaluationService.execute({
      rating, difficulty, recommended,
      evaluation_method, comment, student,
      professor, subject
    });

    response.json(evaluation);
  }
}

export { CreateEvaluationController };



import { Request, Response } from "express";
import { CreateEvaluationService } from "../services/CreateEvaluationService";
import { GetEvaluationsBySubjectIdService } from "../services/GetEvaluationsBySubjectIdService";

class EvaluationController {
  async handleGetEvaluationBySubjectId(request: Request, response: Response) {
    const { id } = request.params;

    const getEvaluationsBySubjectIdService =
      new GetEvaluationsBySubjectIdService()

    const evaluations = await getEvaluationsBySubjectIdService.execute({ id });

    return response.json(evaluations);
  }

  async handleCreateEvaluation(request: Request, response: Response) {
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

export { EvaluationController };


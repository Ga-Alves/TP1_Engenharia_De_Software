

import { Request, Response } from "express";
import { GetEvaluationsBySubjectIdService } from "../services/GetEvaluationsBySubjectIdService";


class GetEvaluationsBySubjectIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getEvaluationsBySubjectIdService = new GetEvaluationsBySubjectIdService()

    const evaluations = await getEvaluationsBySubjectIdService.execute({ id });

    return response.json(evaluations);
  }
}

export { GetEvaluationsBySubjectIdController };



import { Request, Response } from "express";
import { GetSubjectService } from "../services/GetSubjectService";


class GetSubjectController {
  async handle(request: Request, response: Response) {
    const { name } = request.params;

    const getSubjectService = new GetSubjectService();

    const subjects = await getSubjectService.execute({ name });

    return response.json(subjects);
  }
}

export { GetSubjectController };

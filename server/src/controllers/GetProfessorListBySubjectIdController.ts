
import { Request, Response } from "express";
import { GetProfessorListBySubjectIdService } from "../services/GetProfessorListBySubjectIdService";


class GetProfessorListBySubjectIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const getProfessorListBySubjectIdService = new GetProfessorListBySubjectIdService();

    const professors = await getProfessorListBySubjectIdService.execute({ id });

    return response.json(professors);
  }
}

export { GetProfessorListBySubjectIdController };

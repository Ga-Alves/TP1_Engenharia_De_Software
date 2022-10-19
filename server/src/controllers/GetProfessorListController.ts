
import { Request, Response } from "express";
import { GetProfessorListService } from "../services/GetProfessorListService";


class GetProfessorListController {
  async handle(request: Request, response: Response) {
    const getProfessorListService = new GetProfessorListService();

    const professors = await getProfessorListService.execute();

    return response.json(professors);

  }
}

export { GetProfessorListController };


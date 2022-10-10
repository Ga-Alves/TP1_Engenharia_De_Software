import { Request, Response } from "express";
import { GetSubjectByIdService } from "../services/GetSubjectByIdService";

class GetSubjectByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    
    const getSubjectByIdService = new GetSubjectByIdService();
    
    const subject = await getSubjectByIdService.execute({ id });
  
    return response.json(subject);
  }
}

export { GetSubjectByIdController };
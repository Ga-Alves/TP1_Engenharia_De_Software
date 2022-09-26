import { Request, Response } from "express";
import { LoginStudentService } from "../services/LoginStudentService";


class LoginStudentController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const loginStudentService = new LoginStudentService();

    const token = await loginStudentService.execute({ email, password });

    response.cookie('jwt', token, {
      httpOnly: true
    });

    return response.status(202).json({ msg: "Bem vindo ao RateMyProfessor!" });
  }
}

export { LoginStudentController };


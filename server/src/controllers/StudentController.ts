
import { Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import { CreateStudentService } from "../services/CreateStudentService";
import { GetStudentService } from "../services/GetStudentService";
import { LoginStudentService } from "../services/LoginStudentService";

export interface LoggedRequest extends Request {
  token: string | JwtPayload
}

class StudentController {
  async handleCreateStudent(request: Request, response: Response) {
    const { name, course, university, term, email, password } = request.body;

    const createStudentService = new CreateStudentService();

    const student = await createStudentService.execute({
      name, course, university, term, email, password
    });

    return response.json(student);
  }

  async handleLoginStudent(request: Request, response: Response) {
    const { email, password } = request.body;

    const loginStudentService = new LoginStudentService();

    const {token, student} = await loginStudentService.execute({ email, password });

    response.cookie('jwt', token, {
      httpOnly: true
    });

    return response.status(202).json({student: student});
  }

  async handleGetStudent(request: Request, response: Response) {
    // const { id } = request.params;
    const rawToken = request.header('Authorization');

    if (!rawToken)
      throw new Error("Usuario nao esta logado");

    const token = rawToken.replace('Bearer ', '');

    const decoded = verify(token, (process.env.PASSWORD_HASH || "default"));

    (request as LoggedRequest).token = decoded;

    console.log(decoded);
    return response.send('sdf');

    const getStudentService = new GetStudentService();

    // const student = await getStudentService.execute({ id });

    // return response.json(student);
  }

}

export { StudentController };


import { Request, Response } from 'express';
// import { CreateStudentService } from '../services/CreateStudentService';

export class GetStudentController {
    async handle(request: Request, response: Response) {
        const { name, course, university, term, email, password } = request.body;

        const getStudentService = new CreateStudentService();

        const student = await createStudentService.execute({
            name, course, university, term, email, password
        });

        return response.json(student);
    }
}

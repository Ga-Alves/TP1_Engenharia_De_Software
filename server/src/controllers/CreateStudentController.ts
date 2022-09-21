import { Request, Response } from 'express'
import { prismaClient } from '../database/script';

export class CreateStudentController {
    async handle(request: Request, response: Response) {
        const { name, course, university, term, email, password } = request.body;

        const student = await prismaClient.student.create({
            data: {
                name, course, university, term, email, password
            }
        })

        return response.json(student);
    }
}

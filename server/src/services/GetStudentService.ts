import { Student } from "@prisma/client";
import { prismaClient } from "../database/script";

class GetStudentService {
  async execute({ id }: {id:Student['id']}):
   Promise<Omit<Student, 'password'>> {

    let student = await prismaClient.student.findFirst({
        where: {
            id
        },
        include : {
            
        }
    });

    if(!student)
        throw new Error("O aluno com esse ID nao existe!");

   //! Nao vazar o hash!
    delete student['password'];

    return student;
  }
}

export { CreateStudentService };


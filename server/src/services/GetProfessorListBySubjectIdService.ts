import { Subject } from "@prisma/client";
import { prismaClient } from "../database/script";


class GetProfessorListBySubjectIdService {
  async execute({ id }: { id: Subject['id'] }) {
    let subject = await prismaClient.subject.findFirst({
      where: {
        id
      },
      include: {
        professors: true
      }
    });

    if (!subject)
      throw new Error("A matéria com esse ID não existe!");

    return subject.professors;
  }
}

export { GetProfessorListBySubjectIdService };

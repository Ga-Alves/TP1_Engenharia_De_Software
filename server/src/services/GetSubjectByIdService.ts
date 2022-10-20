import { Subject } from "@prisma/client";
import { prismaClient } from "../database/script";

class GetSubjectByIdService {
  async execute({ id }: { id: Subject['id'] }) {
    let subject = await prismaClient.subject.findFirst({
      where: {
        id
      }
    });

    if (!subject)
      throw new Error("A matéria com esse ID não existe!");

    return subject;
  }
}

export { GetSubjectByIdService };


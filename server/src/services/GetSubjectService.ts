import { prismaClient } from "../database/script";

class GetSubjectService {
  async execute({ name = "" }) {
    const subjects = await prismaClient.subject.findMany();
    return subjects;
  }
}

export { GetSubjectService };

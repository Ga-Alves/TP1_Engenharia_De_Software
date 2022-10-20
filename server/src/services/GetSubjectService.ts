import { prismaClient } from "../database/script";

class GetSubjectService {
  async execute() {
    const subjects = await prismaClient.subject.findMany();
    return subjects;
  }
}

export { GetSubjectService };


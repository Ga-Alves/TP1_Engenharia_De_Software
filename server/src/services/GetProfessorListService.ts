import { prismaClient } from "../database/script";


class GetProfessorListService {
  async execute() {
    const professors = await prismaClient.professor.findMany();
    return professors;
  }
}

export { GetProfessorListService };


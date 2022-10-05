import { Evaluation } from "@prisma/client";
import { prismaClient } from "../database/script";


class CreateEvaluationService {
  async execute({ rating, difficulty, recommended,
    evaluation_method, comment, student,
    professor, subject }: Omit<Evaluation, 'id' | 'created_at'>) {
    const evaluation = await prismaClient.evaluation.create({
      data: {
        rating, difficulty, recommended,
        evaluation_method, comment, student,
        professor, subject
      }
    });

    return evaluation;
  }
}

export { CreateEvaluationService };


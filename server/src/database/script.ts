import { PrismaClient, Subject } from '@prisma/client';

export const prismaClient = new PrismaClient();


async function main() {
  //? Valores das materias
  const { _count: { id: subjectCount } } =
    await prismaClient.subject.aggregate({
      _count: { id: true }
    });

  if (subjectCount === 0) {
    const defaultSubjects: Pick<Subject, 'name' | 'syllabus'>[] = [
      { name: "Matematica", syllabus: "Fazer conta de +" },
      { name: "Portugues", syllabus: "Escrever serto" }
    ];

    for (let data of defaultSubjects)
      await prismaClient.subject.create({ data });

  }


  const allSubjects = await prismaClient.subject.findMany();
  console.log(allSubjects);

}

main()
  .then(async () => {
    await prismaClient.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prismaClient.$disconnect()
    process.exit(1)
  })
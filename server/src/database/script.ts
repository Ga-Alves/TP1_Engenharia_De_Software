import { PrismaClient, Professor, Subject } from '@prisma/client';

export const prismaClient = new PrismaClient();


async function main() {
  //? Valores das materias
  const { _count: { id: subjectCount } } =
    await prismaClient.subject.aggregate({
      _count: { id: true }
    });

  if (subjectCount === 0) {
    const defaultSubjects: Pick<Subject, 'name' | 'syllabus'>[] = [
      {
        name: "Algoritmos 2",
        syllabus: "Algoritmos para manipulação de sequências. Teoria de NP-completude e técnicas de solução exata e aproximada de problemas NP-difíceis. Algoritmos para dados geométricos"
      },
      {
        name: "Pesquisa Operacional",
        syllabus: "Modelagem. Fundamentos de programação matemática. Programação linear e suas aplicações. Método simplex. Análise de sensibilidade e dualidade. Otimização em redes. Programação dinâmica."
      },
      {
        name: "Linguagens de Programação",
        syllabus: "Linguagens de programação procedimentais e aplicativas. Estudo detalhado de algumas linguagens importantes. Critérios e técnicas na especificação e projeto de linguagens."
      },
      {
        name: "Equações Diferenciais C",
        syllabus: "Equações Diferenciais Ordinárias de 1a e 2a Ordens - Soluções de Equações Diferenciais em Séries de Potências - Sistemas de Equações Diferenciais Lineares - Transformada de Laplace - Séries de Fourier - Equações Diferenciais Parciais"
      },
    ];


    for (let data of defaultSubjects)
      await prismaClient.subject.create({ data });

  }

  //? Valores dos professores
  const { _count: { id: professorCount } } =
    await prismaClient.professor.aggregate({
      _count: { id: true }
    });

  if (professorCount === 0) {
    const defaultProfessorsSubjects: { professor: Pick<Professor, 'name' | 'university'>, subjectsNames: Subject['name'][] }[] = [
      {
        professor: { name: "Gabriel de Morais Coutinho", university: "Universidade Federal de Minas Gerais" },
        subjectsNames: ["Pesquisa Operacional"]
      },
      {
        professor: { name: "Renato Vimieiro", university: "Universidade Federal de Minas Gerais" },
        subjectsNames: ["Algoritmos 2"]
      },
      {
        professor: { name: "Haniel Barbosa", university: "Universidade Federal de Minas Gerais" },
        subjectsNames: ["Linguagens de Programação"]
      },
      {
        professor: { name: "Ronaldo Brasileiro Assunção", university: "Universidade Federal de Minas Gerais" },
        subjectsNames: ["Equações Diferenciais C"]
      },
    ];

    for (let { professor, subjectsNames } of defaultProfessorsSubjects) {
      const backProf = await prismaClient.professor.create({ data: professor });
      await prismaClient.professor.update({
        where: { id: backProf.id },
        data: {
          subjects: {
            connect: subjectsNames.map(sbj => ({ name: sbj }))
          }
        }
      });
    }


  }

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
import { Router } from "express";
import { EvaluationController } from "./controllers/EvaluationController";
import { GetSubjectByIdController } from "./controllers/GetSubjectByIdController";
import { GetSubjectController } from "./controllers/GetSubjectController";
import { ProfessorController } from "./controllers/ProfessorController";
import { StudentController } from "./controllers/StudentController";
import { studentValidate } from "./middlewares/CreateEvaluationValidator";

const router = Router();

const studentController = new StudentController();

const getSubjectController = new GetSubjectController();
const getSubjectByIdController = new GetSubjectByIdController();

const evaluationController = new EvaluationController();

const professorController = new ProfessorController();

router.post('/aluno/signup', studentController.handleCreateStudent);
router.post('/aluno/login', studentController.handleLoginStudent);
router.get('/aluno/:id', studentController.handleGetStudent);

router.get('/materia', getSubjectController.handle);
router.get('/materia/:id', getSubjectByIdController.handle);

router.get('/avaliacoes/:id', evaluationController.handleGetEvaluationBySubjectId);
router.post('/avaliacoes', studentValidate(), evaluationController.handleCreateEvaluation);

router.get('/professores', professorController.handleGetProfessors);
router.get('/professores/materia/:id', professorController.handleGetProfessorsBySubjectId);


export { router };


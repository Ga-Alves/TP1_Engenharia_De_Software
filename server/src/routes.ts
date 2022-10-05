import { Router } from "express";
import { CreateEvaluationController } from "./controllers/CreateEvaluationController";
import { CreateStudentController } from "./controllers/CreateStudentController";
import { GetEvaluationsBySubjectIdController } from "./controllers/GetEvaluationsBySubjectIdController";
import { GetStudentController } from "./controllers/GetStudentController";
import { GetSubjectController } from "./controllers/GetSubjectController";
import { LoginStudentController } from "./controllers/LoginStudentController";

const router = Router();

const createStudent = new CreateStudentController();
const loginStudentController = new LoginStudentController();
const getStudentController = new GetStudentController();

const getSubjectController = new GetSubjectController();

const getEvaluationsBySubjectIdController = new GetEvaluationsBySubjectIdController();
const createEvaluationController = new CreateEvaluationController();

router.post('/aluno/signin', createStudent.handle);
router.post('/aluno/login', loginStudentController.handle);
router.get('/aluno/:id', getStudentController.handle);

router.get('/materia', getSubjectController.handle);

router.get('/avaliacoes/:id', getEvaluationsBySubjectIdController.handle);
router.post('/avaliacoes', createEvaluationController.handle);

export { router };


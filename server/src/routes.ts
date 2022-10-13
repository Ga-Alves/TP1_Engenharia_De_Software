import { Router } from "express";
import { CreateStudentController } from "./controllers/CreateStudentController";
import { GetEvaluationsBySubjectIdController } from "./controllers/GetEvaluationsBySubjectIdController";
import { GetStudentController } from "./controllers/GetStudentController";
import { GetSubjectController } from "./controllers/GetSubjectController";
import { LoginStudentController } from "./controllers/LoginStudentController";
import { GetSubjectByIdController } from "./controllers/GetSubjectByIdController";

const router = Router();

const createStudent = new CreateStudentController();
const loginStudentController = new LoginStudentController();
const getStudentController = new GetStudentController();

const getSubjectController = new GetSubjectController();
const getSubjectByIdController = new GetSubjectByIdController();

const getEvaluationsBySubjectIdController = new GetEvaluationsBySubjectIdController();

router.post('/aluno/signup', createStudent.handle);
router.post('/aluno/login', loginStudentController.handle);
router.get('/aluno/:id', getStudentController.handle);

router.get('/materia', getSubjectController.handle);
router.get('/materia/:id', getSubjectByIdController.handle);

router.get('/avaliacoes/:id', getEvaluationsBySubjectIdController.handle);

export { router };


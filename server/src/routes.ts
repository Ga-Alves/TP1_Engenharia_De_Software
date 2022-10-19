import { Router } from "express";
import { CreateEvaluationController } from "./controllers/CreateEvaluationController";
import { CreateStudentController } from "./controllers/CreateStudentController";
import { GetEvaluationsBySubjectIdController } from "./controllers/GetEvaluationsBySubjectIdController";
import { GetProfessorListController } from "./controllers/GetProfessorListController";
import { GetStudentController } from "./controllers/GetStudentController";
import { GetSubjectByIdController } from "./controllers/GetSubjectByIdController";
import { GetSubjectController } from "./controllers/GetSubjectController";
import { LoginStudentController } from "./controllers/LoginStudentController";
import { studentValidate } from "./middlewares/CreateEvaluationValidator";

const router = Router();

const createStudent = new CreateStudentController();
const loginStudentController = new LoginStudentController();
const getStudentController = new GetStudentController();

const getSubjectController = new GetSubjectController();
const getSubjectByIdController = new GetSubjectByIdController();

const getEvaluationsBySubjectIdController = new GetEvaluationsBySubjectIdController();
const createEvaluationController = new CreateEvaluationController();

const getProfessorListController = new GetProfessorListController();

router.post('/aluno/signup', createStudent.handle);
router.post('/aluno/login', loginStudentController.handle);
router.get('/aluno/:id', getStudentController.handle);

router.get('/materia', getSubjectController.handle);
router.get('/materia/:id', getSubjectByIdController.handle);

router.get('/avaliacoes/:id', getEvaluationsBySubjectIdController.handle);
router.post('/avaliacoes', studentValidate(), createEvaluationController.handle);

router.get('/professores', getProfessorListController.handle);


export { router };


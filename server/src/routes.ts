import { Router } from "express";
import { CreateStudentController } from "./controllers/CreateStudentController";
import { GetStudentController } from "./controllers/GetStudentController";
import { LoginStudentController } from "./controllers/LoginStudentController";

const router = Router();

const createStudent = new CreateStudentController();
const loginStudentController = new LoginStudentController();
const getStudentController = new GetStudentController();

router.post('/aluno/signin', createStudent.handle);
router.post('/aluno/login', loginStudentController.handle);
router.get('/aluno/:id', getStudentController.handle);


export { router };


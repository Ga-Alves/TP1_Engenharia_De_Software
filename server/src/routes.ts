import { Router } from "express";
import { CreateStudentController } from "./controllers/CreateStudentController";
import { LoginStudentController } from "./controllers/LoginStudentController";

const router = Router();

const createStudent = new CreateStudentController();
const loginStudentController = new LoginStudentController();

router.post('/aluno/signin', createStudent.handle);
router.post('/aluno/login', loginStudentController.handle);


export { router };


import { api } from "../service/api";

export interface signinBody {
    name: string;
    course: string;
    university: string;
    term: string;
    email: string;
    password: string;
}

export default async function signin(body:signinBody){
    return api.post('aluno/signin', body);
}

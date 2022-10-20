import { api } from "../service/api";
import { Subject } from "../types/subject";

export async function getSubject(id:string):Promise<Subject>{
    const res = await api.get(`materia/${id}`);

    return {
        id: res.data.id,
        name: res.data.name,
        syllabus: res.data.syllabus,
        //TODO BACK: Calcular e retornar estes dados 
        code: "DCC 133",
        rating: 3,
        difficulty: 4,
        recommend_rate: 4,
    }
}

import { api } from "../../service/api";

import { Professor } from "../../types/professor";

async function subjectProfessors(id:string):Promise<Professor[]> {
    const res = await api.get(`professores/materia/${id}`);

    return res.data.map((item:any) => ({
        id: item.id,
        name: item.name,
        university: item.university,
        rating: 4,
    }));
}

export {subjectProfessors}
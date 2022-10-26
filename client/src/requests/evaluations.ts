import { api } from "../service/api";
import { Evaluation } from "../types/evaluation";

export async function avaliacoes(id:string):Promise<Evaluation[]>{
    const res = await api.get(`avaliacoes/${id}`);
    

    return res.data.map((item:any) => ({
        id: item.id,
        rating: item.rating,
        difficulty: item.difficulty,
        recommended: item.recommended,
        evaluation_method: item.evaluation_method,
        comment: item.comment,
    }));
}

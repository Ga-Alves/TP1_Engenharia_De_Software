import { api } from "../service/api";

export default async function subject(id:string|undefined){
    return api.get(`materia/${id}`);
}

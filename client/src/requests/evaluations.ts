import { api } from "../service/api";

export default async function avaliacoes(id:string|undefined){
    return api.get(`avaliacoes/${id}`);
}

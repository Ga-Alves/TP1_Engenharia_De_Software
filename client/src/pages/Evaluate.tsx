import EvaluatePage from "../components/Evaluate/Evaluate"
export default function Evaluate(){

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    
        const body = {
          subject: "INF011",
          professor: String(data.get('professor')),
          rating: Number(data.get('rating')),
          difficulty: Number(data.get('difficulty')),
          recommended: Boolean(data.get('recommended')),
          evaluation_method: String(data.get('evaluation_method')),
          comment: String(data.get('comment')),
        };
        console.log(body);
    
    };

    return (<EvaluatePage
        handleSubmit={handleSubmit}
        subject_name="Engenharia de Software"
        id="INF011"
        professors={[{name: "João da Silva", id: "1"}, {name: "Maria da Silva", id: "2"}]}
    />)
}
import Subject from "../components/Subject/Subject";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import getSubject from "../requests/subject";
import getEvaluations from "../requests/evaluations"

interface Subject{
    id: string;
    name: string;
    syllabus: string;
    department: string;
    workload: number;
    createdAt: string;
}

interface Evaluation{
    id: string;
    rating: number;
    difficulty: number;
    recommended: boolean;
    evaluation_method: string;
    comment: string;
    createdAt: string;
    subject: string;
    professor: string;
    student: string;
}


export default function SubjectPage() {

    const {id} = useParams();
    const [subject, setSubject] = useState<Subject>();
    const [evaluations, setEvaluations] = useState<Evaluation[]>([]);

    useEffect(() => {
        getSubject(id)
            .then((response) => response.data )
            .then((data) => setSubject(data));
        
        getEvaluations(id)
            .then((response) => response.data)
            .then((data) => setEvaluations(data));
    }, [id]);

    function buildSubjectProps() {
        return {
            subject: {
                name: subject? subject.name : "",
                syllabus: subject? subject.syllabus : "",
                code: subject? subject.name : "",
                rating: 3.5,
                difficulty: 3.5,
                recommend_rate: 3.5,
            },
            professors: [
                {
                    name: "João da Silva",
                    rating: 4.5
                }
            ],
    
            evaluations: evaluations.map((evaluation) => {
                const data = {
                    rating: evaluation? evaluation.rating : 0,
                    difficulty: evaluation? evaluation.difficulty : 0,
                    recommend: evaluation? evaluation.recommended : false,
                    evaluation_method: evaluation? evaluation.evaluation_method : "",
                    comment: evaluation? evaluation.comment : ""
                }
                console.log(data);
                return data
            })
        }
    }

    return (
        <Subject
        
        {...buildSubjectProps()}/>
    )

}
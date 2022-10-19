import {useState, useEffect} from 'react'

import Subject from "../components/Subject/Subject";

// request
import subject
  from "../requests/subject";

//  
import { useParams } from "react-router-dom";

import { Props } from "../components/Subject/Subject";

export default function SubjectPage() {
    const {id} = useParams()
        
        const propsDefault = {
        subject: {
            name: "Programação Orientada a Objetos",
            syllabus: `A POO é um paradigma de programação que se propõe a abordar o design de um sistema em termos de entidades, os objetos, e relacionamentos entre essas entidades. 
            
            Imagine que estamos desenhando um sistema de gerenciamento de funcionários para uma empresa: o funcionário, sob esta abordagem, será uma entidade, e ele deve pertencer a um departamento. 
            
            O departamento também será uma entidade, um objeto. Um departamento pode ter um ou mais funcionários. Logo, estabelecemos um relacionamento entre funcionário e departamento.`,
            code: 'DCC213',
            rating: 3.5,
            difficulty: 4.7,
            recommend_rate: 0.8},

        professors: [
            {
                name: "João da Silva",
                rating: 4.5
            }
        ],

        evaluations: [
            {
                rating: 4,
                difficulty: 4.7,
                evaluation_method: "Prova e Trabalho",
                recommend: true,
                comment: "Muito bom, recomendo!"
            },
            {
                rating: 2,
                difficulty: 5,
                evaluation_method: `20 pontos em 2 TPs (10 cada)
                75 pontos de prova (25 cada)
                10 pontos de exercício`,
                recommend: false,
                comment:   `Fiquei com pregs das aulas dele que é tipo POO for dummies (mas acho que isso é da ementa e não do profs). Mas ele ensina com calma, dá uns exemplos legais, bem organizado, os tps são bem modelados tbm. Recomendo.`
            }
        ]
    }
    const [props, setProps] = useState<Props>(propsDefault)

    
    useEffect(() => {
        subject(id)
        .then((res) => {
            const subj:Props['subject'] = {
                id: String(id),
                name: String(res.data.name),
                syllabus: String(res.data.syllabus),
                code: 'static',
                rating: 3,
                difficulty: 3,
                recommend_rate: 0.8,
            }
            setProps({...props, subject:{...subj}})
            
        })
        .catch((err) => console.log(err.response))
    }, [])
    
    return (
        <Subject {...props}/>
    )

}
import { useEffect, useState } from 'react'

//style
import './SubjectGrid.css'

// components
import Card
  from "./components/CardComponent/CardComponent"


// MUI
import { TextField } from '@mui/material'
// interfaces
import { SubjectCard } from './components/CardComponent/CardComponent'

// requests
import listSubjects
  from '../../../requests/Subjects/listSubjects'

interface subject {
    id: string;
    name: string;
    syllabus: string;
    department: string;
    workload: number;
    created_at: string;
    code: string;
    rating: number;
}


export default function SubjectGrid() {
    const [subjects, setSubjects] = useState<Array<SubjectCard>>([])
    const [filter, setFilter] = useState<string>('')

    function filterList(list:Array<SubjectCard>) {
        const filtro = list.filter((item) => {
            const subject = item.subject.toLowerCase().includes(filter.toLowerCase())
            const subjectCode = item.subjectCode.toLowerCase().includes(filter.toLowerCase())
            return subject || subjectCode
        })
        return filtro
    }

    useEffect(() =>{
        listSubjects()
            .then((res) => {
                console.log(res.data);
                
                const list = res.data.map((item:subject) => {
                    const card:SubjectCard ={
                        id: item.id,
                        subject: item.name,
                        subjectCode: item.code,
                        description: item.syllabus,
                        workload: String(item.workload),
                        rating:String((Math.floor( item.rating * 100) / 100)),
                    }
                    return card;
                })
                setSubjects(list);
            }
            )
    }, [])
    
   
    return(
        <>
            <TextField 
                style={{margin:'100px 0px 0px 1vw'}}
                label='Filtrar'
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
            />
            <div className="SubjectGrid">
                {filterList(subjects).map((item, i) => <Card data={item} key={i}/>)}
            </div>
        </>
    )
}
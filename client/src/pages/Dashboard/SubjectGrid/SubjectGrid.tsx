import { useState } from 'react'

//style
import './SubjectGrid.css'

// components
import Card
  from "./components/CardComponent/CardComponent"


// MUI
import { TextField } from '@mui/material'
// interfaces
import { SubjectCard } from './components/CardComponent/CardComponent'
import { FitbitRounded } from '@mui/icons-material'
import { padding } from '@mui/system'

export default function SubjectGrid() {
    const [filter, setFilter] = useState<string>('')

    function filterList(list:Array<SubjectCard>) {
        const filtro = list.filter((item) => {
            const subject = item.subject.toLowerCase().includes(filter.toLowerCase())
            const subjectCode = item.subjectCode.toLowerCase().includes(filter.toLowerCase())
            return subject || subjectCode
        })
        return filtro
    }
    
    const subjects: Array<SubjectCard> = [
        {
            subject: 'Ciência de Dados',
            subjectCode: 'DCC024',
            rating: '1.5',
            description: 'lorem ipsum corem lorem',
        },
        {
            subject: 'Eng. de Software',
            subjectCode: 'DCC025',
            rating: '5',
            description: 'lorem ipsum corem lorem',
        },
        {
            subject: 'Ciência de Dados',
            subjectCode: 'DCC024',
            rating: '1.5',
            description: 'lorem ipsum corem lorem',
        },
        {
            subject: 'Eng. de Software',
            subjectCode: 'DCC025',
            rating: '5',
            description: 'lorem ipsum corem lorem',
        },
        {
            subject: 'Ciência de Dados',
            subjectCode: 'DCC024',
            rating: '1.5',
            description: 'lorem ipsum corem lorem',
        },
        {
            subject: 'Eng. de Software',
            subjectCode: 'DCC025',
            rating: '5',
            description: 'lorem ipsum corem lorem',
        },
        {
            subject: 'Eng. de Software',
            subjectCode: 'DCC025',
            rating: '5',
            description: 'lorem ipsum corem lorem',
        },
        {
            subject: 'Eng. de Software',
            subjectCode: 'DCC025',
            rating: '5',
            description: 'lorem ipsum corem lorem',
        },
        {
            subject: 'Eng. de Software',
            subjectCode: 'DCC025',
            rating: '5',
            description: 'lorem ipsum corem lorem',
        },
        {
            subject: 'Eng. de Software',
            subjectCode: 'DCC025',
            rating: '5',
            description: 'lorem ipsum corem lorem',
        },
    ]
    return(
        <>
            <TextField 
                style={{margin:'100px 0px 0px 1vw'}}
                label='Filtrar'
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
            />
            <div className="SubjectGrid">
                {filterList(subjects).map(item => <Card data={item}/>)}
            </div>
        </>
    )
}
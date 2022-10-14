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
            subject: 'Eng. de Software',
            subjectCode: 'DCC025',
            rating: '5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            subject: 'Introdução a Banco de Dados',
            subjectCode: 'DCC013',
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
                {filterList(subjects).map((item, i) => <Card data={item} key={i}/>)}
            </div>
        </>
    )
}
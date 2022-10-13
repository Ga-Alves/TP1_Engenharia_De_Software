//style
import './SubjectGrid.css'

// components
import Card
  from "./components/CardComponent/CardComponent"

// interfaces
import { SubjectCard } from './components/CardComponent/CardComponent'

export default function SubjectGrid() {
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
        <div className="SubjectGrid">
            {subjects.map(item => <Card data={item}/>)}
        </div>
    )
}
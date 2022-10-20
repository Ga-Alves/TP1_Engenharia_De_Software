import { Button } from '@mui/material'
import './EvaluateSteps.css'
import { SubjectStep } from './SubjectStep/SubjectStep'

export default function EvaluateSteps(){
    return (
        <div className = 'EvaluateSteps'>
            <SubjectStep />

            <Button sx={{borderRadius:'30px'}} color='neutral' className='gradientButton'>Próximo</Button>
        </div>
    )
}

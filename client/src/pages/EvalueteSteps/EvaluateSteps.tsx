import { Button } from '@mui/material'
import { useState } from 'react'
import './EvaluateSteps.css'
import ProfessorStep from './ProfessorStep/ProfessorStep'
import { SubjectStep } from './SubjectStep/SubjectStep'

export default function EvaluateSteps(){

    const [step, setStep] = useState<number>(0)
    const steps = [<SubjectStep />, <ProfessorStep/>]

    function nextStep() {
        if (step < steps.length - 1) {
            setStep(step+1)
        } else {
            alert('Fim da avaliação')
        }
    }

    return (
        <div className = 'EvaluateSteps'>
            {steps[step]}
            <Button sx={{borderRadius:'30px'}}
                color='neutral'
                className='gradientButton'
                onClick={nextStep}>Próximo</Button>
        </div>
    )
}

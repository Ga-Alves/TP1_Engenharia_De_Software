import './SubjectStep.css';
import { Typography } from "@mui/material";

export function SubjectStep(){
    return (
        <div className = 'SubjectStep'>
            <Typography variant='h1'>
                Como foi sua experiência em <span className="gradientColor">Introdução à Ciência da Computação?</span>
            </Typography>
            <Typography fontSize='large'>
                Escolha uma nota geral *
            </Typography>
            <Typography color='disable' fontSize='large'>
            A nota deve ser um resumo de todos os atributos da matéria como conteúdo, didática, pertinência e coerência de aulas com avaliações.
            </Typography>
        </div>
    )
}

import './SubjectStep.css';
import { FormControlLabel, Radio, RadioGroup, Rating, Slider, Typography } from "@mui/material";
import { useState } from 'react';


interface SubjectFormStep {
    rating: number;
    difficulty: number;
    recomend: boolean;
}

export function SubjectStep(){

    const [bodyForm, setBodyForm] = useState<SubjectFormStep>({
        rating: 1,
        difficulty: 5,
        recomend: true,
    })

    const marks = [
            {
              value: 0,
              label: 'Muito fácil',
            },
            {
              value: 10,
              label: 'Muito difícil',
            },
        ]

        function handleRating(newValue: number | null) {
            setBodyForm({...bodyForm, ...{rating: newValue ? newValue : 0}})
        }

        function handleSlider(newValue: number | number[]) {
            if (typeof(newValue) == 'number'){
                setBodyForm({...bodyForm, ...{difficulty: newValue ? newValue : 0}})
            }
        }
        function handleRecomend(recomend:string) {
            const res = ((recomend) === 'true')
            setBodyForm({...bodyForm, ...{recomend: res}})
        }

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
            <Rating 
                value={bodyForm.rating}
                onChange={(_, newValue) => handleRating(newValue)}
                name="size-large"
                precision={1}
                getLabelText={(rating) => String(rating)}/>
            <Typography color='disable' fontSize='large'>
            O quão difícil é essa matéria?
            </Typography>
            <Slider
                value={bodyForm.difficulty}
                aria-label="Always visible"
                onChange={(_, newValue) => handleSlider(newValue)}
                getAriaValueText={(value) => String(value)}
                step={1}
                marks={marks}
                valueLabelDisplay="on"
                max={10}
            />
            <Typography color='disable' fontSize='large'>
            Você recomendaria essa matéria para um amigo?
            </Typography>
            <RadioGroup value={bodyForm.recomend} onChange={(e) => handleRecomend(e.target.value)}>
                <FormControlLabel value={true} control={<Radio />} label="Sim" />
                <FormControlLabel value={false} control={<Radio />} label="Não" />
            </RadioGroup>
            <button onClick={() => console.log(bodyForm)}>
                Click!
            </button>
        </div>

    )
}

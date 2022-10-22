import { MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { subjectProfessors } from "../../../requests/Subjects/subjectProfessors";
import { Professor } from "../../../types/professor";

export default function ProfessorStep(){

    const {id} = useParams()
    const [professors, setProfessors] = useState<Professor[]>([])
    useEffect(() => {
        if (id != undefined) {
            subjectProfessors(id)
                .then((res) => setProfessors(res))
        }
    }, [])
    return (
        <div className = 'ProfessorStep'>
            <Typography>
                Penúltima coisa! Como funcionava a matéria?
            </Typography>
            <Typography>
                Quanto mais detalhes, melhor!
            </Typography>
            <Typography>
                Quem foi seu professor? *
            </Typography>

            <TextField
                select
                margin="normal"
                required
                name="professor"
                label="Professor"
                id="professor"
                autoComplete="???"
                value={1}
                inputProps={ professors.map((item, indx) => {<MenuItem value={item.id}>{item.name}</MenuItem>})}
                >
                </TextField>
            <Typography>
                Como foi o sistema de avaliação?
            </Typography>

        </div>
    )
}

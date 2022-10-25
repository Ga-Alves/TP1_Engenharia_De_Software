import './CardComponent.css'

// MUI
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// incons
import StarIcon from '@mui/icons-material/Star';

import { useNavigate } from 'react-router-dom';

export interface SubjectCard  {
    id: string;
    subject: string;
    subjectCode: string;
    rating: string;
    description: string;
    workload: string;
}

interface CardProps {
    data: SubjectCard;
}

export default function CardComponent(props:CardProps) { 

    const navigate = useNavigate()
    return (
        <div className='CardComponent'>
            <Card sx={{ maxWidth: 400 }}>
                <CardActionArea sx={{padding: '10px'}} onClick={() => navigate('../../subject/' + props.data.id)}> 
                    <Chip color='info' label={props.data.subjectCode}/>

                    <Grid container marginTop={1}>
                        <Grid item xs={8}>
                            <Typography marginBottom={1} variant='h5' color='black'>
                                {props.data.subject}
                            </Typography>
                            <Typography color='#BDBDBD' marginBottom={1}>
                                Dep. Ciência da Computação
                                Optativa, {props.data.workload}hrs
                            </Typography>
                        </Grid>
                        <Grid item xs={4} color='black' display='flex' alignItems='center'>
                            <StarIcon htmlColor='#FFC700'/>
                            <Typography>
                                {props.data.rating}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color='secondary'>
                                {props.data.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>

        </div>
    )
}

// MUI
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// incons
import StarIcon from '@mui/icons-material/Star';

export interface SubjectCard  {
    subject: string;
    subjectCode: string;
    rating: string;
    description: string;
}

interface CardProps {
    data: SubjectCard;
}

export default function CardComponent(props:CardProps) { 
    return (
        <div className='CardComponent'>
            <Card sx={{ maxWidth: 345, padding: '10px' }}>
                <Chip color='info' label={props.data.subjectCode}/>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant='h5' color='black'>
                            {props.data.subject}
                        </Typography>
                        <Typography color='#BDBDBD'>
                            Dep. Ciência da Computação
                            Optativa, 60hrs
                        </Typography>
                    </Grid>
                    <Grid xs={4} color='black' display='flex' alignItems='center'>
                        <StarIcon htmlColor='#FFC700'/>
                        <Typography>
                            {props.data.rating}
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography color='primary'>
                            {props.data.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Card>

        </div>
    )
}

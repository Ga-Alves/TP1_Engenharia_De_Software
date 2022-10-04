import {Button, Box, Chip, Container, Grid, LinearProgress, linearProgressClasses, Paper, Rating, Slider, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';


export default function Evaluation(){

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 7,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
        },
    }));
    
    
    return (
        <Grid
            container
            direction="column"
            gap={3}
        >
            <Grid container gap={1}>
                <Typography variant='h5'>Nota geral da disciplina</Typography>
                <Grid
                    container
                    alignItems='center'
                    direction='row'
                >
                    <Rating value={3.5} name="size-large" size='large' precision={0.5} getLabelText={(rating) => String(rating)} readOnly/>
                    <Typography variant='body1' sx={{marginLeft: '1vh'}}> {3.5}/5 </Typography>
                </Grid>
            </Grid>

            <Grid container gap={1}>
                <Typography variant='h5'>Dificuldade da disciplina</Typography>
                <Grid
                    container
                    alignItems='center'
                    direction='row'
                >
                    <Box sx={{ width: '20%' }}>
                        <BorderLinearProgress variant="determinate" value={45} />
                    </Box>
                    <Typography variant='body1' sx={{marginLeft: '1vh'}}> {4.5}/5 </Typography>
                </Grid>
            </Grid>

            <Grid container gap={1}>
                <Typography variant='h5'>Recomendação</Typography>
                <Grid
                    container
                >
                    <Typography variant='h4' color="#383838"> 43% dos alunos recomendam a disciplina</Typography>
                </Grid>
            </Grid>
        </Grid>
    )

}
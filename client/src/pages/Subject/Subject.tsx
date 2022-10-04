import {Chip, Container, Grid, Paper, Rating, Typography} from '@mui/material';
import Header from './Header';
import ProfessorCard from '../components/ProfessorCard/ProfessorCard';
import ReadMore from '../components/ReadMore/ReadMore';
import { margin } from '@mui/system';
import {theme} from '../../theme';
export default function Subject() {
    const rating = 3.5;
    const props = {
        ementa: 'O curso de Introdução à Ciência de Dados (DCC212) do DCC-UFMG tem como principal objetivo trazer para os discentes um conhecimento estatístico através de um ponto de vista computacional. O curso é fortemente inspirado nas ofertas chamadas de Data8 e Data100 da universidade de Berkeley. Tais ementas (Data8 e Data100) foram adaptadas para a realidade de discentes da graduação da UFMG. Em particular, foi levado em conta que na nossa grade, os discentes já passaram por matérias como: Álgebra Linear Computacional e Probabilidade.' }

    return (
    <Grid
        sx={{
            backgroundColor: theme.palette.background.default,
            paddingY: '1rem'
        }}
    >
        <Container
        maxWidth='md'

       >
            <Grid
                direction="column"
                component={Paper}
                height='100vh'
                marginTop={10}
                padding={8}
            >
                <Header/>
                <Grid
                sx={{
                    marginY: '2rem'
                }}>
                <Typography variant='h5'> Ementa </Typography>
                <ReadMore text={props.ementa} maxCharCount={200}/>
                </Grid> 
                <ProfessorCard/>
            </Grid>
       </Container>
    </Grid>
        );
}
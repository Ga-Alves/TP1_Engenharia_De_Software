import {Chip, Container, Grid, Paper, Rating, Typography} from '@mui/material';
import Header from './Header/Header';
import ProfessorCard from './ProfessorCard/ProfessorCard';
import ReadMore from '../ReadMore/ReadMore';
import Evaluations from './Evaluations/Evaluations';
import StudentComment from './StudentComment/StudentComment';
import {theme} from '../../theme';

export type Props = {
    subject: {
        id?: string;
        name?: string;
        syllabus?: string;
        code?: string;
        rating?: number;
        difficulty?: number;
        recommend_rate?: number;},

    professors:
        {
            name?: string;
            rating?: number;
        }[],
    evaluations: 
        {
            rating?: number;
            difficulty?: number;
            evaluation_method?: string;
            recommend?: boolean;
            comment?: string;
        }[]
}

export default function Subject({subject, professors, evaluations}:Props) {

    const rating = 3.5;

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
                marginTop={10}
                padding={8}
            >
                <Header
                    rating={subject.rating}
                    name={subject ? subject.name : ''}
                    code={subject.code}
        
                />
                <Grid
                sx={{
                    marginY: '2rem'
                }}>
                <Typography variant='h5'> Ementa </Typography>
                <ReadMore text={subject.syllabus} maxCharCount={200}/>
                </Grid> 
                <Grid
                 container
                 direction="column"
                >
                    <Typography variant='h5'> Professores </Typography>
                    <Grid
                        container
                        direction="row"
                        paddingY={1}
                        sx={{
                            gap: '1rem'
                        }}

                    >
                        {
                            professors.map((professor) => {
                                return(
                                    <ProfessorCard name={professor.name} rating={professor.rating}/>
                                )
                            })
                        }
                    </Grid>
                </Grid>

                <Grid
                 container
                 direction="column"
                 marginY={2}
                >
                    <Typography variant='h3'
                    sx={{
                        marginBottom: '1rem',
                        marginTop: '2rem'
                    }}> Avaliações </Typography>

                    <Evaluations
                        rating={subject.rating}
                        difficulty={subject.difficulty}
                        recommend_rate={subject.recommend_rate}
                    
                    />
                </Grid>

                <Grid
                sx={{
                    marginTop: '4rem'
                }}
                >
                    <Typography variant='h3' marginBottom={3}> Comentários </Typography>

                    {
                        evaluations.map((evaluation) => {
                            return(
                                <StudentComment rating={evaluation.rating} difficulty={evaluation.difficulty} evaluation_method={evaluation.evaluation_method} recommend={evaluation.recommend} comment={evaluation.comment}/>
                            )
                        })
                    }
                </Grid>

            </Grid>
       </Container>
    </Grid>
        );
}
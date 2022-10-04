import {Button, Chip, Container, Grid, Paper, Rating, Typography} from '@mui/material';

export default function Header(){
    
    
    return (
        <Grid
            direction="column"
        >
            <Chip
                label="DCC212"
                size='medium'
                sx={{
                    padding: '0.5rem',
                }}
                color="primary"
            />
            <Grid
                container
                justifyContent='space-around'
                alignItems='center'
            >
                    <Grid
                        xs={9}
                    >
                        <Typography
                            variant='h2'
                            marginY={2}>
                                Introdução à Ciência de Dados
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        xs={3}
                    >
                        <Rating value={3.5} name="size-large" precision={0.5} getLabelText={(rating) => String(rating)} readOnly/>
                        <Typography variant='body1' sx={{marginLeft: '1vh'}}> {3.5} </Typography>
                    </Grid>
                    <Grid
                        container
                    >
                        <Button variant='outlined'> Avaliar esta matéria </Button>
                    </Grid>
       

            </Grid>
           
        </Grid>
    )

}
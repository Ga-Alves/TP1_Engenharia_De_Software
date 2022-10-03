import {Grid, Paper, Rating, Typography} from '@mui/material';
export default function Subject() {
    const rating = 3.5;
    return (
        <Grid
            display="flex"
            justifyContent="center">

            <Grid  
            container
            component={Paper}
            xs={8}
            sx={{
                marginTop: '5vh',
                height: '100vh',
            }}
            padding={8}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    height= "10vh"
                >
                    <Typography
                    variant='h3'
                    fontWeight={600}> Ciência de Dados </Typography>
                    <Grid
                        display="flex"
                        direction="row"
                        alignContent='center'
                    >
                        <Rating value={rating} name="size-large" precision={0.5} getLabelText={(rating) => String(rating)} readOnly/>
                        <Typography variant='body1' sx={{marginLeft: '1vh'}}> {rating} </Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant='h5'> Ementa </Typography>
                    <Typography variant='body1'> A ideia do typescript é tipar variáveis para evitar erros em runtime ocasionados por quebra de contrato. Basicamente declaramos um tipo usando type e declaramos quais variáveis usam aquele tipo com nome:tipo; 
                    </Typography>
                </Grid>

                <Grid>
                    <Typography variant='h5'> Ementa </Typography>
                    <Typography variant='body1'> A ideia do typescript é tipar variáveis para evitar erros em runtime ocasionados por quebra de contrato. Basicamente declaramos um tipo usando type e declaramos quais variáveis usam aquele tipo com nome:tipo; 
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        );
}
import {Button, Chip, Grid, Rating, Typography} from '@mui/material';

type Props = {
    rating: number;
    name: string;
    code: string;
}

export default function Header({rating, name, code}:Props) {
    
    
    return (
        <Grid
            direction="column"
        >
            <Chip
                label={code}
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
                                {name}
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        xs={3}
                    >
                        <Rating value={rating} name="size-large" precision={0.5} getLabelText={(rating) => String(rating)} readOnly/>
                        <Typography variant='body1' sx={{marginLeft: '1vh'}}> {rating} </Typography>
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
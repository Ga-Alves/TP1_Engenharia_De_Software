// MUI
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// incons
import StarIcon from '@mui/icons-material/Star';

export default function CardComponent() { 
    return (
        <div className='CardComponent'>
            <Card sx={{ maxWidth: 345, padding: '10px' }}>
                <Chip color='info' label="DCC009"/>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant='h5' color='black'>
                            Ciência de Dados
                        </Typography>
                        <Typography color='#BDBDBD'>
                            Dep. Ciência da Computação
                            Optativa, 60hrs
                        </Typography>
                    </Grid>
                    <Grid xs={4} color='black' display='flex' alignItems='center'>
                        <StarIcon htmlColor='#FFC700'/>
                        <Typography>
                            4.2
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography color='primary'>
                        O curso de Introdução à Ciência de Dados (DCC212) do DCC-UFMG tem como principal objetivo trazer para os discentes um conhecimento estatístico através de um ponto de vista comput...
                        </Typography>
                    </Grid>
                </Grid>
            </Card>

        </div>
    )
}

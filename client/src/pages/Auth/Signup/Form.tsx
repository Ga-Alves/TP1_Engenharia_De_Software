import { Box,
  FormControl,
  Grid,
  InputLabel,
  Paper,
  Select,
  TextField,
  Typography
} from '@mui/material';


export default function() {
  return (
    <Grid item xs={12}
    sm={8}
    md={5}
    padding={8}
    component={Paper}
    elevation={6}
    alignItems="center"
    square>
      <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: '20vh'
            }}
      >
        <Typography component="h1" variant="h5"> Cadastre-se </Typography>
        <Typography
          component="p"
          variant="body1"
          sx={{paddingRight: '20%', marginTop: '1vh'}}
        > Cadastre ou faça login para avaliar e matérias anonimamente e de graça.  </Typography>
      </Box>
      <FormControl
        fullWidth
        margin='dense'
      >
      <TextField
                margin="normal"
                required
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
      </FormControl>


    </Grid>
  )
};
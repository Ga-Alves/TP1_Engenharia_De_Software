import { Box,
  FormControl,
  Grid,
  Paper,
  MenuItem,
  TextField,
  Typography,
  Button
} from '@mui/material';

import * as React from 'react';



export default function() {

  const terms = [
    {value: 1, label: '1º período'},
    {value: 2, label: '2º período'},
    {value: 3, label: '3º período'},
    {value: 4, label: '4º período'},
    {value: 5, label: '5º período'},
    {value: 6, label: '6º período'},
    {value: 7, label: '7º período'},
    {value: 8, label: '8º período'},
    {value: 9, label: '9º período'},
    {value: 10, label: '10º período'},
  ];

  return (
    <Grid item xs={12}
    sm={8}
    md={5}
    padding={8}
    component={Paper}
    elevation={6}
    display="flex"
    flexDirection="column"
    alignItems="flex-start"
    justifyContent="center"
    square>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: '20px'
        }}
      >
          <Typography
            component="h1"
            variant="h5"
            fontWeight={600}
          > Cadastre-se </Typography>
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
          id="name"
          label="Nome"
          name="name"
          autoComplete="name"
          autoFocus
        />

        <TextField
          select
          margin="normal"
          required
          name="Período"
          label="Período"
          id="password"
          autoComplete="current-password"
        >
          {terms.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       
        <TextField
          margin="normal"
          required
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        
        <Button
                type="submit"
                fullWidth
                variant="contained"
               color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Criar conta
        </Button>
        
      </FormControl>


    </Grid>
  )
};
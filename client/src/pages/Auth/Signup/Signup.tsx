import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginBanner from '../LoginBanner';
import Form from './Form';

const theme = createTheme();

export default function SignInSide() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <LoginBanner/>
        <Form/>
      </Grid>
    </ThemeProvider>
  );
}
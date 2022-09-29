// pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from './pages/Auth/Login/Login';
import Signup from './pages/Auth/Signup/Signup';
import PoppingsSemiBold from './assets/fonts/Poppins-SemiBold.ttf';


declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

import { green, purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fontFamily } from "@mui/joy/styles/styleFunctionSx";

const theme = createTheme({
  typography: {
    fontFamily: [
      'PoppinsSemibold',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#333333',
      contrastText: '#F2F2F2',
    },
    secondary: {
      main: purple[500],
    },
    text: {
      primary: '#F2F2F2',
    }
  }
});



function App() {

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
      <div>
        <Signup />
      </div>
    </ThemeProvider>
  )
}

export default App



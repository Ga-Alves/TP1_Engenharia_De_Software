// pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from './pages/Login/Login';

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

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});



function App() {

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
      <Login />
    </ThemeProvider>
  )
}

export default App



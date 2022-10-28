// pages
import {theme} from "./theme";
import { ThemeProvider } from '@mui/material/styles';

import {Outlet} from 'react-router-dom';
import { AuthProvider } from './authContext';

import PublicRoutes from './routes/public.routes'
import PrivateRoutes from './routes/private.routes'

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

function App() {

  return (
    <ThemeProvider theme={theme}>
      <PublicRoutes/>
    </ThemeProvider>
  )
}

export default App



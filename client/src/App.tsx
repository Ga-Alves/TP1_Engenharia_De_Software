// pages
import Navbar from "./components/Navbar/Navbar";
import {theme} from "./theme";
import { ThemeProvider } from '@mui/material/styles';

import {Outlet} from 'react-router-dom';
import { AuthProvider } from './authContext';

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
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Outlet/>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App



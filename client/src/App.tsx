// pages
import Navbar from "./pages/components/Navbar/Navbar";
import {theme} from "./theme";
import { ThemeProvider } from '@mui/material/styles';

import {Outlet} from 'react-router-dom';

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
      <Navbar/>
      <Outlet/>
    </ThemeProvider>
  )
}

export default App



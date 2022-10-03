// pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from './pages/Auth/Login/Login';
import Signup from './pages/Auth/Signup/Signup';
import Subject from "./pages/Subject/Subject";
import { ThemeProvider } from "@mui/material/styles";
import {theme} from './theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
      <div>
        <Login/>
      </div>
    </ThemeProvider>
  )
}

export default App



import TextField from '@mui/joy/TextField';
import { CssVarsProvider } from '@mui/joy/styles';


export default function Login() {
    return(
        <CssVarsProvider>
            <TextField label="Email" placeholder='ada@lovelace.com'/>
            <TextField />
        </CssVarsProvider>
    )
}
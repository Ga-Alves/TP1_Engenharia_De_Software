import {AppBar, Toolbar, Grid, Typography, TextField, InputAdornment} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
export default function Navbar() {
    const style = {
        navItems: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        navSearch: {
            width: '100%',
        },
        icon: {
            color: '#FFFFFF',
        }
    }
    return(
        <AppBar position="fixed">
            <Toolbar>
                <Grid container>
                    <Grid item  sx={style.navItems} xs={1}>
                        <Typography variant='h6'>
                            Logo
                        </Typography>
                    </Grid>
                    <Grid item xs={2}/>
                    <Grid item  sx={style.navItems} xs={6}>
                        <TextField
                            color='secondary'
                            sx={style.navSearch}
                            variant='filled'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                    <SearchIcon sx={style.icon}/>
                                  </InputAdornment>
                                ),
                            }}
                            />
                    </Grid>
                    <Grid item xs={2}/>
                    <Grid item  sx={style.navItems} xs={1}>
                            <PersonIcon color='secondary'/>
                            <Typography>
                                Entrar
                            </Typography>
                    </Grid >
                </Grid>
            </Toolbar>
        </AppBar>
    )
 }
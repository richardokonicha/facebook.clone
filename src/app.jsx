import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import Profile from './components/profile/profile'


const App = () => {
    const [ value,  setValue ]  = React.useState(0)

   
    return (
    <div>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Profile />
        </ThemeProvider>
    </div>
    )
}

export default App
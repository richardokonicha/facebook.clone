import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import Profile from './components/profile/profile'

const App = () => {
    return (
    <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Profile />
        </ThemeProvider>
    </>
    )
}

export default App
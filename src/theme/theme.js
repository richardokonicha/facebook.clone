import { createMuiTheme } from '@material-ui/core'
import purple from '@material-ui/core/colors/purple'
import {helvetica} from './fontConfig'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#e43373',
            main: '#de0150',
            dark: '#9b0038',
            contrastText: '#fff'
        },
        secondary: {
            light: '#5b5b5b',
            main: '#333333',
            dark: '#232323',
            contrastText: '#fff'
        },
        text: {
            light: '#e9ebef',
            main: '#9fa1a4',
            dark: '#000000',
        },

    },
    typography: {
        fontFamily: [
            'Helvetica'
        ].join(',')
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [helvetica]
            }
        }
    }
})

export default theme
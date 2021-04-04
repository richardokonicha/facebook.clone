import { createMuiTheme } from '@material-ui/core'
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
            grey: '#FFFFFFA1',
            dark: '#232323',
            darker: '#1c1e21',
            contrastText: '#fff'
        },
        text: {
            lighter: '#ffffff',
            light: '#B0B3B8',
            main: '#E4E6EB',
            dark: '#000000',
        },
        textPrimary: '#E4E6EB',
        textSecondary: '#E4E6EB'

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
    },
    custom: {
        borderSize: "max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px"
    }
})

export default theme
import * as React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const primaryFont = ['Montserrat', 'sans-serif'].join(',')

const theme = createMuiTheme({
    overrides: {
        MuiListItemIcon:{
            root: {
                width:30,
                minWidth: 30,
            }
        },
        MuiStepper: {
            root: {
                padding: '0'
            }
        },
        MuiPaper: {
            root: {
                zIndex: 202
            }
        },
        MuiStepConnector: {
            completed: {
                "& span":{
                    borderColor: '#3095ff',
                    borderWidth: '2px'
                }
            }
        },
        MuiListItemText:{
            root:{
                "& > span":{
                    fontSize: '14px !important',
                    color: '#5d5b6f',
                    fontWeight: 500
                }
            }
        },
        MuiTableCell: {
            head: {
                fontSize: '12px',
                fontWeight: 500,
                color: '#5d5b6f !important',
            },
            body: {
                fontSize: '14px',
                color:'#3c3b48',
                padding: '15px 25px !important'
            }
        },
        MuiTable: {
            root: {
                borderRadius: 3,
            },
        },
        MuiTablePagination: {
            caption: {
                marginBottom: 5,
            },
        },
        MuiFilledInput: {
            root: {
                backgroundColor: '#f9f9f9',
                '&:hover': {
                    backgroundColor: '#f2f2f2',
                }
            }
        },
        MuiDialog: {
            paper: {
                maxWidth: 'none !important'
            }
        },
        MuiOutlinedInput: {
            root: {
                fontSize: 16,
                color: '#555555',
                "& fieldset": {
                    borderColor: '#b2b2b2'
                }
            }
        }
    },
    palette: {
        common: {
            black: '#5d5b6f',
            accent: '#737dae',
            white: '#fff'
        },
        primary: {
            main: '#5d78ff',
            light: '#5d78ff3d',
            dark: '#485cc3',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#3dbda3',
            light: '#3dbda33b',
            contrastText: '#ffffff'
        },
        accent: {
            light: '#ffb8b3',
            main: '#ff7463',
        },
        error: {
            light: '#ffb8b3',
            main: '#ff7463',
        }
    },
    typography: {
        useNextVariants: true,
        fontFamily: primaryFont,
    },
})

const withTheme = (Component) => {
    return (
        class withTheme extends React.Component {
            render() {
                return (
                    <MuiThemeProvider theme={theme}>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                        <link
                            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap&subset=vietnamese"
                            rel="stylesheet"
                        />
                        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap&subset=cyrillic" rel="stylesheet" />
                        <Component {...this.props}/>
                    </MuiThemeProvider>
                )
            }
        }
    )
}

export default withTheme

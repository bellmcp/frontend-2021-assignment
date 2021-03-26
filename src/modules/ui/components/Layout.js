import React from 'react'
import { CssBaseline } from '@material-ui/core'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import { lightGreen } from '@material-ui/core/colors'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Prompt', 'sans-serif'].join(','),
    },
    palette: {
      primary: {
        main: lightGreen['A700'],
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

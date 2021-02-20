import React from 'react'
import { CssBaseline } from '@material-ui/core'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import { grey, blue } from '@material-ui/core/colors'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default function Layout() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: grey[50],
      },
      secondary: {
        main: blue[500],
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </ThemeProvider>
  )
}

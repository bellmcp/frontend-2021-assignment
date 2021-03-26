import React from 'react'
import { AppBar, Toolbar, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import logo from 'assets/images/logo.png'

const LOGO_IMAGE_HEIGHT = 36

const useStyles = makeStyles(() => ({
  navBar: {
    backdropFilter: 'saturate(180%) blur(20px)',
    backgroundColor: 'hsla(0,0%,100%,.65)',
    borderBottom: '1px solid hsla(0,0%,53.3%,.4)',
  },
  logoImage: {
    height: LOGO_IMAGE_HEIGHT,
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar position="fixed" elevation={0} className={classes.navBar}>
      <Toolbar>
        <Grid container justify="center" alignItems="center">
          <img src={logo} alt="LINE Melody" className={classes.logoImage} />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

import React from 'react'
import { AppBar, Link, Toolbar, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import logo from 'assets/images/logo.png'

const useStyles = makeStyles((theme) => ({
  logoImage: {
    height: 36,
  },
  logoLink: {
    marginRight: theme.spacing(2),
  },
  spacer: {
    flexGrow: 1,
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar
      position="fixed"
      elevation={0}
      style={{
        backdropFilter: 'saturate(180%) blur(20px)',
        backgroundColor: 'hsla(0,0%,100%,.65)',
        borderBottom: '1px solid hsla(0,0%,53.3%,.4)',
      }}
    >
      <Toolbar>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
          <Link
            to="/products"
            color="inherit"
            underline="none"
            className={classes.logoLink}
          >
            <img src={logo} alt="PineApple" className={classes.logoImage} />
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

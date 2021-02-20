import React from 'react'
import {
  AppBar,
  Link,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { InsertEmoticon as SmileIcon } from '@material-ui/icons'
import logo from 'assets/images/logo.png'

const useStyles = makeStyles((theme) => ({
  logoImage: {
    height: 21,
    marginTop: 6,
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
        <Link
          to="/products"
          color="inherit"
          underline="none"
          className={classes.logoLink}
        >
          <img src={logo} alt="PineApple" className={classes.logoImage} />
        </Link>
        <div className={classes.spacer}></div>
        <Typography color="initial">LINE MELODY</Typography>
      </Toolbar>
    </AppBar>
  )
}

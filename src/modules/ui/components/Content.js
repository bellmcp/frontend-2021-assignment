import React, { useState } from 'react'
import { Container, Toolbar, Snackbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FriendList from 'modules/friends/components/FriendsList'
import SongsItem from 'modules/songs/components/SongsItem'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2, 0),
  },
}))

export default function Content() {
  const [flashMessage, setFlashMessage] = useState()
  const classes = useStyles()

  const closeFlashMessage = () => setFlashMessage(null)

  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <Toolbar></Toolbar>
        <SongsItem />
        <FriendList setFlashMessage={setFlashMessage} />
        {flashMessage && (
          <Snackbar
            open
            message={flashMessage}
            onClick={closeFlashMessage}
            action={
              <Button color="inherit" size="small">
                Close
              </Button>
            }
          ></Snackbar>
        )}
      </Container>
    </main>
  )
}

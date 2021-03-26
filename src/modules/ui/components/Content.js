import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Toolbar, Snackbar, IconButton } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { Close as CloseIcon } from '@material-ui/icons'

import SongsItem from 'modules/songs/components/SongsItem'
import FriendList from 'modules/friends/components/FriendsList'
import * as actions from '../actions'

export default function Content() {
  const dispatch = useDispatch()
  const { isSnackbarOpen, flashMessage, alertType } = useSelector(
    (state) => state.ui
  )
  const closeFlashMessage = () => dispatch(actions.clearFlashMessage())

  return (
    <Container maxWidth="lg">
      <Toolbar />
      <SongsItem />
      <FriendList />
      <Snackbar
        open={isSnackbarOpen}
        onClose={closeFlashMessage}
        message={flashMessage}
        autoHideDuration={5000}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeFlashMessage}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert
          onClose={closeFlashMessage}
          severity={alertType ? alertType : 'info'}
          elevation={6}
          variant="filled"
        >
          {flashMessage}
        </Alert>
      </Snackbar>
    </Container>
  )
}

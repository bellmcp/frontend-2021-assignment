import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Grid, CircularProgress, Box } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

import FriendsItem from './FriendsItem'
import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    fontWeight: 600,
  },
  progress: {
    textAlign: 'center',
  },
}))

export default function FriendsList({ setFlashMessage }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    const action = actions.loadFriends()
    dispatch(action)
  }, [dispatch])

  const { isLoading, items: friends } = useSelector((state) => state.friends)

  return (
    <div>
      <Box my={6}>
        <Typography variant="h4" component="h1" className={classes.title}>
          Send this melody to your friends
        </Typography>
      </Box>
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary"></CircularProgress>
        </div>
      ) : (
        <Grid container spacing={2}>
          {friends.map((friend) => (
            <FriendsItem
              key={friend.id}
              {...friend}
              setFlashMessage={setFlashMessage}
            ></FriendsItem>
          ))}
        </Grid>
      )}
    </div>
  )
}

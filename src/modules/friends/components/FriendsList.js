import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Grid, CircularProgress, Box } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

import FriendsItem from './FriendsItem'
import * as actions from '../actions'

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
    fontWeight: 600,
  },
  progress: {
    textAlign: 'center',
  },
}))

export default function FriendsList() {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    const action = actions.loadFriends()
    dispatch(action)
  }, [dispatch])

  const { isLoading, items: friends } = useSelector((state) => state.friends)

  return (
    <>
      <Box my={6}>
        <Typography
          variant="h5"
          component="h2"
          color="textSecondary"
          className={classes.title}
        >
          Send this melody to your friends
        </Typography>
      </Box>
      {isLoading ? (
        <Grid container justify="center" alignItems="center">
          <CircularProgress color="primary"></CircularProgress>
        </Grid>
      ) : friends.length === 0 ? (
        <Box my={10}>
          <Grid container justify="center" alignItems="center">
            <Typography variant="h6" color="textSecondary">
              An error occurred. Please try again.
            </Typography>
          </Grid>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {friends.map((friend) => (
            <FriendsItem {...friend} key={friend.id}></FriendsItem>
          ))}
        </Grid>
      )}
    </>
  )
}

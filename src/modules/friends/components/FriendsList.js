import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Typography, Grid, CircularProgress } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import FriendsItem from './FriendsItem'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  progress: {
    textAlign: 'center',
  },
}))

export default function FriendsList({ setFlashMessage }) {
  const classes = useStyles()
  const [friends, setFriends] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const loadFriends = async () => {
      setIsLoading(true)
      const { data } = await axios.get('/friends')

      setFriends(data.items)
      setIsLoading(false)
    }

    loadFriends()
  }, [])

  return (
    <div>
      <Typography variant="h4" component="h1" className={classes.title}>
        Gift this song to your friends
      </Typography>
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

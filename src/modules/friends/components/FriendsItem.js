import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 200,
  },
  footer: {
    marginTop: theme.spacing(2),
  },
}))

export default function FriendsItem({
  displayName,
  pictureUrl,
  userId,
  setFlashMessage,
}) {
  const melodyId = 99
  const classes = useStyles()
  const [ownership, setOwnership] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const loadOwnership = async () => {
      setIsLoading(true)
      const { data } = await axios.get(
        `/ownership?userId=${userId}&melodyId=${melodyId}`
      )
      setOwnership(data.status)
      setIsLoading(false)
    }

    loadOwnership()
  }, [])

  const purchase = async () => {
    setFlashMessage(`Successfully sent song to ${displayName}`)

    const { data } = await axios.post('/purchase', {
      userId,
      melodyId,
    })
  }

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card>
        <CardMedia
          image={pictureUrl}
          title={displayName}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {displayName}
          </Typography>
          {ownership === 'available' ? (
            <Button
              variant="contained"
              color="primary"
              onClick={purchase}
              size="small"
            >
              Gift this song
            </Button>
          ) : (
            <Typography
              variant="body1"
              component="p"
              color="textSecondary"
              gutterBottom
            >
              This user already own this song
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  )
}

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios/config'
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import { Send as SendIcon } from '@material-ui/icons'

import * as actions from '../actions'

const CARD_MEDIA_HEIGHT = 200

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: '0 0 20px 0 rgba(0,0,0,0.12)',
    borderRadius: 8,
    margin: '8px 4px',
    transition: '0.3s',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
  media: {
    height: CARD_MEDIA_HEIGHT,
  },
  title: {
    fontWeight: 600,
  },
}))

export default function FriendsItem({ displayName, pictureUrl, userId }) {
  const MELODY_ID = 99
  const dispatch = useDispatch()
  const classes = useStyles()
  const [ownership, setOwnership] = useState([])

  const loadOwnership = async () => {
    const { data } = await axios.get('/ownership', {
      params: {
        userId,
        melodyId: MELODY_ID,
      },
    })
    setOwnership(data.status)
  }

  useEffect(() => {
    loadOwnership()
  }, [userId])

  const purchaseSong = async () =>
    dispatch(actions.sendGift(userId, MELODY_ID, displayName))

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card elevation={0} className={classes.root}>
        <CardMedia
          image={pictureUrl}
          title={displayName}
          className={classes.media}
        />
        <CardContent>
          <Box mt={1} mb={2}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              align="center"
              className={classes.title}
            >
              {displayName}
            </Typography>
          </Box>
          {ownership === 'available' ? (
            <Button
              variant="contained"
              color="primary"
              size="small"
              fullWidth
              disableElevation
              onClick={purchaseSong}
              startIcon={<SendIcon />}
            >
              Send this melody
            </Button>
          ) : (
            <Typography
              variant="body1"
              component="p"
              color="textSecondary"
              gutterBottom
              align="center"
            >
              Already own this song
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  )
}

import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Paper, Typography, Chip, Avatar, Box } from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  content: {
    height: '100%',
  },
  amountContainer: {
    marginBottom: theme.spacing(2),
  },
  amount: {
    padding: theme.spacing(0, 2),
  },
}))

export default function SongItem() {
  const id = 99
  const [song, setSong] = useState()
  const classes = useStyles()
  const theme = useTheme()
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'))

  useEffect(() => {
    const loadSong = async () => {
      const { data } = await axios.get(`/melody/${id}`)

      setSong(data)
    }

    loadSong()
  }, [])

  if (!song) return null

  return (
    <Paper className={classes.root}>
      <Grid
        container
        spacing={6}
        justify={isMediumUp ? 'flex-start' : 'center'}
      >
        <Grid item>
          <img src={song?.coverPic} alt={song?.coverPic} />
        </Grid>
        <Grid item>
          <Grid
            container
            className={classes.content}
            direction="column"
            justify="space-between"
          >
            <Grid item>
              <Typography
                variant="h4"
                component="h1"
                style={{ fontWeight: 600 }}
              >
                {song?.title}
              </Typography>
              <Typography variant="h5" component="h1" gutterBottom>
                {song?.titleEn}
              </Typography>
              <Chip
                avatar={<Avatar src={song?.artist.picture} />}
                label={`${song?.artist.name} (${song?.artist.nameEn})`}
                variant="outlined"
              />
              <Box mt={3}>
                <Typography variant="h6" component="p" color="primary">
                  {song?.price} THB
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  gutterBottom
                  color="textSecondary"
                >
                  or redeem with {song?.coin} Coins
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

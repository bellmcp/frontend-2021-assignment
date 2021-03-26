import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  useMediaQuery,
  Grid,
  Paper,
  Typography,
  Chip,
  Avatar,
  Box,
  CircularProgress,
} from '@material-ui/core'
import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
    borderRadius: 8,
  },
  content: {
    height: '100%',
  },
  title: {
    fontWeight: 600,
  },
  cover: {
    borderRadius: 4,
  },
}))

export default function SongItem() {
  const classes = useStyles()
  const theme = useTheme()
  const dispatch = useDispatch()
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'))

  useEffect(() => {
    const action = actions.loadSong(99)
    dispatch(action)
  }, [dispatch])

  const { isLoading, items: song } = useSelector((state) => state.songs)

  return (
    <>
      {isLoading ? (
        <Grid container justify="center" alignItems="center">
          <CircularProgress color="primary"></CircularProgress>
        </Grid>
      ) : song.length === 0 ? (
        <Box my={10}>
          <Grid container justify="center" alignItems="center">
            <Typography variant="h6" color="textSecondary">
              An error occurred. Please try again.
            </Typography>
          </Grid>
        </Box>
      ) : (
        <Box my={6}>
          <Paper elevation={0} className={classes.root}>
            <Grid
              container
              spacing={6}
              justify={isMediumUp ? 'flex-start' : 'center'}
            >
              <Grid item>
                <img
                  src={song.coverPic}
                  alt={song.title}
                  className={classes.cover}
                />
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
                      className={classes.title}
                    >
                      {song.title}
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {song.titleEn}
                    </Typography>
                    <Box mt={2} mb={3}>
                      <Chip
                        avatar={<Avatar src={song.artist.picture} />}
                        label={`${song.artist.name} (${song.artist.nameEn})`}
                        variant="outlined"
                      />
                    </Box>
                    <Typography variant="h6" component="p" color="primary">
                      {song.price} THB
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      gutterBottom
                      color="textSecondary"
                    >
                      or redeem with {song.coin} Coins
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}
    </>
  )
}

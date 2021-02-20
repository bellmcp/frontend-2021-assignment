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
  const classes = useStyles()
  const theme = useTheme()
  const dispatch = useDispatch()
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'))

  useEffect(() => {
    const action = actions.loadSong(99)
    dispatch(action)
  }, [dispatch])

  const { isLoading, items: song } = useSelector((state) => state.songs)

  if (!song) return null

  return (
    <>
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary"></CircularProgress>
        </div>
      ) : (
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
                    avatar={<Avatar src={song?.artist?.picture} />}
                    label={`${song?.artist?.name} (${song?.artist?.nameEn})`}
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
      )}
    </>
  )
}

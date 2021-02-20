import React from 'react'
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

export default function FriendsItem({ displayName, pictureUrl, userId }) {
  const classes = useStyles()

  return (
    <Grid item xs={6} sm={4} lg={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            image={pictureUrl}
            title={displayName}
            className={classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {displayName}
            </Typography>
            {/* <Grid
              container
              alignItems="center"
              justify="space-between"
              className={classes.footer}
            >
              <Button variant="text" color="default">
                Send song
              </Button>
            </Grid> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

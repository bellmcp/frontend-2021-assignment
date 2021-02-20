import React from 'react'
import { Container, Typography, Grid, Link, Divider } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function Footer() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <div>
      <Container maxWidth="lg">
        <Divider style={{ marginTop: 48 }} />
        <Grid
          direction={matches ? 'row' : 'column'}
          container
          justify={matches ? 'space-between' : 'center'}
          alignItems="center"
          style={{ minHeight: 96 }}
        >
          <Typography variant="body2" color="textSecondary" align="center">
            © LINE Corporation. Part of LINE Incubation's Interview Day 2021.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Developed by{' '}
            <Link href="https://bellmcp.work" color="secondary">
              Wutipat Khamnuansin
            </Link>
            .
          </Typography>
        </Grid>
      </Container>
    </div>
  )
}

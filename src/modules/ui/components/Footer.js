import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  useMediaQuery,
  Box,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export default function Footer() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <Container maxWidth="lg">
        <Box mt={6}>
          <Divider />
        </Box>
        <Box my={4}>
          <Grid
            direction={matches ? 'row' : 'column'}
            container
            justify={matches ? 'space-between' : 'center'}
            alignItems="center"
          >
            <Typography variant="body2" color="textSecondary" align="center">
              © LINE Corporation, Part of LINE Incubation's Interview Day 2021
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Developed by{' '}
              <Link href="https://bellmcp.work" color="primary">
                Wutipat Khamnuansin
              </Link>
            </Typography>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

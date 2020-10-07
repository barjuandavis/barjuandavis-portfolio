import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

const Intro = () => {
  return (
    <section
      style={{
        height: '100%',
        flexGrow: 1,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <Typography variant="h1">Hello, Davis!</Typography>
      <Box>
        <Button variant="contained" color="primary">
          Contact Me
        </Button>
        <Button variant="outlined" color="primary" style={{ marginLeft: 16 }}>
          Learn More
        </Button>
      </Box>
    </section>
  )
}

export default Intro

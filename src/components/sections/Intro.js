import React from 'react'
import Typography from '@material-ui/core/Typography'
import { AppBar, Button, Toolbar } from '@material-ui/core'

const Intro = () => {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">Here is a neat appBar</Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h1">Hello, Gatsby!</Typography>
      <Button variant="contained" color="primary">
        Here is a button{' '}
      </Button>
      <Button variant="contained" color="secondary">
        here is another button with secondary color
      </Button>
    </>
  )
}

export default Intro

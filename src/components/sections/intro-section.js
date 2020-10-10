import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  
  }
}))


const Intro = () => {
  const classes = useStyles()
  return (
    <section
      className={classes.root}>
      <Typography variant="h6">Hey, see something different on barjuandavis.codes?</Typography>
      <Typography variant="h1" component="h1">
        Something good is coming soon!
      </Typography>

       
      { <Box mt={3}>
      <Typography variant="h6">In the meantime, see on the top right corner there? Try to click it.</Typography>
        {/* <Button variant="contained" color="primary">
          Contact Me
        </Button>
        <Button variant="outlined" color="primary" style={{ marginLeft: 16 }}>
          Learn More
        </Button> */}
      </Box> }
    </section>
  )
}

export default Intro

import React, { useContext } from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { globalContext } from '../pages/wip'

export default props => {
  const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: theme.palette.background.default,
      transition: 'background-color 200ms ease-in-out',
      height: '100vh',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    content: {
      display: "flex",
      justifyContent:"center",
      height: `inherit`,
      flexDirection:"column",
      alignItems:"center",
      [theme.breakpoints.down('lg')]: {
        margin: '0 24px'
      },
      [theme.breakpoints.down('xs')]: {
        margin: '0 16px'
      }
    }
  }))
  const theme = useTheme()
  const { setDarkMode, darkMode } = useContext(globalContext)
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">barjuandavis.codes</Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setDarkMode(!darkMode)
            }}>
            {darkMode ? 'Dark' : 'Light'}
          </Button>
        </Toolbar>
      </AppBar>
      <Box className={classes.content}>
        {props.children}
      </Box>
    </Box>
  )
}

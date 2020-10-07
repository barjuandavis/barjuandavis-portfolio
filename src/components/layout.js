import React, { useContext } from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { globalContext } from '../pages/index'

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

export default props => {
  const theme = useTheme()
  const { setDarkMode, darkMode } = useContext(globalContext)
  const classes = useStyles()
  return (
    <Box
      style={{
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh'
      }}>
      <AppBar position="absolute">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Some Text</Typography>
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
      <Box
        display="flex"
        justifyContent="center"
        m={5}
        style={{
          marginTop: theme.mixins.toolbar.minHeight,
          minHeight: '100%'
        }}
        flexDirection="column"
        alignItems="center">
        {props.children}
      </Box>
    </Box>
  )
}

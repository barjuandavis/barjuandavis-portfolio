import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar
}))

export default props => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.toolbar}></div>
      {props.children}
    </>
  )
}

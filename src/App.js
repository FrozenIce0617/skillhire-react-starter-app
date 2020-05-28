import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Header from './components/Header'
import appStyle from './App.style'

const useStyles = makeStyles(appStyle)

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <Header numTodos={3} />
        <Typography variant='h4'>Welcome to Skillhire</Typography>
      </div>
    </div>
  )
}

export default App

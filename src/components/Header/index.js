import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import headerStyle from './header.style'

const useStyles = makeStyles(headerStyle)

const Header = ({ numTodos }) => {
  const classes = useStyles()

  return (
    <div className={classes.cardHeader}>
      <Typography className={classes.cardHeaderTitle}>
        You have {numTodos} Todos
      </Typography>
    </div>
  )
}

export default Header

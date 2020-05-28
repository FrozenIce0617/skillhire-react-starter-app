import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import submitFormStyles from './submitForm.style'

const useStyles = makeStyles(submitFormStyles)

const SubmitForm = ({ onSubmit }) => {
  const [todo, setTodo] = useState('')

  const classes = useStyles()

  const onHandleChange = (e) => {
    setTodo(e.target.value)
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()

    if (todo.trim().length !== 0) {
      onSubmit(todo)
      setTodo('')
    }
  }

  return (
    <form className={classes.formContainer} onSubmit={onHandleSubmit}>
      <TextField
        className={classes.textField}
        placeholder='Enter Item'
        value={todo}
        onChange={onHandleChange}
      />
      <Button
        className={classes.btnSubmit}
        color='primary'
        variant='contained'
        onClick={onHandleSubmit}
      >
        Submit
      </Button>
    </form>
  )
}

export default SubmitForm

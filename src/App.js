import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Header from './components/Header'
import TodoList from './components/TodoList'
import SubmitForm from './components/SubmitForm'
import appStyle from './App.style'

const useStyles = makeStyles(appStyle)

const App = () => {
  const [todos, setTodos] = useState([
    { content: 'Task 1', isDone: false },
    { content: 'Task 2', isDone: false },
  ])
  const classes = useStyles()

  const onToggle = (index) => {
    const newTodos = todos.map((todo, idx) => {
      if (index === idx) return { ...todo, isDone: !todo.isDone }
      return todo
    })

    setTodos(newTodos)
  }

  const onHandleSubmit = (newTodo) => {
    setTodos([...todos, { content: newTodo, isDone: false }])
  }

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <Header numTodos={todos.filter((item) => !item.isDone).length} />
        <TodoList todos={todos} onToggle={onToggle} />
        <SubmitForm onSubmit={onHandleSubmit} />
      </div>
    </div>
  )
}

export default App

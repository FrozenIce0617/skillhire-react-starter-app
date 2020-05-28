import React from 'react'
import { Divider, List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import todoListStyle from './todoList.style'

const useStyles = makeStyles(todoListStyle)

const TodoList = ({ todos, onToggle }) => {
  const classes = useStyles()

  return (
    <List className={classes.todoListWrapper}>
      {todos.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem button onClick={() => onToggle(index)}>
            <ListItemText
              className={item.isDone && classes.todoCompleted}
              primary={item.content}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  )
}

export default TodoList

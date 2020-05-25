import React, { useState } from 'react'
import {
  Box,
  Button
} from '@material-ui/core'

const MyComponent = ({ ...props }) => {

  const handleClick = () => console.log('Clicked!');

  return(
    <Box m={2}>
      <Button
        size='large'
        color='primary'
        variant='contained'
        onClick={ handleClick }
      >
        Click Me
      </Button>
    </Box>
  )
}

export default MyComponent

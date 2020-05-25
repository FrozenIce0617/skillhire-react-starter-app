import React from 'react'
import {
  Typography
} from '@material-ui/core'
import MyComponent from 'components/MyComponent'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {
  return (
    <Container className="App">
      <Typography variant='h4'>
          Welcome to Skillhire
      </Typography>
      <MyComponent />
    </Container>
  );
}

export default App;

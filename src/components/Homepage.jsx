import React from 'react'
import styled from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import Logos from '../subComponents/Logos'
import Socials from '../subComponents/Socials'


const HomeContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif;
  font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;

`

const Homepage = () => {
  return (
    <HomeContainer>
      <Container>
        <PowerButton />
        <Logos />
        <Socials />
      </Container>
      </HomeContainer>
  )
}

export default Homepage
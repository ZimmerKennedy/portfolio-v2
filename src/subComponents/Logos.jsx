import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
import { NavLink } from 'react-router-dom'


const Logo = styled.h1`
display:inline-block;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
font-family: 'Pacifico', cursive;
position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
text-decoration: none;
`

const Logos = (props) => {
  return (
      <NavLink to="/">
    <Logo color={props.theme}>
        ZK
    </Logo>
      </NavLink>
  )
}

export default Logos
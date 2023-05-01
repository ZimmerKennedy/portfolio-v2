import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { Github } from './AllSvgs';
import {motion} from 'framer-motion';

const Box = styled(motion.li)`
width: 60rem;
height: 70vh;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
padding: 1rem 2rem;
margin-right: 8rem;
list-style-type: none;
border-radius: 10px 50px 10px 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.text};
transition: all 0.2s ease;
&:hover{
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    border: 1px solid ${props => props.theme.text};
}
`

const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`
const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla', sans-serif;
font-weight: 500;
`
const Tags = styled.div`
border-top: 2px solid ${props => props.theme.text};
padding-top: 0.5rem;
display: flex;
flex-wrap: wrap;
${Box}:hover &{
    border-top: 2px solid ${props => props.theme.body};
}
`

const Tag = styled.span`
margin-right: 1rem;
font-size: calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled(NavLink)`
background-color: ${props => props.theme.text};
text-decoration: none;
padding: 0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
color: ${props => props.theme.body};
font-size: calc(1em + 0.5vw);

${Box}:hover &{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
}
`

const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
${Box}: hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

`

const Item ={
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}



const Card = (props) => {



    const {id, name, description, tags, demo, imgSrc, github } = props.data;

  return (
    <Box key={id} variants={Item}>
        <Title>{name}</Title>
        <Description>
            {description}
        </Description>
        <Tags>
        {
                tags.map((t,id) =>{
                    return <Tag key={id}>#{t}</Tag>
                })
            }
        </Tags>
        <Footer>
            <Link target="_blank" to={demo}>
                Website
            </Link>
            <Git target="_blank" to={github}>
                <Github width={30} height={30}/>
            </Git>
        </Footer>
            
        </Box>
  )
}

export default Card
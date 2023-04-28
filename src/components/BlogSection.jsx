import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Box = styled(NavLink)`
width: calc(10rem + 15vw);
text-decoration: none;
height: 20rem;
padding: 1rem;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(2px);
box-shadow: 0 0 1rem 0;
cursor: pointer;

display: flex;
flex-direction: column;
z-index: 10;

&:hover{
    color:${props => props.theme.hoverText};
    background-color: ${props => props.theme.text};
    transition: all 1s ease;
}
`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 60%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;
z-index: 5;

${Box}:hover &{
    border: 1px solid${props => props.theme.body}
}
`

const Title = styled.div`
color: inherit;
padding: 0.5rem 0;
padding-top:1rem;
font-family: 'Karla', sans-serif;
font-weight: 700;
border-bottom: 1px solid ${props => props.theme.text};

${Box}:hover &{
    border-bottom: 1px solid ${props => props.theme.body};
}
`

const HashTags = styled.div`
padding: 0.5rem 0;
`

const Tag = styled.span`
padding-right: 0.5rem;
`



const BlogSection = (props) => {

    const {name, tags, date, imgSrc, link} = props.blog

  return (
    <Box target="_blank" to={link}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
            {
                tags.map((t,id) =>{
                    return <Tag key={id}>#{t}</Tag>
                })
            }
        </HashTags>
        </Box>
  )
}

export default BlogSection
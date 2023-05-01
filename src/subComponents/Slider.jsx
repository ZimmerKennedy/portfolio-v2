import React, { useEffect, useRef } from 'react'
import styled, {useTheme} from 'styled-components'
import {CloseTag, PersonHardware } from './AllSvgs'

const Container = styled.div`
position: relative;

`
const Links = styled.div`
position: fixed;
top: 0;
right: 2rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transform: translateY(-100%);
`

const PreDisplay = styled.div`
display:inline-block;
font-family: 'Pacifico', cursive;
position: fixed;
right: 2rem;
top: 2rem;
z-index:3;
text-decoration: none;
`


const Slider = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const hiddenRef = useRef(null);
  useEffect(() =>{

    const handleScroll = () =>{

      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`

      if(window.pageYOffset > 5){
        hiddenRef.current.style.display = 'none'
      } else {
        hiddenRef.current.style.display = 'block'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <Container>
      <PreDisplay ref={hiddenRef} className='hidden'>
      <PersonHardware width={90} height={90}/>
      </PreDisplay>
        <Links ref={ref}>
            {
              [...Array(25)].map((x, id) =>{
                return <CloseTag key={id} width={30} height={30} className="chain" fill={theme.text} blank={theme.body} />
              })
            }
            <PersonHardware width={90} height={90}/>
        </Links>
    </Container>
  )
}

export default Slider
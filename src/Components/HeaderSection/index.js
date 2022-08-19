import React from 'react'
import {
    HeadContainer,
    Container,
    Block,
    Text,
    H1,
    H3,
    P,
    HImg,
    MyButton
} from './HeaderElements'


function Header() {
  const imgP = {
      img: require("../../images/person.PNG")
  }
  return (
    <HeadContainer>  
        <Container>
            <Block>
                <Text>
                    <H3>by d.i.inc</H3>
                    <H1>Sad Happiness</H1>
                    <P>I'm looking for a word that means feeling both happy and sad at the same time. Producing or expressing a mixture of pain and pleasure</P>
                    <MyButton 
                        to='portfolio'
                        smooth={true} 
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={0}
                    >Explore</MyButton>
                </Text>          
                <HImg src={imgP.img} alt='person'/>
            </Block>
        </Container>
    </HeadContainer>
  )
}

export default Header
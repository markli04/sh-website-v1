import React from 'react'
import {
    PContainer,
    PorWrapper,
    PorImg
} from './PortfolioElements'

function Portfolio() {
    const cases = {
        cas1: require("../../images/case1.png"),
        cas2: require("../../images/case2.png"),
        cas3: require("../../images/case3.png"),

        cas4: require("../../images/case4.png"),
        cas5: require("../../images/case5.png"),
        cas6: require("../../images/case6.png"),

        cas7: require("../../images/case7.png"),
        cas8: require("../../images/case8.png"),
        cas9: require("../../images/case9.png"),

        cas10: require("../../images/case10.png"),
        cas11: require("../../images/case11.png"),
        cas12: require("../../images/case12.png")
    }
    return(
        <PContainer id='portfolio'>
            <PorWrapper>
                <PorImg src={cases.cas1} />
                <PorImg src={cases.cas2} />
                <PorImg src={cases.cas3} />

                <PorImg src={cases.cas4} />
                <PorImg src={cases.cas5} />
                <PorImg src={cases.cas6} />

                <PorImg src={cases.cas7} />
                <PorImg src={cases.cas8} />
                <PorImg src={cases.cas9} />

                <PorImg src={cases.cas10} />
                <PorImg src={cases.cas11} />
                <PorImg src={cases.cas12} />
            </PorWrapper>
        </PContainer>
    )
}

export default Portfolio
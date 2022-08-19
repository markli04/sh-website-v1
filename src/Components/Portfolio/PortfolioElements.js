import styled from 'styled-components'

export const PContainer = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #2f2f2f;

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`

export const PorWrapper = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 100px;
    margin-bottom: 100px;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 50px;
        margin-bottom: 0px;
        justify-content: center;
        align-items: center;
    }
`

export const PorImg = styled.img`
    width: 350px;
    height: 350px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 3px 3px #121212;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        box-shadow: 0px 0px 10px 10px #adadad;
    } 

    @media screen and (max-width: 768px) {
        width: 350px;
        height: 350px;
    }
`
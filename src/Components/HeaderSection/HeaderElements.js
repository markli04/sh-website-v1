import styled from 'styled-components'
import { Link } from 'react-scroll'

export const HeadContainer = styled.div`
    display: flex;
    padding-left: 133px;
    padding-right: 133px;
    padding-bottom: 168px;
    width: 100%;
    background-color: #f2f2f2;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 83px;
        padding-right: 83px;
        padding-bottom: 118px;
    }
`

export const Container = styled.div`
    margin-left: 133px;
    margin-right: 133px;
    margin-top: 158px;
    margin-bottom: 104px;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 50px;
        margin-bottom: 54px;
    }
`

export const H1 = styled.h1`
    font-size: 150px;
    font-weight: 400;
    
    @media screen and (max-width: 768px) {
        font-size: 100px;
    }
`

export const MyButton = styled(Link)`
    margin-top: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 30px;
    line-height: 50px;
    max-width: 250px;
    min-width: 100px;
    justify-content: center;
    text-align: center;
    color: #f2f2f2;
    cursor: pointer;
    background-color: #2f2f2f;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        padding-left: 75px;
        padding-right: 75px;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const Text = styled.div`

`

export const Block = styled.div`
    color: #2f2f2f;
    display: flex;

    @media screen and (max-width: 768px) {
        font-size: 150px;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const H3 = styled.h3`
    line-height: 45px;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 11px;
`

export const P = styled.p`
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 25px;
`

export const HImg = styled.img`
    height: 500px;
    margin-left: 50px;

    @media screen and (max-width: 768px) {
        height: 500px;
        margin-top: 25px;
        margin-left: 0;
    }
`
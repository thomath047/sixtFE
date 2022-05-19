import { colors } from '@/assets/colors'
import styled from 'styled-components'

export const CardWrapper = styled.div`
    position: relative;
    flex-basis: calc(25% - 20px);
    margin: 10px;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        flex-basis: calc(33.3% - 20px);
    }

    @media (max-width: 768px) {
        flex-basis: calc(50% - 20px);
    }

    &::before {
        content: '';
        display: block;
        padding-top: 100%;
    }
`

export const CardContent = styled.div`
    position: absolute;
    top: 0; left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    background-color: gray;
`
export const CardDetails = styled.div`
    position: absolute;
    bottom: 0; left: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5) 60%);
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 5px;
    padding: 20px;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const H1 = styled.h1`
    color: ${colors.themeColor};
    font-weight: 500;
    font-size: 1.4rem;
    margin: 0;
`
export const P = styled.p`
   color: white;
   margin: 0;
`
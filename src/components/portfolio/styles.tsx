import styled from 'styled-components';
import { devices } from '../../mediaQueries';

export const PortSection = styled.section`
    background: #D9D9D9;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
`;

export const TitleSection = styled.h1`
    color: #260A00;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 5rem;
    text-transform: uppercase;

     @media ${devices.desktops} {
        font-size: 1.5rem;
        line-height: 4rem;
    }

        @media ${devices.tablets} {
        font-size: 1.2rem;
        line-height: 4rem; 
    }

        @media ${devices.mobile} {
        font-size: 1.1rem;
    }
`;

export const ContainerCards = styled.div`
    width: 80%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;


    @media ${devices.desktops} {
        justify-content: center;

    }
`;

export const ImagePort = styled.img`
    width: 24%;
    height: 20em;
    margin-top: .5em;
    border-radius: 12px;

    @media ${devices.largerDesktops} {
        height: 17em;
    }

    @media ${devices.largeDesktops} {
        height: 14em;
    }

    @media ${devices.desktops} {
    width: 28%;
        height: 11.5em;
    margin: .5em;
    }

    @media ${devices.tablets} {
    width: 40%;
        height: 11.5em;
    margin: .5em;
    }

    @media ${devices.mobile} {
        width: 90%;
        height: 13em;
    }

    @media ${devices.mini} {
        width: 100%;
        height: 12.5em;
    }
`;

export const BtnPort = styled.button`
    background: var(--bg-orange);
    color: #260A00;
    padding: .8em;
    margin-block: 1.5em;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 700;
    border-radius: 12px;
    width: 25%;

    &:hover {
        background:  #9d3c16;
    }

    @media ${devices.largerDesktops} {
        font-size: 0.6rem;
        width: 40%;
    }

    @media ${devices.desktops} {
        font-size: 0.5rem;
        width: 40%;
    }

    @media ${devices.tablets} {
        font-size: 0.5rem;
        width: 60%;
        padding-block: .8em;
    }

    @media ${devices.mobile} {
        font-size: 0.5rem;
        width: 80%;
        padding-block: .8em;
    }

    @media ${devices.mini} {
        font-size: 0.5rem;
        width: 80%;
        padding-block: .6em;
    }

`;

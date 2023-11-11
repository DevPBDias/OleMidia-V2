import styled from 'styled-components';
import { devices } from '../../mediaQueries';

export const ClientSection = styled.section`
    background: var(--bg-orange);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding-block: 1.5em 2.5em;
`;

export const TitleSection = styled.h1`
    color: var(--bg-brown);
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 4rem; 
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
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    margin: auto;

    @media ${devices.tablets} {

    }
`;

export const ImageClient = styled.img`
    width: 30%;
    height: 20em;

    @media ${devices.largeDesktops} {
        height: 16em;
    }

    @media ${devices.desktops} {
        height: 14em;
    }

    @media ${devices.tablets} {
        width: 40%;
        margin: .5em;
    }

    @media ${devices.mobile} {
        width: 100%;
    }
`;

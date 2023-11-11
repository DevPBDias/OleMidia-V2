import styled from 'styled-components';
import { devices } from '../../mediaQueries';

export const ServiceSection = styled.section`
    background: #260A00;
`;

export const TitleSection = styled.h1`
    color: #D9D9D9;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 5rem; 
    padding-top: 1rem;
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

export const ContainerServices = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    width: 80%;
    margin: auto;
    padding-bottom: 2rem;
    gap: .8em;
`;

export const ContainerCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background: #D9D9D9;
    width: 30%;
    height: 25em;
    margin: auto;
    border-radius: 12px;

    @media ${devices.largerDesktops} {
        height: 22em;
    }

    @media ${devices.largeDesktops} {
        height: 20em;
    }

    @media ${devices.desktops} {
        height: 14em;
    }

    @media ${devices.tablets} {
        width: 45%;
    }

    @media ${devices.mobile} {
        width: 80%;
    }

    @media ${devices.mini} {
        width: 100%;
    }
`;

export const ContainerText = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-items: center;
    align-items: center;
    width: 80%;
    margin: auto;
    height: 8.5em;
    gap: 2em;

    @media ${devices.largerDesktops} {
      width: 85%;

    }

    @media ${devices.largeDesktops} {
      height: 8.5em;
      gap: 1em;
      width: 85%;
    }

    @media ${devices.desktops} {
      height: 7.5em;
    }
`;

export const ImageService = styled.img`
    width: 100%;
    border-radius: 12px 12px 0 0;
`;

export const TitleService = styled.h4`
    color: #260A00;
    text-align: center;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1.7rem;
    width: 100%;

    @media ${devices.largerDesktops} {
        font-size: 0.75rem;
        line-height: 1.2rem;
    }

    @media ${devices.largeDesktops} {
        font-size: 0.65rem;
        line-height: 1.2rem;
    }

    @media ${devices.desktops} {
        font-size: 0.5rem;
        line-height: 1.2rem;
    }
`;

export const Description = styled.p`
    color: #260A00;
    text-align: center;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.9rem;

    @media ${devices.largerDesktops} {
        font-size: 0.6rem;
        line-height: 0.8rem;
    }

    @media ${devices.desktops} {
        font-size: 0.5rem;
        line-height: 0.8rem;
    }
`;

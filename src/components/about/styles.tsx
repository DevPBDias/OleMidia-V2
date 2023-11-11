import styled from 'styled-components';
import { devices } from '../../mediaQueries';

export const ContainerAbout = styled.section`
    display: flex;
    flex-flow: row nowrap;
    height: 28em;
    width: 100%;

    .containers {
        width: 50%;
        height: 28em;

        @media ${devices.desktops} {
            height: 20em;
        }

        @media ${devices.tablets} {
      height: 16em;
    }
    }

    @media ${devices.desktops} {
       height: 20em;
    }

    @media ${devices.tablets} {
      height: 16em;
    }

    @media ${devices.mobile} {
        flex-flow: column nowrap;
        height: 32em;
        .containers {
        width: 100%;
        }

    }
`;

export const ContainerText = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    position: absolute;
    z-index: 2;
    padding-inline: 20%;
    margin: auto;
    width: 100%;
    height: 28em;
    gap: 1.5em;

    @media ${devices.desktops} {
      height: 20em;
      padding-inline: 12%;
    }

    @media ${devices.tablets} {
      height: 16em;
      padding-inline: 10%;
    }
`;

export const Text = styled.p`
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
    text-align: left;

    @media ${devices.desktops} {
        font-size: .8rem;
        line-height: 1.4rem;
    }

    @media ${devices.tablets} {
        font-size: .6rem;
        line-height: 1rem;
    }
`;

export const Title = styled.h3`
    text-transform: uppercase;
    color: #FF6224;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 3rem;
    text-align: left;

    @media ${devices.desktops} {
        font-size: 1.5rem;
        line-height: 2rem;
    }

    @media ${devices.tablets} {
        font-size: 1.2rem;
        line-height: 2rem;
    }
`;

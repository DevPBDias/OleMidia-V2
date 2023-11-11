import styled from 'styled-components';
import { devices } from '../../mediaQueries';

export const ContactSection = styled.section`
    background: var(--bg-brown);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
`;

export const ContactForm = styled.form`
    background: var(--bg-brown);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding-bottom: 2rem;
    width: 70%;
`;

export const ContactTitle = styled.h1`
    color: #EBE4DE;
    text-align: center;
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

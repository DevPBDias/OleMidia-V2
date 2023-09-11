import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
    }
`;

export const Main = styled.main`
    display: flex;
    flex-flow: column nowrap;
`;

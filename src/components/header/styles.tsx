import styled from 'styled-components';

export const HeaderBar = styled.header`
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    flex-flow: row nowrap;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    height: 124px;
    background: var(--bg-orange);
    z-index: 20;
`;

export const OleLogo = styled.img`
    width: 3em;
    height: 2.5em;
`;

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
    z-index: 99;
`;

export const OleLogo = styled.img`
    width: 3rem;
    height: 2.5rem;
`;

export const ContainerNavIcons = styled.section`
    display: flex;
    flex: row nowrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    text-transform: uppercase;
    gap: 1rem;
`;

export const NavBar = styled.nav`
    display: flex;
    flex: row;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
`;

export const Link = styled.a`
    font-size: 0.64rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;

    &:hover {
        color: #260A00;
    }
    
`;

export const ContainerIcons = styled.section`
    display: flex;
    flex: row;
    justify-items: center;
    align-items: center;
    gap: 0.5rem;
`;

export const Icons = styled.img`
    width: 1rem;
    height: 1rem;
    margin: auto;
`;

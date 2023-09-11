import styled from 'styled-components';

export const HeaderBar = styled.header`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    height: 7.75rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #FF6224;
`;

export const OleLogo = styled.img`
    width: 4.75rem;
    height: 3.375rem;
    flex-shrink: 0;
`;

export const ContainerNavIcons = styled.section`
    display: flex;
    flex: row nowrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    gap: 3rem;
    text-transform: uppercase;
    padding: 1rem;
`;

export const NavBar = styled.nav`
    display: flex;
    flex: row;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    gap: 1.2rem;
    padding: 1rem;
`;

export const Link = styled.a`
    color: #EBE4DE;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
`;

export const ContainerIcons = styled.section`
    display: flex;
    flex: row;
    justify-items: center;
    align-items: center;
    gap: 0.8rem;
`;

export const Icons = styled.img`
    width: 1.99638rem;
    height: 1.99638rem;
    flex-shrink: 0;
`;

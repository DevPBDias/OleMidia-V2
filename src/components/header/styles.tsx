import styled from 'styled-components';
import { devices } from '../../mediaQueries';

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

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1.2rem;
  right: 1rem;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }: any) => (open ? '#ccc' : '#260A00')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }: any) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }: any) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }: any) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }: any) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const OleLogo = styled.img`
    width: 3rem;
    height: 2.5rem;
`;

export const NavBar = styled.nav`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #260A00;
    position: fixed;
    transform: ${({ open }: any) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
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

    @media (max-width: 768px) {
        font-size: 1.4rem;

  }
    
`;

export const ContainerIcons = styled.section`
    display: flex;
    flex: row;
    justify-items: center;
    align-items: center;
    gap: 0.5rem;
    margin-right: 2rem;
`;

export const Icons = styled.img`
    width: 1.2rem;
    height: 1.2rem;
    margin: auto;
`;

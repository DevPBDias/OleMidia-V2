import { useState } from 'react';
import { styled } from 'styled-components';
import NavbarLink from './NavbarLink';
import { devices } from '../../mediaQueries';

type Props = {
  open: boolean,
};

const StyledBurger = styled.div<Props>`
  width: 1.5rem;
  height: 1.5rem;
  position: fixed;
  top: 1.2rem;
  right: 1.5rem;
  z-index: 98;
  display: none;
  
  @media ${devices.tablets} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  .burger {
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open
    ? 'var(--text-color-white)' : 'var(--bg-brown)')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={ open } onClick={ () => setOpen(!open) }>
        <div className="burger" />
        <div className="burger" />
        <div className="burger" />
      </StyledBurger>
      <NavbarLink open={ open } />
    </>
  );
}

export default Burger;

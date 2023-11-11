import { styled } from 'styled-components';
import { devices } from '../../mediaQueries';

type Props = {
  open: boolean,
};

const NavBar = styled.ul<Props>`
  display: flex;
  flex-flow: row nowrap;
  gap: 1.2rem;

  @media ${devices.tablets} {
    flex-flow: column nowrap;
    background-color: #260A00;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 60vw;
    padding-top: 5.5em;
    transition: transform 0.3s ease-in-out;
    gap: 1.5rem;
  }
`;

const Link = styled.a`
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
    font-size: 1rem;
        &:hover {
        color: var(--bg-brown);
  }

  @media ${devices.largerDesktops} {
    font-size: .85rem;
  }

  @media ${devices.desktops} {
    font-size: .7rem;
  }
    
`;

function NavbarLink({ open }: Props) {
  return (
    <NavBar open={ open }>
      <Link href="#home">Home</Link>
      <Link href="#who">Quem somos</Link>
      <Link href="#services">Serviços</Link>
      <Link href="#client">Clientes</Link>
      <Link href="#portfolio">Portfólio</Link>
      <Link href="#contact">Contato</Link>
    </NavBar>
  );
}

export default NavbarLink;

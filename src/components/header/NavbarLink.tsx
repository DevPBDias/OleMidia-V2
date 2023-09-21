import { Link, NavBar } from './styles';

type INavProps = {
  open: boolean,
};

function NavbarLink({ open }: INavProps) {
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

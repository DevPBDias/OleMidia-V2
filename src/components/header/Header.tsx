import logo from '../../assets/OleLogo.svg';
import instagramIcon from '../../assets/Instagram.svg';
import twitterIcon from '../../assets/Twitter.svg';
import { HeaderBar, NavBar, OleLogo,
  ContainerNavIcons, Link, ContainerIcons, Icons } from './styles';

function Header() {
  return (
    <HeaderBar>
      <OleLogo alt="oleHeader" src={ logo } />
      <ContainerNavIcons className="headerLinks">
        <NavBar>
          <Link href="#home">Home</Link>
          <Link href="#who">Quem somos</Link>
          <Link href="#services">Serviços</Link>
          <Link href="#client">Clientes</Link>
          <Link href="#portfolio">Portfólio</Link>
          <Link href="#contact">Contato</Link>
        </NavBar>
        <ContainerIcons className="headerIcons">
          <a href="https://www.instagram.com/olemidia/">
            <Icons alt="instagram" src={ instagramIcon } className="instagramIcon" />
          </a>
          <a href="https://twitter.com/olemidia">
            <Icons alt="instagram" src={ twitterIcon } className="instagramIcon" />
          </a>
        </ContainerIcons>
      </ContainerNavIcons>
    </HeaderBar>
  );
}

export default Header;

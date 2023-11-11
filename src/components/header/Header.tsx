import logo from '../../assets/OleLogo.webp';
import { HeaderBar, OleLogo } from './styles';
import Burger from './Burger';
import IconsNavbar from './IconsNavbar';

function Header() {
  return (
    <HeaderBar>
      <OleLogo alt="oleHeader" src={ logo } />
      <Burger />
      <IconsNavbar />
    </HeaderBar>
  );
}

export default Header;

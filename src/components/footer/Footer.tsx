import DarkOLeLogo from '../../assets/DarkOLeLogo.svg';
import { FooterSection, Logo } from './styles';

function Footer() {
  return (
    <FooterSection>
      <Logo src={ DarkOLeLogo } alt="DarkOLeLogo" />
    </FooterSection>
  );
}

export default Footer;

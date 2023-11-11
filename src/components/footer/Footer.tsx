import { styled } from 'styled-components';
import DarkOLeLogo from '../../assets/DarkOLeLogo.webp';
import { devices } from '../../mediaQueries';

const FooterSection = styled.footer`
    background: var(--bg-orange);
    width: 100%;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    height: 124px;
    padding: 1.5rem;

    img {
      width: 3rem;
      height: 2.5rem;
    }

    @media ${devices.tablets} {
    height: 90px;

    img {
      width: 2.5rem;
      height: 2rem;
    }

    @media ${devices.mobile} {
    height: 66px;

    img {
      width: 2rem;
      height: 1.5rem;
    }
    }
  }
`;

function Footer() {
  return (
    <FooterSection>
      <img src={ DarkOLeLogo } alt="DarkOLeLogo" />
    </FooterSection>
  );
}

export default Footer;

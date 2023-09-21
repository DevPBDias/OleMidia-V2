import { useNavigate } from 'react-router-dom';
import PortfolioCard from './PortfolioCard';
import { PortSection, TitleSection, BtnPort } from './styles';

function Portfolio() {
  const navigate = useNavigate();
  return (
    <PortSection id="portfolio">
      <TitleSection>Nosso portfólio</TitleSection>
      <PortfolioCard />
      <BtnPort
        type="button"
        onClick={ () => navigate('https://www.instagram.com/olemidia/') }
      >
        CONFIRA NOSSO PORTFÓLIO COMPLETO
      </BtnPort>
    </PortSection>
  );
}

export default Portfolio;

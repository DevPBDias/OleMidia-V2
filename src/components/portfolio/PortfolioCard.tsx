import { IPortfolio, portfolioData } from './PortfolioData';
import { ImagePort, ContainerCards } from './styles';

function PortfolioCard() {
  return (
    <ContainerCards>
      {
        portfolioData.map((info: IPortfolio) => (
          <ImagePort key={ info.id } src={ info.image } alt={ `Client${info.id}` } />
        ))
        }
    </ContainerCards>
  );
}

export default PortfolioCard;

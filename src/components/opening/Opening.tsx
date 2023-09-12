import GoDownArrow from '../../assets/Seta.svg';
import { Arrow, ContainerOpening, Text, BgOle } from './styles';
import Background from '../../assets/BackgroundHome.svg';

function Opening() {
  return (
    <ContainerOpening id="home">
      <BgOle src={ Background } alt="Background" />
      <Text>
        SUA IMAGEM,
        <br />
        NOSSO PLANO
        <br />
        DE JOGO!
      </Text>
      <Arrow src={ GoDownArrow } alt="GoDownArrow" />
    </ContainerOpening>
  );
}

export default Opening;

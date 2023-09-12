import GoDownArrow from '../../assets/Seta.svg';
import { Arrow, ContainerOpening, Text } from './styles';
import Background from '../../assets/BackgroundHome.svg';

function Opening() {
  return (
    <ContainerOpening id="home">
      <img src={ Background } alt="Background" />
      <Text>
        SUA MARCA,
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

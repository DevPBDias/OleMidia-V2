import GoDownArrow from '../../assets/Seta.svg';
import { Arrow, ContainerOpening, Text } from './styles';

function Opening() {
  return (
    <ContainerOpening id="home">
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

import OleAbout from '../../assets/QuemSomos 1.png';
import { ContainerAbout, ContainerText, Text, Title } from './styles';

function About() {
  return (
    <ContainerAbout id="who">
      <img src={ OleAbout } alt="OleAbout" />
      <ContainerText>
        <Title>Quem somos</Title>
        <Text>
          A Olé Mídia surgiu da união de duas paixões entre primos: esporte e design.
          Nossa missão é elevar ao máximo a imagem de nossos atletas.
          Oferecemos serviços de assessoria, coordenação, gestão e planejamento
          como parte integrante de nossa atuação profissional.
        </Text>
      </ContainerText>
    </ContainerAbout>
  );
}

export default About;

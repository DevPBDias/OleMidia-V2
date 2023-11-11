import { styled } from 'styled-components';
import OleAboutOne from '../../assets/AboutOne.webp';
import OleAboutTwo from '../../assets/AboutTwo.webp';
import { ContainerAbout, ContainerText, Text, Title } from './styles';
import { devices } from '../../mediaQueries';

const ContentAbout = styled.div`
    width: 100%;
    position: relative;
    height: 28em;

    .container-img-about {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 28em;
    }

    @media ${devices.desktops} {
      height: 20em;

    .container-img-about {
        height: 20em;
    }
    }

    @media ${devices.tablets} {
      height: 16em;

      .container-img-about {
        height: 16em;
    }
    }
`;

const ImgAbout = styled.img`
      width: 100%;
      height: 28em;

      @media ${devices.desktops} {
      height: 20em;
      }

      @media ${devices.tablets} {
      height: 16em;
    }
`;

function About() {
  return (
    <ContainerAbout id="who">
      <section className="containers">
        <ImgAbout src={ OleAboutOne } alt="OleAboutOne" className="firstAbout" />
      </section>
      <section className="containers">
        <ContentAbout>
          <div className="container-img-about">
            <ImgAbout src={ OleAboutTwo } alt="OleAboutTwo" className="secondAbout" />
          </div>
          <ContainerText>
            <Title>Quem somos</Title>
            <Text>
              A Olé Mídia surgiu da união de duas paixões entre primos: esporte e design.
              Nossa missão é elevar ao máximo a imagem de nossos atletas.
              Oferecemos serviços de assessoria, coordenação, gestão e planejamento
              como parte integrante de nossa atuação profissional.
            </Text>
          </ContainerText>
        </ContentAbout>
      </section>
    </ContainerAbout>
  );
}

export default About;

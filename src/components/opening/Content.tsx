import { styled } from 'styled-components';
import GoDownArrow from '../../assets/Seta.svg';
import { devices } from '../../mediaQueries';

const ContainerContent = styled.div`
    position: absolute;
    width: 100%;
    z-index: 5;
    display: flex;
    flex-flow: column nowrap;
    justify-items: center;
    align-items: flex-end;
    justify-content: end;
    height: 100vh;

    .arrow {
        width: 3em;
        height: 4em;
        margin: 2em;

        @media ${devices.largerDesktops} {
          width: 2em;
          height: 3em;
        }

        @media ${devices.tablets} {
          width: 1em;
          height: 2em;
        }
    }
`;

const TextHome = styled.p`
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    text-align: left;
    line-height: 5rem;
    text-transform: uppercase;
    margin-right: 45%;
    
    @media ${devices.largerDesktops} {
      font-size: 3rem;
      line-height: 3.5rem;
      margin-block: 5%;
      margin-right: 44%;
    }

    @media ${devices.largeDesktops} {
      font-size: 3rem;
      line-height: 3.5rem;
      margin-block: 5%;
      margin-right: 44%;
    }

    @media ${devices.desktops} {
      font-size: 2.5rem;
      line-height: 3.5rem;
      margin-block: 1%;
      margin-right: 44%;
    }

    @media ${devices.landscapePhones} {
      font-size: 2rem;
      line-height: 3rem;
      margin-block: 8%;
      margin-right: 30%;
    }

    @media ${devices.tablets} {
      font-size: 2rem;
      line-height: 3rem;
      margin-block: 8%;
      margin-right: 30%;
    }

    @media ${devices.mobile} {
      font-size: 1.8rem;
      line-height: 3rem;
      margin: 30% auto;
    }

        @media ${devices.mini} {
      font-size: 1.35rem;
      line-height: 3rem;
    }
`;

function Content() {
  return (
    <ContainerContent>
      <TextHome>
        Sua imagem,
        <br />
        nosso plano
        <br />
        de jogos!
      </TextHome>
      <img src={ GoDownArrow } alt="GoDownArrow" className="arrow" />
    </ContainerContent>
  );
}

export default Content;

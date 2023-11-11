import { styled } from 'styled-components';
import Content from './Content';
import BgHome from '../../assets/BgHome.webp';

const ContainerOpening = styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-flow: column;
    position: relative;

    .bg-home {
      width: 100%;
      height: 100vh;
    }

`;

const ContainerBackgroungImg = styled.section`
    position: absolute;
    width: 100%;
    z-index: 1s;
`;

function Opening() {
  return (
    <ContainerOpening id="home">
      <ContainerBackgroungImg>
        <img src={ BgHome } alt="BgHome" className="bg-home" />
      </ContainerBackgroungImg>
      <Content />
    </ContainerOpening>
  );
}

export default Opening;

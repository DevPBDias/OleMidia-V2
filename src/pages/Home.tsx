import About from '../components/about/About';
import Clients from '../components/clients/Clients';
import Header from '../components/header/Header';
import Opening from '../components/opening/Opening';
import Portfolio from '../components/portfolio/Portfolio';
import Services from '../components/services/Services';
import { GlobalStyle, Main } from './styles';

function Home() {
  return (
    <Main>
      <GlobalStyle />
      <Header />
      <Opening />
      <About />
      <Services />
      <Clients />
      <Portfolio />
    </Main>
  );
}

export default Home;

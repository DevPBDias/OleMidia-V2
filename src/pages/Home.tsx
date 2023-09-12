import About from '../components/about/About';
import Header from '../components/header/Header';
import Opening from '../components/opening/Opening';
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
    </Main>
  );
}

export default Home;

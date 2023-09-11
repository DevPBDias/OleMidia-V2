import Header from '../components/header/Header';
import Opening from '../components/opening/Opening';
import { GlobalStyle, Main } from './styles';

function Home() {
  return (
    <Main>
      <GlobalStyle />
      <Header />
      <Opening />
    </Main>
  );
}

export default Home;

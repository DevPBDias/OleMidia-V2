import About from '../components/about/About';
import Clients from '../components/clients/Clients';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Opening from '../components/opening/Opening';
import Portfolio from '../components/portfolio/Portfolio';
import Services from '../components/services/Services';
import { GlobalStyle } from './styles';

function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Opening />
      <About />
      <Services />
      <Clients />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

import ClientCard from './ClientCard';
import { TitleSection, ClientSection } from './styles';

function Clients() {
  return (
    <ClientSection id="client">
      <TitleSection>Nossos clientes</TitleSection>
      <ClientCard />
    </ClientSection>
  );
}

export default Clients;

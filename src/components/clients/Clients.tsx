import ClientCard from './ClientCard';
import { TitleSection, ClientSection } from './styles';

function Clients() {
  return (
    <ClientSection>
      <TitleSection>Nossos clientes</TitleSection>
      <ClientCard />
    </ClientSection>
  );
}

export default Clients;

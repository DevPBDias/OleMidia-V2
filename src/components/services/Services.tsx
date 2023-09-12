import ServiceCard from './ServiceCard';
import { TitleSection, ServiceSection } from './styles';

function Services() {
  return (
    <ServiceSection id="services">
      <TitleSection>Nossos serviços</TitleSection>
      <ServiceCard />
    </ServiceSection>
  );
}

export default Services;

import serviceOne from '../../assets/serviceOne.webp';
import serviceTwo from '../../assets/serviceTwo.webp';
import serviceThree from '../../assets/serviceThree.webp';

export type IDataService = {
  title: string,
  image: string,
  description: string,
};

export const Data: IDataService[] = [
  {
    title: 'Assessoria',
    image: serviceOne,
    description: `Ofereceremos apoio diário e constante ao atleta,
     garantindo que todas as suas necessidades sejam atendidas.`,
  },
  {
    title: 'Banco de Imagens',
    image: serviceTwo,
    description: `Elevaremos a presença dos nossos atletas nas redes 
    sociais, impulsionando o engajamento e a descoberta pelo público.`,
  },
  {
    title: 'Design Digital',
    image: serviceThree,
    description: `Estratégias para promover os atletas, 
    ampliando sua presença nas redes sociais e fortalecendo interações.`,
  },
  {
    title: 'Planejamento Estratégico',
    image: serviceOne,
    description: `Ofereceremos apoio diário e constante ao atleta,
    garantindo que todas as suas necessidades sejam atendidas.`,
  },
  {
    title: 'Social Media',
    image: serviceTwo,
    description: `Elevaremos a presença dos nossos atletas nas redes
     sociais, impulsionando o engajamento e a descoberta pelo público.`,
  },
  {
    title: 'Estatísticas do Atleta',
    image: serviceThree,
    description: `Estratégias para promover os atletas, ampliando sua
     presença nas redes sociais e fortalecendo interações.`,
  },
];

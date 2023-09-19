import { Data, IDataService } from './serviceData';
import { ContainerCard, TitleService, ImageService,
  Description, ContainerServices, ContainerText } from './styles';

function ServiceCard() {
  return (
    <ContainerServices>
      {
            Data.map((service: IDataService) => (
              <ContainerCard key={ service.title }>
                <ImageService src={ service.image } alt={ service.title } />
                <ContainerText>
                  <TitleService>{service.title}</TitleService>
                  <Description>{service.description}</Description>
                </ContainerText>
              </ContainerCard>
            ))
        }
    </ContainerServices>
  );
}

export default ServiceCard;

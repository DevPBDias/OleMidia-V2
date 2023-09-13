import { clientData, IClient } from './ClientData';
import { ImageClient, ContainerCards } from './styles';

function ClientCard() {
  return (
    <ContainerCards>
      {
        clientData.map((info: IClient) => (
          <ImageClient key={ info.id } src={ info.image } alt={ `Client${info.id}` } />
        ))
        }
    </ContainerCards>
  );
}

export default ClientCard;

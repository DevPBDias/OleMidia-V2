import client1 from '../../assets/Olé_Giuliano.svg';
import client2 from '../../assets/Olé_Leo.svg';
import client3 from '../../assets/Olé_Evertinho 1.svg';

export type IClient = {
  id: number,
  image: string
};

export const clientData: IClient[] = [
  {
    id: 1,
    image: client1,
  },
  {
    id: 2,
    image: client2,
  },
  {
    id: 3,
    image: client3,
  },
];

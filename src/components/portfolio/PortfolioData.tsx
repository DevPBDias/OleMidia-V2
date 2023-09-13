import poster1 from '../../assets/posterOne.svg';
import poster2 from '../../assets/posterTwo.svg';
import poster3 from '../../assets/posterThree.svg';
import poster4 from '../../assets/posterFour.svg';
import poster5 from '../../assets/posterFIve.svg';
import poster6 from '../../assets/posterSix.svg';
import poster7 from '../../assets/posterSeven.svg';
import poster8 from '../../assets/posterEight.svg';

export type IPortfolio = {
  id: number,
  image: string
};

export const portfolioData: IPortfolio[] = [
  {
    id: 1,
    image: poster1,
  },
  {
    id: 2,
    image: poster2,
  },
  {
    id: 3,
    image: poster3,
  },
  {
    id: 4,
    image: poster4,
  },
  {
    id: 5,
    image: poster5,
  },
  {
    id: 6,
    image: poster6,
  },
  {
    id: 7,
    image: poster7,
  },
  {
    id: 8,
    image: poster8,
  },
];

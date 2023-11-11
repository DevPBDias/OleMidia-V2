import { styled } from 'styled-components';
import instagramIcon from '../../assets/Instagram.webp';
import twitterIcon from '../../assets/Twitter.webp';
import { devices } from '../../mediaQueries';

export const ContainerIcons = styled.section`
    display: flex;
    flex: row;
    justify-items: center;
    align-items: center;
    gap: 0.5rem;

    @media ${devices.tablets} {
        margin-right: 30%;
  }
`;

export const Icons = styled.img`
    width: 1.2rem;
    height: 1.2rem;
    margin: auto;
`;

function IconsNavbar() {
  return (
    <ContainerIcons className="headerIcons">
      <a href="https://www.instagram.com/olemidia/">
        <Icons alt="instagram" src={ instagramIcon } className="instagramIcon" />
      </a>
      <a href="https://twitter.com/olemidia">
        <Icons alt="instagram" src={ twitterIcon } className="instagramIcon" />
      </a>
    </ContainerIcons>
  );
}

export default IconsNavbar;

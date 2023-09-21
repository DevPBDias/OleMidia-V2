import { ContainerIcons, Icons } from './styles';
import instagramIcon from '../../assets/Instagram.svg';
import twitterIcon from '../../assets/Twitter.svg';

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

import { styled } from 'styled-components';
import { devices } from '../../mediaQueries';

const Button = styled.button`
    width: 25%;
    height: 1.8rem;
    background: var(--bg-orange);
    color: var(--bg-brown);
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 8px;
    margin-top: .5rem;
    text-transform: uppercase;

    &:hover {
        background:  #9d3c16;
    }

    @media ${devices.desktops} {
        font-size: 0.5rem;
    }

    @media ${devices.mobile} {
        width: 220px;
        font-size: 0.6rem;

    }
`;

function BtnSubmit() {
  return (
    <Button type="submit">
      Enviar
    </Button>
  );
}

export default BtnSubmit;

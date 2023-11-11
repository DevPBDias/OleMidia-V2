import { styled } from 'styled-components';
import { devices } from '../../mediaQueries';

type IErrorProps = {
  errorMsg: string[]
};

const ErrorMsgText = styled.p`
    border-radius: 4px;
    color: #9d3c16;
    border-left: 0.5rem solid var(--bg-orange);
    background-color: #EBE4DE;
    text-align: center;
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    margin-bottom: 0.2rem;

    @media ${devices.desktops} {
        font-size: .6rem;
    }

    @media ${devices.mobile} {
        font-size: 0.5rem;
        } 
`;

const ErrorContainer = styled.div`
    width: 100%;
`;

function ErrorForm({ errorMsg }: IErrorProps) {
  return (
    <ErrorContainer>
      {
        errorMsg && errorMsg.map((msg: string, key: number) => (
          <ErrorMsgText key={ key }>
            {msg}
          </ErrorMsgText>
        ))
    }
    </ErrorContainer>
  );
}

export default ErrorForm;

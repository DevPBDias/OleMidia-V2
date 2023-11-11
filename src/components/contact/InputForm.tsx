import { styled } from 'styled-components';
import { devices } from '../../mediaQueries';

const Input = styled.input`
    width: 100%;
    height: 2rem;
    padding: 1rem;
    margin-bottom: 0.7rem;
    text-align: left;
    color: var(--bg-brown);
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;
    border-radius: 8px;
    
    &::placeholder {
    color: var(--bg-brown) 0.5;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;
    }

    @media ${devices.largerDesktops} {
        font-size: .8rem;
        line-height: 1.5rem;

        &::placeholder {
          font-size: .8rem;
          line-height: 1.5rem;
        }
    }

    @media ${devices.desktops} {
        font-size: .6rem;
        &::placeholder {
          font-size: .6rem;
        }
    }

    @media ${devices.mobile} {
        font-size: 0.5rem;
        &::placeholder {
          font-size: 0.5rem;
        }    }
`;

const TextArea = styled.textarea`
    border-radius: 8px;
    width: 100%;
    height: 6rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
    text-align: left;
    resize: none;
    color: var(--bg-brown);
    font-size: .9rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;

    &::placeholder {
    color: var(--bg-brown) 0.5;
    font-size: .9rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;
    }

    @media ${devices.largerDesktops} {
        font-size: .8rem;
        line-height: 1.5rem;

        &::placeholder {
          font-size: .8rem;
          line-height: 1.5rem;
        }
    }

    @media ${devices.desktops} {
        font-size: .6rem;
        &::placeholder {
          font-size: .6rem;
        }
    }

    @media ${devices.mobile} {
        font-size: 0.5rem;
        &::placeholder {
          font-size: 0.5rem;
        }    }
`;

type InputProps = {
  name: string,
  email: string,
  subject: string,
  message: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>) => void
};

function InputForm({ name, subject, message, email, handleChange }: InputProps) {
  return (
    <>
      <Input
        type="text"
        name="name"
        value={ name }
        placeholder="Nome"
        onChange={ (event) => handleChange(event) }
      />
      <Input
        type="text"
        name="email"
        value={ email }
        placeholder="E-mail"
        onChange={ (event) => handleChange(event) }
      />
      <Input
        type="text"
        name="subject"
        value={ subject }
        placeholder="Assunto"
        onChange={ (event) => handleChange(event) }
      />
      <TextArea
        placeholder="Mensagem"
        name="message"
        value={ message }
        onChange={ (event) => handleChange(event) }
      />
    </>
  );
}

export default InputForm;

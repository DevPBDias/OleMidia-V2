import styled from 'styled-components';

export const ContactSection = styled.section`
    background: #260A00;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
`;

export const ContactForm = styled.form`
    background: #260A00;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding-bottom: 2rem;
    width: 70%;
`;
export const ContactTitle = styled.h1`
    color: #EBE4DE;
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 5rem;
    text-transform: uppercase;
`;

export const Input = styled.input`
    width: 100%;
    height: 2rem;
    padding: 1rem;
    margin-bottom: 0.7rem;
    text-align: left;
    color: #260A00;
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;
    
    &::placeholder {
    color: #260A00 0.5;
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 6rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
    text-align: left;
    resize: none;
    color: #260A00;
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;

    &::placeholder {
    color: #260A00 0.5;
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;
    }
`;

export const ErrorMsgText = styled.p`
    width: 100%;
    color: #260A00;
    border-left: 0.5rem solid var(--bg-orange);
    /* background-color: var(--bg-orange); */
    background-color: #EBE4DE;
    text-align: center;
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    margin-bottom: 0.2rem;
`;

export const BtnSubmit = styled.button`
    width: 244px;
    height: 53px;
    flex-shrink: 0;
    background: #FF6224;
    color: #260A00;
    font-family: Open Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:hover {
    background:  #9d3c16;
    }
`;

import styled from 'styled-components';

export const ContactSection = styled.section`
    background: #260A00;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding: 40px;
`;

export const ContactForm = styled.form`
    background: #260A00;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding: 40px;
`;
export const ContactTitle = styled.h1`
    color: #EBE4DE;
    text-align: center;
    font-family: Open Sans;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 48px;
    margin-bottom: 80px;
`;

export const Input = styled.input`
    width: 1000px;
    height: 53px;
    flex-shrink: 0;
    padding: 20px;
    margin-bottom: 20px;
    text-align: left;
    color: #260A00;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    
    &::placeholder {
    color: #260A00 0.5;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    }
`;

export const TextArea = styled.textarea`
    width: 1000px;
    height: 159px;
    flex-shrink: 0;
    padding: 20px;
    margin-bottom: 20px;
    text-align: left;
    resize: none;
    color: #260A00;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    &::placeholder {
    color: #260A00 0.5;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    }
`;

export const ErrorMsgText = styled.p`
    color: #EBE4DE;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 48px;
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

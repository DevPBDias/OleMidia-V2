import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { ContactSection, ContactForm,
  TextArea, Input, BtnSubmit, ContactTitle, ErrorMsgText } from './styles';

type IForm = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '',
  });
  const [formInfo, setFormInfo] = useState<IForm[]>([]);
  const [errorMsg, setErrorMsg] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const sendEmail = () => {
    const template = {
      from_name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send('service_c0dyi0t', 'template_pxeokfc', template, 'K9YPasuHtbdSlNyI_')
      .then((response) => {
        console.log('Email enviado', response.status, response.text);
        resetForm();
      }, (error) => {
        console.log('Error: ', error);
      });
  };

  const updateState = () => {
    const newUser = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    setFormInfo([...formInfo, newUser]);
  };

  const isFormValid = () => {
    const errors = [];
    const regex = /\S+@\S+\.\S+/;
    const validEmail = regex.test(formData.email);
    if (formData.name === '') {
      errors.push('Nome é obrigatório!');
    }
    if (!validEmail || formData.email === '') {
      errors.push('E-mail inválido!');
    }
    if (formData.subject === '') {
      errors.push('Assunto é obrigatório!');
    }
    if (formData.message === '') {
      errors.push('Mensagem é obrigatório!');
    }
    setErrorMsg(errors);
    return errors.length === 0;
  };

  const resetForm = () => {
    setFormData({ name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isFormValid()) {
      updateState();
      resetForm();
      sendEmail();
      setErrorMsg([]);
    }
  }

  return (
    <ContactSection id="contact">
      <ContactForm onSubmit={ (event) => handleSubmit(event) } action="#">
        <ContactTitle>Contato</ContactTitle>
        <Input
          type="text"
          name="name"
          value={ formData.name }
          placeholder="Nome"
          onChange={ (event) => handleChange(event) }
        />
        <Input
          type="text"
          name="email"
          value={ formData.email }
          placeholder="E-mail"
          onChange={ (event) => handleChange(event) }
        />
        <Input
          type="text"
          name="subject"
          value={ formData.subject }
          placeholder="Assunto"
          onChange={ (event) => handleChange(event) }
        />
        <TextArea
          placeholder="Mensagem"
          name="message"
          value={ formData.message }
          onChange={ (event) => handleChange(event) }
        />
        {
          errorMsg && errorMsg.map((msg: string, key: number) => (
            <ErrorMsgText key={ key }>
              {msg}
            </ErrorMsgText>
          ))
        }
        <BtnSubmit
          type="submit"
        >
          ENVIAR
        </BtnSubmit>
      </ContactForm>
    </ContactSection>
  );
}

export default Contact;

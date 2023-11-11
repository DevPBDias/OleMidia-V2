import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import BtnSubmit from './BtnSubmit';
import { ContactSection, ContactForm, ContactTitle } from './styles';
import ErrorForm from './ErrorForm';
import InputForm from './InputForm';

export type IForm = {
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
        <InputForm
          name={ formData.name }
          subject={ formData.subject }
          email={ formData.email }
          message={ formData.message }
          handleChange={ (event) => handleChange(event) }
        />
        <ErrorForm errorMsg={ errorMsg } />
        <BtnSubmit />
      </ContactForm>
    </ContactSection>
  );
}

export default Contact;

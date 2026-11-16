import React from "react";
import s from "./css/Form.module.css";
import { TextField } from "@material-ui/core";
import {ToastContainer,toast } from "react-toastify";
import emailjs from '@emailjs/browser'
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2'

const Form = ({ abrirCerrarModal }) => {
  


  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs.sendForm('service_ck117nt', 'template_z4bym3b', e.target,'jKnPHY38cuv9VjbeT')
    
      Swal.fire(
        'Gracias Por Tu Feedback',
        'Pronto Sera Revisado',
        'success'
          )
   abrirCerrarModal() 
  };

  return (
    <div className={s.container}>
      <h1 className={s.titu}>deja tu Feedback aqui 👇</h1>
      <form className={s.Form} onSubmit={e => sendEmail(e)} >
        <div>
          <TextField
            className={s.input}
            type="text"
            variant="filled"
            label="nombre"
            name="user_name"
          />
        </div>
        <div>
          <TextField
            className={s.input}
            type="email"
            variant="filled"
            label="correo"
            name="email"
          />
        </div>
        <div>
          <TextField
            className={s.input}
            variant="filled"
            label="Feedback"
            multiline
            minRows="3"
            name="user_message"
          />
        </div>

        <button className={s.botonForm}>Enviar</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Form;

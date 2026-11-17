import React from "react";
import type { FormEvent } from "react";
import s from "./css/Form.module.css";
import { TextField } from "@material-ui/core";
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

type FormProps = {
  abrirCerrarModal: () => void;
};

const Form = ({ abrirCerrarModal }: FormProps) => {
  


  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    emailjs.sendForm('service_ck117nt', 'template_z4bym3b', e.currentTarget,'jKnPHY38cuv9VjbeT')
    
      Swal.fire(
        'Thanks for your feedback',
        'It will be reviewed soon',
        'success'
          )
   abrirCerrarModal() 
  };

  return (
    <div className={s.container}>
      <h1 className={s.titu}>Leave your feedback here 👇</h1>
      <form className={s.Form} onSubmit={e => sendEmail(e)} >
        <div>
          <TextField
            className={s.input}
            type="text"
            variant="filled"
            label="Name"
            name="user_name"
          />
        </div>
        <div>
          <TextField
            className={s.input}
            type="email"
            variant="filled"
            label="Email"
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

        <button className={s.botonForm}>Send</button>
      </form>
    </div>
  );
};

export default Form;

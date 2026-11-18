import React from "react";
import { useState } from "react";
import style from "./css/Animacion.module.css";
import Bounce from "react-reveal/Bounce";
import { Modal } from "@material-ui/core";
import Form  from './Form'
import Avatar from './Avatar'
import { GithubIcon, LinkedinIcon, RocketIcon } from './icons'




const Animacion = () => {
  const [modal, setModal] = useState(false);
  const abrirCerrarModal = () => {
    setModal(!modal);
  };
  const body = (
    <div >
      <Form abrirCerrarModal={abrirCerrarModal} />
    </div>
  );

  

  return (
    
    <div>
       
         <div className="container">
      
      <Bounce right>
        <div className={style.section}>
          <Avatar className={style.img} />
          <div className={style.cen}>
            <p className={style.p}>Hi, my name is Edwin Arias</p>
            <p className={style.sub}>AI Engineer</p>
            
            

            <div className={style.centrar}>
            
              <a
                href="https://github.com/EFAM2907"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className={style.iconos} label="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/edwinfer2907/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className={style.iconos} label="LinkedIn" />
              </a> 
              
            </div>
          

          </div>

 
          <Modal className={style.modal} open={modal} onClose={abrirCerrarModal}>
            {body}
          </Modal>
        </div>
        
      
       
       
      </Bounce>

  <ul className={style.arrows}>
    <li>
    <a className={style.area} href='#about'/>

    </li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
      
     
    </div>
  <div className={style.abrir}><h1 className={style.h1}>Feedback</h1> <a  onClick={abrirCerrarModal}><RocketIcon className={style.cohete} label="Open feedback form" /></a> 
    
        </div>
        </div>
  );
};

export default Animacion;



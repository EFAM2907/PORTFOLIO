import React from "react";
import { useState } from "react";
import style from "./css/Animacion.module.css";
import Bounce from "react-reveal/Bounce";
import { Modal } from "@material-ui/core";
import Form  from './Form'




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
          <img
            className={style.img}
            src="https://c.tenor.com/xMGn2xPAKvQAAAAC/approved.gif"
            alt="imagen"
          />
          <div className={style.cen}>
            <p className={style.p}>Hi, My Name is edwin arias</p>
            <p className={style.sub}>Full stack developer</p>
            
            

            <div className={style.centrar}>
            
              <a
                href="https://github.com/EFAM2907"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={style.iconos}
                  src="https://img.icons8.com/ios-glyphs/344/github.png"
                  alt='icono'
                />
              </a>
              <a
                href="https://www.linkedin.com/in/edwinfer2907/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={style.iconos}
                  src="https://img.icons8.com/ios-filled/344/linkedin.png"
                  alt='icono'
                />
              </a> 
              
            </div>
          

          </div>

 
          <Modal className={style.modal} open={modal} onClose={abrirCerrarModal}>
            {body}
          </Modal>
        </div>
        
      
       
       
      </Bounce>

  <ul>
    <li>
    <a className={style.area} href='#about'/>

    </li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
      
     
    </div>
  <div className={style.abrir}><h1 className={style.h1}>Feedback</h1> <a  onClick={abrirCerrarModal}><img className={style.cohete} src="https://img.icons8.com/color-glass/344/launched-rocket.png" alt='img'/></a> 
    
        </div>
        </div>
  );
};

export default Animacion;



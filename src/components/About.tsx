import React from "react";
import style from './css/About.module.css'
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className={style.contenedor}>
        
      <div className={style.conten}>
      <Fade right> 
     
        <img id='about'
        className={style.img}
          src='https://avatars.githubusercontent.com/u/97002137?s=400&u=fe94a8c4e468bf829e185bff7afd4d3212701fe9&v=4'
          alt="yo"
        />
        <div className={style.info}> 
       <p  className={style.parrafo}>👋 Hola! Mi nombre es edwin,Soy un Desarollador Full Stack Con Inclinacion al Frontend! Siempre busque Algo que me sacara de lo rutinario Y De Repente Boom 💥Encontre Mi Lugar</p>
      <a className={style.boton} href='https://drive.google.com/file/d/1FfQzdt0EKR_lrrWofcvPxi8wKauSYYiT/view?usp=sharing' target="_blank" rel="noopener noreferrer">ver CV🚀</a>
       </div>
       
       </Fade>
      </div>
      
    </div>
  );
};

export default About;

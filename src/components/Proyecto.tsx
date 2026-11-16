import React from "react";
import s from "./css/Proyecto.module.css";

const Proyecto = () => {
  return (
    <div className={s.container}>

      {/* PATITAS */}
      <div className={s.Proyecto}>
        <div className={s.Proye}>
          <img className={s.img} src='https://telemedellin.tv/wp-content/uploads/2019/08/La-Perla-e1565797876677.jpg'alt="imf" />
           <h4 className={s.h4}>Patitas🐾</h4>
          <p className={s.parra}>
          Este Proyecto Surgio  Con La Idea De Hacer Un Beneficio Social,
          Concientizar a las Personas a Optar Por Animales y No Venderlos. 
          Sobre Todo Buscar Ayudar a los Animales Que se Encuentran en Malas Condiciones de Vida,
          Sin Comer y Sin Salud.
          Se Proporciona Una Conexión Entre la Persona que Quiere Ayudar a Un Animal a Que lo Adopten y Darle un Buen Hospedaje y Vida
          </p>
          <div className={s.botones}>
            <a
              className={s.demo}
              href="https://github.com/FrancoG21/PF-Henry-Front"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.icon}
                src="https://img.icons8.com/fluency/344/github.png"
                alt="proyecto"
              />
            </a>
            <a
              className={s.demo}
              href="https://pf-henry-front-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.icon}
                src="https://img.icons8.com/emoji/344/link-emoji.png"
                alt="proyecto"
              />
            </a>
           
          </div>
        </div>

        {/* Countries */}

        <div className={s.Proye}>
          <img className={s.img} src="https://thumbs.dreamstime.com/b/siluetas-de-la-gente-que-sostiene-banderas-de-diversos-pa%C3%ADses-41520437.jpg" alt="imf" />
          <h4 className={s.h4}>Countries ✈</h4>
          <p className={s.parra}>
          Una App Diseñada Para El que Viaja,
          El que Estudia,Al que le Interesa Saber un Poco de la Inmensidad de Lugares que Podemos Recorrer en Este Mundo!
         Countries es tu Mejor Opción
          </p>
          <div className={s.botones}>
            <a
              className={s.demo}
              href="https://github.com/EFAM2907/PI-Countries-main"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.icon}
                src="https://img.icons8.com/fluency/344/github.png"
                alt="proyecto"
              />
            </a>
            {/* <a className={s.demo} target="_blank" rel="noopener noreferrer">
              <img
                className={s.icon}
                src="https://img.icons8.com/emoji/344/link-emoji.png"
                alt="proyecto"
              />
            </a> */}
          </div>
        </div>


         {/* APP-DOGS */}
        <div className={s.Proye}>
          <img className={s.img} src="https://gestion.portalbiesa.com/redaccio/arxius/imatges/201902/770_1550480986blog_post_consejo_perro_adoptado_1.jpg" alt="imf" />
          <h4 className={s.h4}>Dogs🐶</h4>
          <p className={s.parra}>
            Se trata de una SPA, Utilizando React y Redux para el Front End.
            La SPA Consume Datos de una API a Través de Un
            Back End Desarrollado en Node.js Utilizando Express, Agregando
            Nuevas Funcionalidades a la API Original. Algunos Features del
            Proyecto: Cache de búsquedas, Ordenamiento y Filtros, Formularios
            Controlados.
          </p>
          <div className={s.botones}>
            <a
              className={s.demo}
              href="https://github.com/EFAM2907/Proyecto-De-Perros"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.icon}
                src="https://img.icons8.com/fluency/344/github.png"
                alt="proyecto"
              />
            </a>
            {/* <a className={s.demo} target="_blank" rel="noopener noreferrer">
              <img
                className={s.icon}
                src="https://img.icons8.com/emoji/344/link-emoji.png"
                alt="proyecto"
              />
            </a> */}
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Proyecto;

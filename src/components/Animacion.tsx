import React from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import style from "./css/Animacion.module.css";
import Bounce from "react-reveal/Bounce";
import { Modal } from "@material-ui/core";
import Form  from './Form'
import Avatar from './Avatar'
import { GithubIcon, LinkedinIcon, RocketIcon } from './icons'




const ROCKET_SIZE = 60;
const ROCKET_TOP = 80;
const ROCKET_BOTTOM_GAP = 24;

const Animacion = () => {
  const [modal, setModal] = useState(false);
  const rocketRef = useRef<HTMLDivElement>(null);

  // The rocket descends as the page scrolls: 0% scrolled = near the top,
  // 100% scrolled = near the bottom of the viewport.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = rocketRef.current;
      if (!el) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
      const travel = Math.max(window.innerHeight - ROCKET_SIZE - ROCKET_BOTTOM_GAP - ROCKET_TOP, 0);
      el.style.transform = `translateY(${progress * travel}px)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
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
  {/* Portal: react-reveal wraps the header in a transformed element, which would break position: fixed */}
  {createPortal(
    <div ref={rocketRef} className={style.abrir}>
      <h1 className={style.h1}>Feedback</h1>
      <a onClick={abrirCerrarModal}>
        <RocketIcon className={style.cohete} label="Open feedback form" />
      </a>
    </div>,
    document.body,
  )}
        </div>
  );
};

export default Animacion;



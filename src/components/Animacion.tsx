import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "@material-ui/core";
import style from "./css/Animacion.module.css";
import Form from "./Form";
import Hero from "./Hero";
import { RocketIcon } from "./icons";

const ROCKET_SIZE = 60;
const ROCKET_BOTTOM_GAP = 24;
// Where the rocket sits at the top of the page, as a fraction of the viewport
// height: low enough to stay clear of the photo and the name.
const ROCKET_START = 0.86;

const Animacion = () => {
  const [modal, setModal] = useState(false);
  const rocketRef = useRef<HTMLDivElement>(null);

  // The rocket starts in the lower part of the screen and descends to the
  // bottom edge as the page scrolls.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = rocketRef.current;
      if (!el) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
      const endY = window.innerHeight - ROCKET_SIZE - ROCKET_BOTTOM_GAP;
      const startY = Math.min(window.innerHeight * ROCKET_START, endY);
      el.style.transform = `translateY(${startY + progress * (endY - startY)}px)`;
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

  const toggleModal = () => setModal((open) => !open);

  return (
    <>
      <Hero />

      <Modal className={style.modal} open={modal} onClose={toggleModal}>
        <div>
          <Form abrirCerrarModal={toggleModal} />
        </div>
      </Modal>

      {/* Portal: react-reveal wraps the header in a transformed element, which would break position: fixed */}
      {createPortal(
        <div ref={rocketRef} className={style.abrir}>
          <h1 className={style.h1}>Feedback</h1>
          <a onClick={toggleModal}>
            <RocketIcon className={style.cohete} label="Open feedback form" />
          </a>
        </div>,
        document.body,
      )}
    </>
  );
};

export default Animacion;

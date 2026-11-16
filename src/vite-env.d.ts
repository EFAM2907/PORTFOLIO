/// <reference types="vite/client" />

// react-reveal (2018) ships no types. Minimal declaration for the pieces we use.
declare module "react-reveal/Fade" {
  import type { ComponentType, ReactNode } from "react";
  const Fade: ComponentType<{
    children?: ReactNode;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    big?: boolean;
    cascade?: boolean;
    delay?: number;
    duration?: number;
  }>;
  export default Fade;
}

declare module "react-reveal/Bounce" {
  import type { ComponentType, ReactNode } from "react";
  const Bounce: ComponentType<{
    children?: ReactNode;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    delay?: number;
    duration?: number;
  }>;
  export default Bounce;
}

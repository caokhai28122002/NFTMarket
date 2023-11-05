import { FCC } from "@/types";
import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button: FCC<Props> = ({ children, className, ...props }) => {
  return (
    <>
    
    </>
  );
};

export default Button;

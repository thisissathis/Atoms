import React, { ButtonHTMLAttributes } from 'react';
import "./Button.scss";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'lite' | 'dark' | 'black';
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;

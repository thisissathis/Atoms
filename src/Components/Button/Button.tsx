import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import "./Button.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Define your Button component props here
  variant: 'lite' | 'dark' | 'black';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant, ...restProps } = props;

  const btnClassnameObj = {
    'lite':'button-lite',
    'dark':'button-dark',
    'black':'button-black'
  }

  const buttonClassName = btnClassnameObj[variant];

  return <button ref={ref} className={buttonClassName} {...restProps} />;
});

export default Button;


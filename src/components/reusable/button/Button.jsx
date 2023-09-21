import React from 'react';
import s from './Button.module.scss'

const Button = ( { children,className, onClick, disabled} ) => {
    return (
        <button
            className={disabled ?`${s.btn} ${s.disabled}` : `${s.btn} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
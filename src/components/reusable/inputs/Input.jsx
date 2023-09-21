import React from 'react';
import s from './Inputs.module.scss'

const Input = ( {type,value,setValue,placeholder} ) => {
    return (
        <input
        className={s.input}
        type={type}
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        >

        </input>
    );
};

export default Input;
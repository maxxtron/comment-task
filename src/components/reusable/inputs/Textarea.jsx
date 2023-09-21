import React from 'react';
import s from "./Inputs.module.scss";

const Textarea = ( {value,setValue,placeholder} ) => {
    return (
        <textarea
            className={s.textarea}
            value={value}
            onChange={setValue}
            placeholder={placeholder}
        />
    );
};

export default Textarea;
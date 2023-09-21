import React from 'react';
import s from './Body.module.scss'

const Body = ({ children }) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
};

export default Body;
import React from 'react';
import style from './style.scss';

export const Nav = () => {
    return (
        <div className={style['nav-container']}>
            {
                ['Planner Tools', 'Local Vendors', 'Wedding Websites', 'Invitations', 'Rigistry'].map((page) => <span key={page}>{page} </span>)
            }
        </div>
    );
};

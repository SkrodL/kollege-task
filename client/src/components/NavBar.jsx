import React from 'react';
import classes from './css.modules/NavBar.module.css'
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? classes.active : ''

const NavBar = () => {
    return (
        <>
            <div className={classes.header}>
                <NavLink className={setActive} to="/"><h1>Солдаты Победы. Народный архив</h1></NavLink>
                <div className={classes.links}>
                    <NavLink className={setActive} to="/history">История</NavLink>
                    <NavLink className={setActive} to="/gallery">Галерея</NavLink>
                    <NavLink className={setActive} to="/docs">Документы войны</NavLink>
                </div>
            </div>
            <hr/>
        </>
    );
};

export default NavBar;
import React from 'react';
import classes from './css.modules/HeroCard.module.css'

const HeroCard = ({hero}) => {
    return (
        <div className={classes.card}>
            <img src={process.env.REACT_APP_API_URL + hero.photo} alt=""/>
            <h1>{hero.name}</h1>
            <h4>{hero.rank}</h4>
        </div>
    );
};

export default HeroCard;
import React, {useContext} from 'react';
import HeroCard from "./HeroCard";
import {Context} from "../index";
import classes from './css.modules/HeroList.module.css'
import {observer} from "mobx-react-lite";

const HeroList = observer(() => {
    const {hero} = useContext(Context)
    return (
        <div className={classes.list}>
            {hero.heroes.map(hero =>
                <HeroCard key={hero.id} hero={hero}/>
            )}
        </div>
    );
});

export default HeroList;
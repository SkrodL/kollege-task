import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {getHeroes} from "../http/heroAPI";
import HeroCard from "../components/HeroCard";
import {observer} from "mobx-react-lite";
import classes from './css.modules/History.module.css'
import HeroList from "../components/HeroList";
import AddHistoryBtn from "../components/AddHistoryBtn";
let limit = 6
const History = observer(() => {
    const {hero} = useContext(Context)
    if (window.innerWidth < 1700){
        limit = 4
    }
    if (window.innerWidth < 780){
        limit = 3
    }

    useEffect(() => {
        getHeroes(hero.page, limit).then(data => {
            hero.setHeroes(data.rows)
            hero.setTotalCount(data.count)
        })
    }, [hero.page])
    return (
        <div>
            <HeroList/>
            <AddHistoryBtn/>
        </div>
    );
});

export default History;
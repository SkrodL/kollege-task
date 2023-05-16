import React, {useState} from 'react';
import classes from './css.modules/AddHistory.module.css'
import plus_white from '../assets/plus.png'
import plus_black from '../assets/plus_black.png'
import {useNavigate} from "react-router-dom";
import {ADD_HISTORY_ROUTE} from "../utils/consts";

const AddHistoryBtn = () => {
    const navigate = useNavigate()
    const [img, setImg] = useState(plus_black)
    return (
        <div className={classes.moduleButton} onMouseOver={() => setImg(plus_white)} onMouseOut={() => setImg(plus_black)} onClick={() => navigate(ADD_HISTORY_ROUTE)}>
            <img src={img} alt=""/>
            <p>Добавить историю</p>
        </div>
    );
};

export default AddHistoryBtn;
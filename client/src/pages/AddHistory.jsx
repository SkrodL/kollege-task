import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {createHero} from "../http/heroAPI";
import classes from "./css.modules/AddHistory.module.css";
import plus_white from "../assets/plus.png";
import plus_black from "../assets/plus_black.png";
import {ADD_HISTORY_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const AddHistory = observer(() => {
    const {hero} = useContext(Context)
    const [name, setName] = useState('')
    const [rank, setRank] = useState('')
    const [file, setFile] = useState(null)
    const [paragraph, setParagraph] = useState([])
    const [poem, setPoem] = useState([])
    const [award, setAward] = useState([])
    const addParagraph = () => {
        setParagraph([...paragraph, {value: '', number:Date.now()}])
    }
    const removeParagraph = (number) => {
        setParagraph(paragraph.filter(i => i.number !== number))
    }
    const changeParagraph = (key, value, number) => {
        setParagraph(paragraph.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addPoem = () => {
        setPoem([...poem, {value: '', number:Date.now()}])
    }
    const removePoem = (number) => {
        setPoem(poem.filter(i => i.number !== number))
    }
    const changePoem = (key, value, number) => {
        setPoem(poem.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addAward = () => {
        setAward([...award, {value: '', number:Date.now()}])
    }
    const removeAward = (number) => {
        setAward(award.filter(i => i.number !== number))
    }
    const changeAward = (key, value, number) => {
        setAward(award.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
        let reader = new FileReader();
        let img = document.querySelector('#img')

        reader.onloadend = function () {
            img.style.zIndex = 200
            img.style.backgroundImage = `url(${reader.result})`;
        }

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        } else {
            img.src = "";
        }
    }

    const addHero = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('rank', rank)
        formData.append('photo', file)
        formData.append('paragraph', JSON.stringify(paragraph))
        formData.append('poem', JSON.stringify(poem))
        formData.append('award', JSON.stringify(award))
        console.log(paragraph)
        createHero(formData).then(r => console.log(paragraph))
    }
    const navigate = useNavigate()
    const [img, setImg] = useState(plus_black)
    return (
        <div className={classes.container}>
            <div className={classes.leftBlock}>
                <div className={classes.fileUpload}>
                    <label>
                        <input type="file" name="file" onChange={selectFile}/>
                        <span>Выберите файл</span>
                    </label>
                    <div id="img"></div>
                </div>
                <div id="file-name"></div>
                <input type="text" placeholder={"Введите имя"}/>
                <input type="text" placeholder={"Введите звание"}/>
            </div>
            <div className={classes.rightBlock}>
                <div className={`${classes.paragraph} ${classes.optionalCard}`}>
                    <button onClick={addParagraph}>Добавить абзац</button>
                    <div className={classes.scrollableBlock}>
                        {paragraph.map(i =>
                            <div style={{position: "relative"}} key={i.number}>
                                <div className={classes.paragraph} onInput={e => changeParagraph('value',e.target.textContent, i.number)} contentEditable></div>
                                <button onClick={() => removeParagraph(i.number)}>x</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className={classes.optionalCard}>
                    <button onClick={addPoem}>Добавить стих</button>
                    <div className={classes.scrollableBlock}>
                        {poem.map(i =>
                            <div style={{position: "relative"}} key={i.number}>
                                <div className={classes.poem} onInput={e => changePoem('value',e.target.textContent, i.number)} contentEditable></div>
                                <button onClick={() => removePoem(i.number)}>x</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className={classes.optionalCard}>
                    <button onClick={addAward}>Добавить награду</button>
                    <div className={classes.scrollableBlock}>
                        {award.map(i =>
                            <div style={{position: "relative", height: "min-content"}} key={i.number}>
                                <div className={classes.award} onInput={e => changeAward('value',e.target.textContent, i.number)} contentEditable></div>
                                <button onClick={() => removeAward(i.number)}>x</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={classes.moduleButton} onMouseOver={() => setImg(plus_white)} onMouseOut={() => setImg(plus_black)} onClick={addHero}>
                <img src={img} alt=""/>
                <p>Добавить историю</p>
            </div>
        </div>
    );
});

export default AddHistory;
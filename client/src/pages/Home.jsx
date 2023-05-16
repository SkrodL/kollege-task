import React, {useEffect, useState} from 'react';
import classes from './css.modules/home.module.css'
// import slide1 from './img/slide1.jpg'
// import slide2 from './img/slide2.jpg'
// import slide3 from './img/slide3.jpg'
// import slide4 from './img/slide4.jpg'
// import slide5 from './img/slide5.jpg'
// import slide6 from './img/slide6.jpg'
// import slide7 from './img/slide7.jpg'
// import slide8 from './img/slide8.jpg'
let i = 0
// let images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8]
let images = []
let flag = false

const Home = () => {
    const [background, setBackground] = useState('')
    function slide() {
        setInterval(() => {
            if (i <= images.length-2) {
                i++
            } else {
                i = 0
            }
            setBackground(images[i])
        }, 5000)
    }
    useEffect(() => {
        flag === false ? flag = true : slide()
    }, [])
    return (
        <div className={classes.home}>
            <div className={classes.slider} style={{background: `url("${background}")`}}>
                <h1>Солдаты Победы. Народный архив</h1>
            </div>
            <div className={classes.info}>
                <h1>Причины создания сайта</h1>
                <h4>Дорогие друзья</h4>
                <p>Мы, студенты Колледжа предпринимательства г. Калининграда, создали этот сайт «Солдаты Победы. Народный архив», чтобы<br/>
                    показать, что из незначительных эпизодов,  биографии и жизни наших родных людей  слагалась Великая Победа нашей страны.<br/>
                    В каждой семье есть истории воевавших родственников, из воспоминаний которых и складывается общая картина освобождения нашей Родины. Вписать рассказы о судьбах людей, каждым своим шагом приближавших победу нашего народа, в летопись Великой Отечественной войны — долг каждого человека, неравнодушного к своей Родине.<br/>
                    Сегодня у нас появилась возможность опубликовать здесь истории о войне близких нам людей, наших отцов, дедов и прадедов, сохранив их имена для истории России. Это они прошли с армией дорогами испытаний и побед, это они были участниками кровопролитных боев, это они своим самоотверженным трудом в тылу ковали Победу!<br/>
                    Они были живыми свидетелями зверств нацистских оккупантов и освободителями народов Европы от фашизма!<br/>
                    Мы не позволим, чтобы у нас отняли эту Победу и извратили историю! Мы хотим, чтобы все знали, кто и какой ценой спас мир от всеобщего порабощения!<br/>
                </p>
            </div>
        </div>
    );
};

export default Home;
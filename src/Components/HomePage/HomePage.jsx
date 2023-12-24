import React from 'react'
import classes from "./HomePage.module.css"
import { Link } from 'react-router-dom';


export const HomePage = () => {
    const imgUrl = "https://sun9-45.userapi.com/impg/CIqfClbDC5izZxbz6TYaLmPd_Ag6g2_9fB_fqg/n6izRXxtT1A.jpg?size=733x730&quality=96&sign=5167fc50b0035710e75145b572af12cd&type=album"
    // const imgUrl2 = 'https://sun2-22.userapi.com/impg/2YiE2IW9r0friRMzAEniG_oR87ffPUfqKRswKw/vtMiX4nUf8o.jpg?size=300x300&quality=96&sign=7757c3bd97980caf5674faa89f7781c3&type=album'
    const imgAlt = "Каверы Подземки"
    
    const frontAudio = "https://drive.google.com/uc?export=download&id=1P163m63asoFSrzsk5_QasXb2VBK0jO-p";
    // const imgTzi = "https://drive.google.com/uc?export=download&id=1gsY4lPUU4pJ07s0JwDBeJjUYddkAuSr3"
    return (
      <div className="device device-iphone-x">
          <div className="device-frame">
              <div className="device-content">

                  <div>
                      {/* <span className={classes.navLink}>Сборник за 3 года</span> */}
                      {/* <Link to="/cavers21"  className={classes.navLink21}>2021</Link>
                      <Link to="/cavers22"  className={classes.navLink22}>2022</Link> */}
                      <Link to="/cavers23"  className={classes.navLink23}>Слушаем!</Link>
      
                     {/* <Link to={`/cavers21`} className={classes.navLink21}>Слушаем!</Link> */}
                      {/* <Link to={`/cavers${yearTrib22}`} className={classes.navLink22}>2022</Link>
                      <Link to={`/cavers${yearTrib23}`} className={classes.navLink23}>2023</Link> */}
                      <div className={classes.main}>
                      
                          <div className={classes.article}><p >Кинчеву - 65!</p></div>
                          <div className={classes.article}><img fetchpriority="high" role="presentation"  src={imgUrl} width={100} alt={imgAlt} /></div>
                          {/* <p className={classes.nameAudio}>Медоманы. Время Луны</p> */}
                          <audio controls 
          src={frontAudio} type="audio/mpeg" />
      
                          {/* <div className={classes.article}><img fetchpriority="high" role="presentation"  src={imgUrl2} width={100} alt={imgAlt} /></div> */}
                      </div>
                  </div>
              </div>
          </div>
          <div className="device-stripe"></div>
          <div className="device-header">
              <div className="device-sensors"></div>
          </div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
      </div>
  )
}
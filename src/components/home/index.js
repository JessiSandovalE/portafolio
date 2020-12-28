/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

//Style
import {HomeStyle} from '../../styles/home/style'
import {button, container} from '../../styles/var'
import { FaCheck } from "react-icons/fa";
const Home = ()=> {
  return(
    <div className={HomeStyle}>
      <div className="banner">
      <div className="left">
          <img src="./assets/jessi.png" alt=""/>
        </div>
        <div className={`right`}>
          <p className="hi">Hola!</p>
          <p className="name" data-text="Soy Jessica">Soy Jessica</p>
          <p className ="position">Front-end Developer Jr.</p>
          <p className="info">Amo viajar, compartir en familia y amigos. <br/>Me encantan los retos que me permiten aprender algo nuevo cada día. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde atque esse praesentium ab asperiores quis? Harum provident porro sit debitis nostrum numquam molestiae, dignissimos dicta libero quidem corrupti deserunt voluptatem? </p>
          <div className="links">
              <div className="item">
                Email
                <a href="mailto:jessi.sandoval93@gmail.com" target="_blank">jessi.sandoval@gmail.com</a>
              </div>
              <div className="item">
                Github
                <a href="https://github.com/JessiSandovalE" target="_blank">JessiSandovalE</a>
              </div>
          </div>
          <div className="buttons">
            <div className={`${button} btn`}>Descargar CV</div>
          </div>
        </div>
      </div>
      <div className={`${container} work`}>
        <div className="title">Servicios que puedo ofrecerte</div>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <FaCheck/>
            </div>
            <div className="infoItem">
              <p className="titleCard">Desarrollo Web</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon yellow">
              <FaCheck/>
            </div>
            <div className="infoItem">
              <p className="titleCard">Diseño Responsivo</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon gray">
             <FaCheck/>
            </div>
            <div className="infoItem">
              <p className="titleCard">Freelance</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className={`titleSkills`}>Mis Skills</div>
          <div className="list">
          <li>
            <h5>HTML</h5>
            <span className="bar">
              <span className="html"></span>
            </span>
          </li>
          <li>
            <h5>CSS3</h5>
            <span className="bar">
              <span className="css"></span>
            </span>
          </li>
          <li>
            <h5>JAVASCRIPT</h5>
            <span className="bar">
              <span className="javascript"></span>
            </span>
          </li>
          <li>
            <h5>Angular</h5>
            <span className="bar">
              <span className="angular"></span>
            </span>
          </li>
          <li>
            <h5>React</h5>
            <span className="bar">
              <span className="react"></span>
            </span>
          </li>
          </div>
      </div>
      </div>
      
    </div>
  )

}

export default Home
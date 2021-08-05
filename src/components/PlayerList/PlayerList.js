import React from 'react'

import '../PlayerList/PlayerList.css'
import TeamLogoA_Small from '../../assets/TeamLogoA_Small.svg'
import TeamLogoB_Small from '../../assets/TeamLogoB_Small.svg'
import YellowCard from '../../assets/YellowCard_Small.svg'
import RedCard_Normal from '../../assets/RedCard_Normal.svg'


const PlayerList = () => {
  return (
    <div className="col-12 col-md-6 col-lg-5 mt-5 mt-md-0">
      <div className="row align-items-center mb-4">
        <div className="col text-center">
          <img src={TeamLogoA_Small} className="mx-auto" alt="Team-A logo small" />
        </div>
        <div className="col text-center">
          <p className="Substitutes">Substitutes</p>
        </div>
        <div className="col text-center">
          <img src={TeamLogoB_Small} className="mx-auto" alt="Team-B logo small" />
        </div>
      </div>

      <div className="row">
        <div className="col PlayerList">
          <ul className="list-unstyled text-left">
            <li><a href="/#"> <span className="num"> 18</span> Bizama </a></li>
            <li><a href="/#"> <span className="num"> 27</span> Garcia </a></li>
            <li><a href="/#"> <span className="num"> 11</span> Lassiter </a></li>
            <li><a href="/#"> <span className="num"> 6</span> Zahibo </a></li>
            <li><a href="/#"> <span className="num"> 55</span> Cropper </a></li>
            <li><a href="/#"> <span className="num"> 2</span> Fuenmayor </a></li>
            <li><a href="/#"> <span className="num"> 5</span> Struna </a></li>
            <li><a href="/#"> <span className="num"> 13</span> Ramirez
            <span>
                <img className="rc" src={RedCard_Normal} alt="Yellow Card" />
            </span>
            </a></li>
            <li><a href="/#"> <span className="num"> 10</span> Martinez </a></li>
          </ul>
        </div>

        <div className="col PlayerList">
          <ul className="list-unstyled text-right">
            <li><a href="/#">
              <span className="yc-wrapper">
                <img className="yc" src={YellowCard} alt="Yellow Card" />
                <img src={YellowCard} alt="Yellow Card" />
              </span> Morris <span className="num"> 26</span> </a>
            </li>
            <li><a href="/#">  Alasha <span className="num"> 26</span> </a></li>
            <li><a href="/#">  Morris <span className="num"> 14</span> </a></li>
            <li><a href="/#">  Morris <span className="num"> 13</span> </a></li>
            <li><a href="/#">
              <span className="yc-wrapper">
                <img className="yc" src={YellowCard} alt="Yellow Card" />
              </span> Morris <span className="num"> 21</span> </a>
            </li>
            <li><a href="/#">  Zelaravazn <span className="num"> 10</span> </a></li>
            <li><a href="/#">  Mokhtar <span className="num"> 34</span> </a></li>
            <li><a href="/#">  Cadden <span className="num"> 2</span> </a></li>
            <li><a href="/#">  Hamilton <span className="num"> 17</span> </a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default PlayerList

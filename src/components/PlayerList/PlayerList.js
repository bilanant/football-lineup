import React from 'react'

import '../PlayerList/PlayerList.css'
import TeamLogoA_Small from '../../assets/TeamLogoA_Small.svg'
import TeamLogoB_Small from '../../assets/TeamLogoB_Small.svg'

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
            <li><a href="/#"> <span className="num"> 15</span> Bizama </a></li>
            <li><a href="/#"> <span className="num"> 15</span> Garcia </a></li>
            <li><a href="/#"> <span className="num"> 15</span> Lassiter </a></li>
            <li><a href="/#"> <span className="num"> 15</span> Zahibo </a></li>
            <li><a href="/#"> <span className="num"> 15</span> Cropper </a></li>
            <li><a href="/#"> <span className="num"> 15</span> Fuenmayor </a></li>
            <li><a href="/#"> <span className="num"> 15</span> Struna </a></li>
            <li><a href="/#"> <span className="num"> 15</span> Ramirez </a></li>
            <li><a href="/#"> <span className="num"> 15</span> Martinez </a></li>
          </ul>
        </div>

        <div className="col PlayerList">
          <ul className="list-unstyled text-right">
            <li><a href="/#">  Bizama <span className="num"> 15</span> </a></li>
            <li><a href="/#">  Garcia <span className="num"> 15</span> </a></li>
            <li><a href="/#">  Lassiter <span className="num"> 15</span> </a></li>
            <li><a href="/#">  Zahibo <span className="num"> 15</span> </a></li>
            <li><a href="/#">  Cropper <span className="num"> 15</span> </a></li>
            <li><a href="/#">  Fuenmayor <span className="num"> 15</span> </a></li>
            <li><a href="/#">  Struna <span className="num"> 15</span> </a></li>
            <li><a href="/#">  Ramirez <span className="num"> 15</span> </a></li>
            <li><a href="/#">  Martinez <span className="num"> 15</span> </a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default PlayerList

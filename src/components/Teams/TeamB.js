import React from 'react'

import '../Teams/TeamB.css';
import '../Field/Field.css';
import Player from '../../assets/player.png'

const TeamB = () => {
  return (

    <div className="Team-B ">
      <div className="p-relative h-100">
        <div className="d-flex Team-B-row5">
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Nemeth</span> </div>
        </div>
        <div className="d-flex Team-B-row4">
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Boateng</span> </div>
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Santos</span> </div>
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Etienne Jr.</span> </div>
        </div>
        <div className="d-flex Team-B-row3">
          <div className="col-6 "><img src={Player} alt="Player" /> <br /> <span className="playerName">de Lima. Junior</span> </div>


        </div>
        <div className="d-flex Team-B-row2">
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Valenzuela</span> </div>
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Keita</span> </div>
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Mensah</span> </div>
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Afful</span> </div>
        </div>

        <div className="d-flex Team-B-row1">
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName"></span> </div>
        </div>
      </div>
    </div>
  )
}

export default TeamB

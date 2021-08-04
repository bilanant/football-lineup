import React from 'react'

import '../Teams/TeamA.css';
import '../Field/Field.css';
import Player from '../../assets/player.png'

const TeamA = () => {
  return (
    <div className="Team-A">
      <div className="p-relative h-100">
        <div className="d-flex Team-A-row1">
          <div className="col">
            <img src={Player} alt="Player" />
            <br />
            <span className="playerName">Maric</span>
          </div>
        </div>
        <div className="d-flex Team-A-row2">
          <div className="col">
            <img src={Player} alt="Player" />
            <br />
            <span className="playerName">Valentin</span>
          </div>
          <div className="col">
            <img src={Player} alt="Player" />
            <br />
            <span className="playerName">Cabera</span>
          </div>
          <div className="col">
            <img src={Player} alt="Player" />
            <br />
            <span className="playerName">Figueroa</span>
          </div>
          <div className="col">
            <img src={Player} alt="Player" />
            <br />
            <span className="playerName">Junqua</span>
          </div>
        </div>
        <div className="d-flex Team-A-row3">
          <div className="col">
            <img src={Player} alt="Player" />
            <br />
            <span className="playerName">Ceren</span>
          </div>
          <div className="col">
            <img src={Player} alt="Player" />
            <br />
            <span className="playerName">Vera</span>
          </div>
          <div className="col">
            <img src={Player} alt="Player" />
            <br />
            <span className="playerName">Rodriguez</span>
          </div>
        </div>
        <div className="d-flex Team-A-row4">
          <div className="col">
            <img src={Player} alt="Player" />
            <br />
            <span className="playerName">Hensen</span>
          </div>
          <div className="col">
            <img src={Player} alt="Player" />
            <br />
            <span className="playerName">Manotas</span>
          </div>
          <div className="col">
            <img src={Player} alt="Player" />
            <br />
            <span className="playerName">Quintero</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamA

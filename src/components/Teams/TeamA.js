import React from 'react'
import { connect } from 'react-redux';

import '../Teams/TeamA.css';
import '../Field/Field.css';
import Player from '../../assets/player.png'
import TeamLogoA_Small from '../../assets/TeamLogoA_Small.svg'
import YellowCardField_small from '../../assets/YellowCardField_small.png'

const TeamA = (props) => {
  console.log(`props.TeamA_Players***`, props.TeamA_Players)
  return (
    <div className="Team-A">
      <img className="field-float-logo-team-a" src={TeamLogoA_Small} alt="TeamLogoA_Small" />
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
            <img className="floating-field-card" src={YellowCardField_small} alt="Yellow Card Field" />
            <br />
            <span className="playerName">Vera</span>
          </div>
          <div className="col">
            <img src={Player} alt="Player" />
            <img className="floating-field-card" src={YellowCardField_small} alt="Yellow Card Field" />
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

const mapStateToProps = (state) => {
  return {
    TeamA_Players: state.allPlayers.players.Formation?.Formations.HomeTeamFormation.Row,
  }
}

export default connect(mapStateToProps)(TeamA)

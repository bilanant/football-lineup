import React from 'react'
import { connect } from 'react-redux';

import '../Teams/TeamHome.css';
import '../Field/Field.css';
import Player from '../../assets/player.png'
import TeamLogoA_Small from '../../assets/TeamLogoA_Small.svg'
import YellowCardField_small from '../../assets/YellowCardField_small.png'
import RedCardField_small from '../../assets/RedCardField_small.png'

const TeamHome = (props) => {
  // console.log(`props.TeamHome_Players***`, props.TeamHome_Players)
  // console.log(`props.TeamHome_Formation***`, props.TeamHome_Formation)
  // const formation = props.TeamHome_Formation?.split('-')
  // console.log(`formation***`, formation)
  // const numberOfRows = formation?.length + 1
  // console.log(`numberOfRows***`, numberOfRows)

  const renderCard = ({RedCards, YellowCards}) => {
    // console.log(`card***`, parseInt(RedCards), parseInt(YellowCards))
    if (parseInt(RedCards)) {
      return <img className="fb-card" src={RedCardField_small} alt="Card issued" />
    } else if (parseInt(YellowCards)) {
      return <img className="fb-card" src={YellowCardField_small} alt="Card issued" />
    }
  }

  const renderColumn = (row) => {
    // console.log(`row.Player***`, Array.isArray(row.Player))
    if (Array.isArray(row.Player)) {
      return row.Player.map((column, i) => {
        // console.log(`column***`, column._attributes);
        return (
          <span key={i} className={`col-${i}`}>
            <img src={Player} alt="Player" />
            {renderCard(column._attributes)}
            <span>{column._attributes.Name}</span>
          </span>
        )
      })
    } else {
      return (
        <span className="col-0">
            <img src={Player} alt="Player" />
        </span>
      ) 
    }
    
  }

  const renderTeamHome = () => {
    if (props.TeamHome_Players) {
      return props.TeamHome_Players.map((row, i) => {
        // console.log(`row***`, row);
        return (<div key={i} className={`row-${i}`}>
          {renderColumn(row)}
        </div>)
      })
    }
  }
  

  return (
    <div className="Team-A">
      <img className="field-float-logo-team-a" src={TeamLogoA_Small} alt="TeamLogoA_Small" />
      {renderTeamHome()}
      {/* <div className="p-relative h-100">
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
      </div> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    TeamHome_Players: state.allPlayers.players.Formation?.Formations.HomeTeamFormation.Row,
    TeamHome_Formation: state.allPlayers.players.Formation?.Formations.HomeTeamFormation._attributes.Name,
  }
}

export default connect(mapStateToProps)(TeamHome)

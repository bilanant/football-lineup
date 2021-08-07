import React from 'react'
import { connect } from 'react-redux';

import '../Teams/TeamHome.css';
import '../Field/Field.css';
import Player from '../../assets/player.png'
import YellowCardField_small from '../../assets/YellowCardField_small.png'
import RedCardField_small from '../../assets/RedCardField_small.png'

const TeamHome = (props) => {

  const renderCard = ({ RedCards, YellowCards }) => {
    if (parseInt(RedCards)) {
      return <img src={RedCardField_small} alt="Card issued" />
    } else if (parseInt(YellowCards)) {
      return <img src={YellowCardField_small} alt="Card issued" />
    }
  }

  const renderColumn = (row) => {
    if (Array.isArray(row.Player)) {
      return row.Player.map((column, i) => {
        return (
          <div key={column._attributes.Name} className="col text-light text-center">
            <div className="player-icon">
              <img src={Player} alt="Player" />
              <span>
                {renderCard(column._attributes)}
              </span>
            </div>
            <p className="mb-2">{column._attributes.Name}</p>
          </div>
        )
      })
    } else {
      const { Name } = row.Player._attributes
      return (
        <div className="col text-light text-center">
          <div className="player-icon">
            <img src={Player} alt="Player" />
            <span>
              {renderCard(row.Player._attributes)}
            </span>
          </div>
          <p className="mb-2">{Name}</p>
        </div>
      )
    }
  }

  const renderTeamHome = () => {
    if (props.TeamHome_Players) {
      return props.TeamHome_Players.map((row, i) => {
        return (<div key={i} className={`row mb-3 justify-content-between row-${i}`}>
          {renderColumn(row)}
        </div>)
      })
    }
  }

  return (
    <div className="Team-A">
      {renderTeamHome()}
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

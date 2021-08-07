import React from 'react'
import { connect } from 'react-redux';

import Player from '../../assets/player.png'
import YellowCardField_small from '../../assets/YellowCardField_small.png'
import RedCardField_small from '../../assets/RedCardField_small.png'

const TeamAway = (props) => {

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

  const renderTeamAway = () => {
    if (props.TeamAway_Players) {
      return props.TeamAway_Players.map((row, i) => {
        return (<div key={i} className={`row mb-3 mt-2 justify-content-between row-${i}`}>
          {renderColumn(row)}
        </div>)
      }).reverse()
    }
  }

  return (

    <div className="Team-B">
      {renderTeamAway()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    TeamAway_Players: state.allPlayers.players.Formation?.Formations.AwayTeamFormation.Row,
    TeamAway_Formation: state.allPlayers.players.Formation?.Formations.AwayTeamFormation._attributes.Name,
  }
}

export default connect(mapStateToProps)(TeamAway)


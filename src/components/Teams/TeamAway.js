import React from 'react'
import { connect } from 'react-redux';

import '../Teams/TeamAway.css';
import '../Field/Field.css';
import Player from '../../assets/player.png'
import TeamLogoB_Small from '../../assets/TeamLogoB_Small.svg'
import YellowCardField_small from '../../assets/YellowCardField_small.png'
import RedCardField_small from '../../assets/RedCardField_small.png'

const TeamAway = (props) => {
  // console.log(`props.TeamAway_Players***`, props.TeamAway_Players)

  const renderCard = ({ RedCards, YellowCards }) => {
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

  const renderTeamAway = () => {
    if (props.TeamAway_Players) {
      return props.TeamAway_Players.map((row, i) => {
        // console.log(`row***`, row);
        return (<div key={i} className={`row-${i}`}>
          {renderColumn(row)}
        </div>)
      })
    }
  }

  return (

    <div className="Team-B">
      <img className="field-float-logo-team-b" src={TeamLogoB_Small} alt="TeamLogoB_Small" />
      {renderTeamAway()}
      {/* <div className="p-relative h-100">
        <div className="d-flex Team-B-row5">
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Nemeth</span> </div>
        </div>
        <div className="d-flex Team-B-row4">
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Boateng</span> </div>
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Santos</span> </div>
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Etienne Jr.</span> </div>
        </div>
        <div className="d-flex Team-B-row3">
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">de Lima. Junior</span> </div>
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Nagbe</span> </div>
        </div>
        <div className="d-flex Team-B-row2">
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Valenzuela</span> </div>
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Keita</span> </div>
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Mensah</span> </div>
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Afful</span> </div>
        </div>

        <div className="d-flex Team-B-row1">
          <div className="col"><img src={Player} alt="Player" /> <br /> <span className="playerName">Room</span> </div>
        </div> 
      </div>*/}
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     TeamB_Sub: state.allPlayers.players.Formation?.Substitutes.AwayTeam,
//   }
// }

const mapStateToProps = (state) => {
  return {
    TeamAway_Players: state.allPlayers.players.Formation?.Formations.AwayTeamFormation.Row,
    TeamAway_Formation: state.allPlayers.players.Formation?.Formations.AwayTeamFormation._attributes.Name,
  }
}

export default connect(mapStateToProps)(TeamAway)


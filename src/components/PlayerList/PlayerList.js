import React from 'react'
import { connect } from 'react-redux'

import '../PlayerList/PlayerList.css'
import TeamLogoHome_Small from '../../assets/TeamLogoHome_Small.svg'
import TeamLogoAway_Small from '../../assets/TeamLogoAway_Small.svg'
import YellowCard from '../../assets/YellowCard_Small.svg'
import RedCard_Normal from '../../assets/RedCard_Normal.svg'

const PlayerList = ({ TeamHome_Subs }) => {
  const homeSubs = TeamHome_Subs?.Substitutes.HomeTeam.Player
  const awaySubs = TeamHome_Subs?.Substitutes.AwayTeam.Player

  const renderCard = ({ RedCards, YellowCards }) => {
    if (parseInt(RedCards)) {
      return <img className="rc" src={RedCard_Normal} alt="Card issued" />
    } else if (parseInt(YellowCards)) {
      for (let i = 0; i < YellowCards; i++) {
        return <img src={YellowCard} alt="Card issued" />
      }
    }
  }

  const renderHomeSubstitutes = () => {
    return homeSubs?.map(({ _attributes }) => {
      return (
        <div key={_attributes.Number} className="row">
          <div className="col-1">{_attributes.Number}</div>
          <div className="col-auto pr-2">{_attributes.Name}</div>
          <div className="col-auto">{renderCard(_attributes)}</div>
        </div>
      )
    })
  }

  const renderAwaySubstitutes = () => {
    return awaySubs?.map(({ _attributes }) => {
      return (
        <div key={_attributes.Number} className="row justify-content-end">
          <div className="col-auto">{renderCard(_attributes)}</div>
          <div className="col-auto pr-2">{_attributes.Name}</div>
          <div className="col-1">{_attributes.Number}</div>
        </div>
      )
    })
  }

  return (
    <div className="col-lg-6 text-light">
      {/* Substitutes Heading - Start */}
      <div className="row align-items-center">
        <div className="col-4 text-light">
          <img src={TeamLogoHome_Small} alt="Team-Home logo small" />
        </div>
        <div className="col-4 text-center text-light custom-font">Substitutes</div>
        <div className="col-4 text-right">
          <img src={TeamLogoAway_Small} alt="Team-Away logo small" />
        </div>
      </div>
      {/* Substitutes Heading - End */}

      <div className="row mt-4">
        <div className="col-6 text-light">
          {renderHomeSubstitutes()}
        </div>
        {/* <div className="col-4 text-light"></div> */}
        <div className="col-6 text-light text-right">
          {renderAwaySubstitutes()}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    TeamHome_Subs: state.allPlayers.players.Formation,
  }
}

export default connect(mapStateToProps)(PlayerList)

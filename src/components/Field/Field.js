import React from 'react'

import TeamLogoHome_Small from '../../assets/TeamLogoHome_Small.svg'
import TeamLogoAway_Small from '../../assets/TeamLogoAway_Small.svg'
import Grass from '../../assets/Grass1.png'
import TeamHome from '../Teams/TeamHome'
import TeamAway from '../Teams/TeamAway'

const Field = () => {
  return (
    <div className="col-lg-6 field-main">
      <img src={Grass} className="w-100" alt="Field" />
      <span className="team-left-top">
        <img src={TeamLogoHome_Small} alt="TeamLogoHome_Small" />
      </span>
      <span className="team-bottom-right">
        <img src={TeamLogoAway_Small} alt="TeamLogoAway_Small" />
      </span>
      <TeamHome />
      <TeamAway />
    </div>
  )
}

export default Field

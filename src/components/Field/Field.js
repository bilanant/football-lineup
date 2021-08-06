import React from 'react'

import Grass from '../../assets/Grass1.png'
import TeamHome from '../Teams/TeamHome'
import TeamAway from '../Teams/TeamAway'

const Field = () => {
  return (
    <div className="col-12 col-md-6 col-lg-5">
      <div className="pitchwrap p-relative">
        <img src={Grass} className="w-100" alt="Field" />
        <TeamHome />
        <TeamAway />
      </div>
    </div>
  )
}

export default Field

import React from 'react'

import Grass from '../../assets/Grass1.png';
import TeamA from '../Teams/TeamA'
import TeamB from '../Teams/TeamB'

const Field = () => {
  return (
    <div className="col-12 col-md-6 col-lg-5">
      <div className="pitchwrap p-relative">
        <img src={Grass} className="w-100" alt="Field" />
        <div className="p-absolute d-flex">
          <div className="col d-flex text-center w-100 d-flex align-items-start flex-column">
            <TeamA />
            <TeamB />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Field

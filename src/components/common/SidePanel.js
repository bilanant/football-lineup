import React from 'react'

import Logo from '../../assets/logo.png'
import TeamLogoHome_Big from '../../assets/TeamLogoHome_Big.svg'
import TeamLogoAway_Big from '../../assets/TeamLogoAway_Big.svg'

const SidePanel = () => {
  return (
    <div className="col-lg-3 d-none d-lg-block">
      <div className="col-lg-3 mb-5 pb-5">
        <img src={Logo} alt="logo" />
      </div>
      <div className="col-lg-3 mb-5 pb-5">
        <img src={TeamLogoHome_Big} alt="Team Logo A" />
      </div>
      <div className="col-lg-3">
        <img src={TeamLogoAway_Big} alt="Team Logo Away" />
      </div>
    </div>
  )
}

export default SidePanel

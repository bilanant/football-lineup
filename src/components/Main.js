import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import * as actions from '../actions';
import Header from './Header/Header'
import TeamLogoA_Big from '../assets/TeamLogoA_Big.svg'
import TeamLogoB_Big from '../assets/TeamLogoB_Big.svg'
import Field from './Field/Field'
import PlayerList from './PlayerList/PlayerList'

const Main = (props) => {
  const { page } = useParams();

  useEffect(() => {
    props.getPlayerList(page);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <div className="row mb-5 mt-3">
        <div className="col-sm-2 d-none d-lg-flex text-center align-items-start flex-column">
          <img src={TeamLogoA_Big} className="mb-auto mx-auto" alt="Team Logo A" />
          <img src={TeamLogoB_Big} className="mx-auto" alt="Team Logo B" />
        </div>
        <Field />
        <PlayerList />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    playerData: state.players
  }
}

export default connect(mapStateToProps, actions)(Main)

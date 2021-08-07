import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import * as actions from '../actions'
import SidePanel from './common/SidePanel'
import Field from './Field/Field'
import PlayerList from './PlayerList/PlayerList'
import Header from './common/Header'

const Main = (props) => {
  const { page } = useParams();

  useEffect(() => {
    props.getPlayerList(page);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row align-items-start">
      <SidePanel />

      <div className="col-lg-9">
        <div className="row">
          <Header />
          <Field />
          <PlayerList />
        </div>
      </div>
    </div>
  )
}

export default connect(null, actions)(Main)

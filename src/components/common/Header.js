import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import './Header.css'

const Header = ({ dateTime, venue }) => {
  return (
    <div className="col-12 d-none d-lg-block text-center text-light">
      <h1 className="title">MATCH SUMMARY</h1>
      <p className="mb-5">
        <span className="mr-3">{moment(dateTime).format("D/M/YYYY h:mm A")}</span>
        <span>{venue}</span>
      </p>
    </div>
  )
};


const mapStateToProps = (state) => {
  return {
    dateTime: state.allPlayers.players.Formation?.Timestamp._text,
    venue: state.allPlayers.players.Formation?.Venue._text,
  }
}

export default connect(mapStateToProps)(Header)

import React from 'react'

import Logo from '../../assets/logo.png'
import '../Header/Header.css'

const Header = () => {
  return (
    <div className="row d-none d-md-flex mb-5 mt-3">
      <div className="col-sm-3">
        <img src={Logo} alt="logo" />
      </div>
      <div className="col-sm-9">
        <h2 className="title">MATCH SUMMARY</h2>
      </div>
    </div>
  );
};

export default Header

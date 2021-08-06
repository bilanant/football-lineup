import React from 'react'
import { Link } from "react-router-dom";

import '../App.css'

const Welcome = () => {
  return (
    <div>
      <ul>
        <li>
          <Link className="custom-link" to="/match/1">Match 1</Link>
        </li>
        <li>
          <Link className="custom-link" to="/match/2">Match 2</Link>
        </li>
        <li>
          <Link className="custom-link" to="/match/3">Match 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default Welcome

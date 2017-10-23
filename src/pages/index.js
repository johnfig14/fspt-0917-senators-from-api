import React from 'react'

import Senators from './Senators'

export const HomePage = () => (
  <div>
    <h1>Homepage</h1>
  </div>
)


export const SenatorDetails = ({ match }) => (
  <div>
    <h1>Senator {match.params.id}</h1>
  </div>
)


export {
  Senators
}
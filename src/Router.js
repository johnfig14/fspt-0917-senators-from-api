import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import {
  HomePage,
  Senators,
  SenatorDetails,

} from './pages'

export default () => (
  <section>
    <header>
      Header
    </header>
    <article>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/senators/:id" component={SenatorDetails} />
          <Route path="/senators" component={Senators} />
        </Switch>
      </Router>
    </article>
    <footer>
      <a href="http://heliotraining.com">Helio Training</a>
    </footer>
  </section>
)
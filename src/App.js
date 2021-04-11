import LandingPage from './components/LandingPage';
import React from 'react';
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/users/:id">
          <UserDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


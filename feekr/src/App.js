import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <div>

      <Switch>
        <Route path="/home" component={Home} />
        <Redirect from="/" to="/home" exact />
        <Route path="/notfound" component={() => <div>404</div>} />
      </Switch>

    </div>
  );
}

export default App;

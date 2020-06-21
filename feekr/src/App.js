import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Dujia from './pages/Dujia';
import Gonlue from './pages/Gonlue'
import 'antd/dist/antd.css';
function App() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/dujia" component={Dujia} />
        <Route path="/gonlue" component={Gonlue} />
        <Route path="/notfound" component={() => <div>404</div>} />
        <Redirect from="/" to="/home" exact />
        <Redirect to="/notfound" />
      </Switch>

    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Dujia from './pages/Dujia';
import Gonlue from './pages/Gonlue'
import Login from './pages/Login';
import Reg from './pages/Reg';
import Forget from './pages/Forget';
import User from './pages/User';
import 'antd/dist/antd.css';

function App() {
  return (
    <div>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/dujia" component={Dujia} />
        <Route path="/gonlue" component={Gonlue} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
        <Route path="/forget" component={Forget} />
        <Route path="/user/:id" component={User} />
        <Redirect from="/" to="/home" exact />
        <Route path="/notfound" component={() => <div>404</div>} />
        <Redirect to="/notfound" />
      </Switch>
    </div >
  );
}
App = withRouter(App)
export default App;

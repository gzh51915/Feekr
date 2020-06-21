import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Dujia from './pages/Dujia';
import Gonlue from './pages/Gonlue'
import Login from './pages/Login';
import Reg from './pages/Reg';
import Forget from './pages/Forget';
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
        <Redirect from="/" to="/home" exact />
        <Route path="/notfound" component={() => <div>404</div>} />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  );
  App = withRouter(App)
  export default App;
}
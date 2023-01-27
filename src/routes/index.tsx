
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Homepage}  from '../pages';

const Routers = () => {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage}>
            
            </Route>
          </Switch>
        </Router>
      );
}

export default Routers;
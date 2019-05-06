import React from 'react';
import { Switch, Route } from 'react-router';
import Routes from './routes';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Switch>
          {Routes.map((item, index) => <Route path={item.path} exact={item.exact} key={index} component={item.component} />)}
        </Switch>
      </div>
    )
  }
}


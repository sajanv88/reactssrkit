import React from 'react';
import { Switch, Route } from 'react-router';
import Routes from './routes';
import { Container } from 'react-bootstrap';
import HeaderComponent from './components/header/header.component';
import './app.scss';
export default class App extends React.PureComponent {
  render() {
    return (
      <div className="app-container">
        <HeaderComponent />
        <Container fluid="true">
          <Switch>
            {Routes.map((item, index) => <Route path={item.path} exact={item.exact} key={index} component={item.component} />)}
          </Switch>
        </Container>
      </div>
    )
  }
}


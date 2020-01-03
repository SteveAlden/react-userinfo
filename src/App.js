import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import UserList from './components/UserList';
import Container from '@material-ui/core/Container';
import AppHeader from './components/layout/Header';
import AppHeaderB from './components/layout/HeaderB';
import DisplayUser from './components/DisplayUser';
import DisplayUserB from './components/DisplayUserB';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.setState({ users: res.data }));
  }

  render() {
    return (
      <div>
        <AppHeaderB />
        <Router>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <React.Fragment>
                  <Container>
                    <UserList users={this.state.users} />
                  </Container>
                </React.Fragment>
              )}
            />
            <Route
              exact
              path={`/user/:id`}
              render={props => <DisplayUserB {...props} />}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

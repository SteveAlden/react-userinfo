import React, { Component } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Typography,
  Container,
  ButtonBase
} from '@material-ui/core';

class DisplayUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    };
  }

  //   userInfo = () => {
  //     return this.props.state.userData;
  //   };
  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
      )
      .then(res => this.setState({ userData: res.data }));
  }

  render() {
    const userInfo = this.state.userData;
    console.log('hello');
    return (
      <div>
        <Container>
          <Card style={{ margin: '20px 2px 20px 2px' }} elevation={4}>
            <ButtonBase>
              <CardContent>
                <Typography color='textPrimary'>
                  Name : {userInfo.name}
                  <br />
                  Email : {userInfo.email}
                </Typography>
              </CardContent>
            </ButtonBase>
          </Card>
        </Container>
      </div>
    );
  }
}

export default DisplayUser;

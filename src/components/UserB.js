import React, { Component } from 'react';

import { ButtonBase } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Image, Media, Row } from 'react-bootstrap';
// function dispUser(name) {
//     return(
//     <DisplayUser user={user}/>)
//     console.log(name));
// };

class UserB extends Component {
  // state = {
  //     elevation: '5',
  // }

  // toggleRaised = () => this.setState({raised:!this.state.raised});

  // onMouseOver= () => {this.setState({elevation: '4'})};
  // onMouseOut = () => {this.setState({elevetion:'1'})};

  render() {
    const name = this.props.user.name;
    return (
      // <ListItem role={undefined} dense button>
      //     <ListItemText primary={name}/>
      // </ListItem>
      // <Link to={'/user/1'}>

      <Card
        elevation={4}
        hoverStyle={{ background: 'black' }}
        // onMouseOver = {this.toggleRaised}
        // onMouseOut = {this.toggleRaised}
        // raised={this.toggleRaised}
        style={{
          margin: '20px 2px 20px 2px',
          backgroundColor: grey
        }}
      >
        <Card.Body>
          <Link
            style={{ textDecoration: 'none' }}
            to={`/user/${this.props.user.id}`}
          >
            <Card.Text>{name}</Card.Text>
          </Link>
        </Card.Body>
      </Card>
      // </Link>
    );
  }
}

export default UserB;

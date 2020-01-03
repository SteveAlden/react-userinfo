import React, { Component } from 'react';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { ButtonBase } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';

// function dispUser(name) {
//     return(
//     <DisplayUser user={user}/>)
//     console.log(name));
// };

class User extends Component {
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
        // onMouseOver = {this.toggleRaised}
        // onMouseOut = {this.toggleRaised}
        // raised={this.toggleRaised}
        style={{
          margin: '20px 2px 20px 2px',
          raised: true,
          backgroundColor: grey
        }}
      >
        <CardActionArea>
          {/* <ButtonBase> */}
          {/* <ButtonBase> */}
          <CardContent>
            <Typography color='textSecondary'>
              <Link to={`/user/${this.props.user.id}`}>{name}</Link>
            </Typography>
          </CardContent>
          {/* </ButtonBase> */}
        </CardActionArea>
      </Card>
      // </Link>
    );
  }
}

export default User;

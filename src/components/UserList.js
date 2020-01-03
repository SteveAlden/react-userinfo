import React, { Component } from 'react';
import User from './User';
import UserB from './UserB';

import DisplayUser from './DisplayUser';

class UserList extends Component {
  dispUser = user => {
    return <DisplayUser user={user} />;
  };

  render() {
    return this.props.users.map(user => (
      // <Link onClick={() => console.log(user.name)}>

      <UserB user={user} />
    ));
  }
}

export default UserList;

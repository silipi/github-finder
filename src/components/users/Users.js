import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

import PropTypes from 'prop-types';

const Users = (props) => {
  if (props.loading) {

    return (
      <Spinner />
    )

  } else {

    return (
      <div style={userStyle}>
        {props.users.map(user => (
          <div key={user.id} style={{display: 'flex', justifyContent: 'center'}}>
            <UserItem  login={user.login} avatar_url={user.avatar_url} html_url={user.html_url} />
          </div>
        ))}
      </div>
    )
    
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users

import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';
import User from './User';

const Users = ({ users, addUser }) => {
  const onUserCreate = () => {
    const id = `${Date.now()}`;
    addUser(id);
  };

  return (
    <div className="users">
      <button className="users__create-btn" onClick={onUserCreate}>
        Create user
      </button>
      <ul className="users__list">
        {users.map(user => (
          <User key={user} userId={user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: state.usersReducer.usersList,
  };
};

const mapDispatch = {
  addUser: usersActions.addUser,
};

export default connect(mapState, mapDispatch)(Users);

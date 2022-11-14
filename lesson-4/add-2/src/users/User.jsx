import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

const User = ({ userId, deleteUser }) => {
  return (
    <li className="users__list-item">
      <span>{`User # ${userId}`}</span>
      <button className="users__delete-btn" onClick={() => deleteUser(userId)}>
        +
      </button>
    </li>
  );
};

const mapState = (state, props) => {
  return {
    userId: props.userId,
  };
};

const mapDispatch = {
  deleteUser: usersActions.deleteUser,
};

export default connect(mapState, mapDispatch)(User);

import React from 'react';
import { userContext } from './user-context';

// UserMenu

class UserMenu extends React.Component {
  // componentDidMount() {
  //   console.log(this.context);
  // }

  render() {
    return (
      <div className="menu" {...this.props}>
        <span className="menu__greeting">{`Hello, ${this.context.firstName} ${this.context.lastName}`}</span>
        <img
          alt="User Avatar"
          src={this.context.baseURL}
          className="menu__avatar"
        />
      </div>
    );
  }
}

/*
class ThemedButton extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
        className="btn"
      />
    );
  }
}
*/

UserMenu.contextType = userContext;

export default UserMenu;

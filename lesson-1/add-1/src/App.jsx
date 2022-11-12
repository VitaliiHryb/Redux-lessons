import React from 'react';
import UserMenu from './UserMenu';
import { userData, userContext } from './user-context';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <header className="header">
          <userContext.Provider value={userData}>
            <UserMenu />
          </userContext.Provider>
        </header>
      </div>
    );
  }
}

/*
class App extends React.Component {
  state = {
    theme: themes.light,
  };

  toggleTheme = () => {
    const newTheme =
      this.state.theme === themes.dark ? themes.light : themes.dark;

    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>

        <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
      </div>
    );
  }
}
*/

export default App;

/*
<div class="page">
  <!-- Header -->
  <header class="header">
    <!-- UserMenu -->
    <div class="menu">
      <span class="menu__greeting">Hello, Nikola Tesla</span>
      <img
        alt="User Avatar"
        src="https://avatars3.githubusercontent.com/u10001"
        class="menu__avatar"
      />
    </div>
  </header>
</div>
*/

import React from 'react';

import { ThemeContext } from 'styled-components';

import SettingsPage from '../screens/SettingsPage/index';

class ClassSettingsPageContainer extends React.Component {
  onChangeTheme = e => this.context.setTheme(e.target.value);

  render() {
    return (
      <div>
        <SettingsPage
          theme={this.context.theme}
          handleChangeTheme={this.onChangeTheme}
        />
      </div>
    );
  }
}
ClassSettingsPageContainer.contextType = ThemeContext;
export default ClassSettingsPageContainer;

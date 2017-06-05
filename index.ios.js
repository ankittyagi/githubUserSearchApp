/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry} from 'react-native';


import App from './app/GitHub_UserSearch';

class GitHub_UserSearch extends Component {
  render() {
    return (
      <App></App>
    );
  }
}

AppRegistry.registerComponent('GitHub_UserSearch', () => GitHub_UserSearch);

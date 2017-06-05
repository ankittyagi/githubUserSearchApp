import React, {Component} from 'react';
import {View, ListView, StyleSheet} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

export default class SpinnerComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Spinner visible={true} textContent={"Fetching data..."} textStyle={{color: '#FFF'}} />
    );
  }
}
'use strict'

import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ScrollList from './ScrollList.js';
import Display from 'react-native-display';

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {enable: true};
  }

  toggleDisplay() {
    let toggle = !this.state.enable;
    this.setState({enable: toggle});
  }
  render() {
    return (
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'black',
  },
  popup: {
    position: 'absolute',
    justifyContent: 'center',
    height: 450,
    width: 270,
    top: 50,
    bottom: 200,
    right: 50,
  },
});

module.exports = Buttons

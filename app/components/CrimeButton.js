'use strict'
import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
class CrimeButton extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    let crimeName = this.props.text;
    return (
        <TouchableHighlight
          style = {styles.crimeEntry}
          underlayColor = 'white'
          >
          <Text>{crimeName}</Text>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  crimeEntry: {
    justifyContent: 'center',
    height: 100,
    width: 150,
    left: 110,
    backgroundColor: 'white',
    borderColor: 'black'
  }
});

module.exports = CrimeButton

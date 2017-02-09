//@ flow

'use strict'
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class ViewContainer extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})
module.exports = ViewContainer

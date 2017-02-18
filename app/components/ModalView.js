'use strict'
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class ModalView extends Component {
  render() {
    return (
      <View style={styles.modalView}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    top: 150,
    left: 80,
    right: 80,
    bottom: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})
module.exports = ModalView

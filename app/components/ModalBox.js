'use strict'

import React, { Component } from 'react';
import ModalView from './ModalView.js';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';


class ModalBox extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <ModalView style={styles.modal}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={styles.modal}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </ModalView>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 200,
    left: 100,
    right: 100,
    bottom: 200,
    alignItems: 'center',

  }
})
module.exports = ModalBox

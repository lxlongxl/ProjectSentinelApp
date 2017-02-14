'use strict'

import React, {Component} from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import ViewContainer from './ViewContainer.js';

class ModalExample extends Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <ViewContainer>
        <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed")}}
        >
        <View style={{marginTop:22}}>
          <View>
            <Text>Hello World!</Text>
              <TouchableHighlight onPress={() => {
                this.setModalVisible(this.state.modalVisible)
              }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight opPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </ViewContainer>
    )
  }
}
module.exports = ModalExample

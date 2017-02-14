// @flow

'use strict'

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import ViewContainer from './ViewContainer.js'
import ModalExample from './ModalExample.js';



class Map extends Component {
  constructor(){
    super();
    this.state = {
      initialRegion : {
        latitude:	47.2446,
        longitude:	-122.4376,
        latitudeDelta:0.0222,
        longitudeDelta:0.0501
      }
    };
  }

  render() {
    return (
      <ViewContainer>
        <MapView
           style={styles.map}
          region = {this.state.initialRegion}
          />
        <ModalExample/>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})
module.exports = Map

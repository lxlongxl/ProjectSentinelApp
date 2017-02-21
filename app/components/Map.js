// @flow

'use strict'

import React, {Component} from 'react';
import { StyleSheet, View, ListView, AsyncStorage } from 'react-native';
import MapView from 'react-native-maps';
import ViewContainer from './ViewContainer.js';
import ScrollList from './ScrollList.js';
const baseUrl = 'http://sentinelweb.9qqamtpp2r.us-east-1.elasticbeanstalk.com/getCrimeData.json';
const crimeData = {
  simpleAssaultCrimes: [],
  
};

class Map extends Component {
  constructor(){
    super();
    this.state = {
      initialRegion : {
        latitude:	47.2446,
        longitude:	-122.4376,
        latitudeDelta:0.0222,
        longitudeDelta:0.0501
      },
      crimeData : crimeData,
    };
  }

  componentWillMount() {
    fetch(baseUrl)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.state.crimeData.simpleAssaultCrimes = responseJson.simpleAssaultCrimes;
      console.log(this.state.crimeData);
    }).catch(function(error) {
    })
    .done();
  }

  async

  render() {
    return (
      <ViewContainer>
      <ViewContainer>
        <MapView
           style={styles.map}
          region = {this.state.initialRegion}
          />
      </ViewContainer>
      <View>
        <ScrollList/>
      </View>
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
  },
  popup: {
    height: 100,
    width: 100,
    top: 1,
    bottom: 200,
    borderWidth: 2,
    padding: 5
  }
})
module.exports = Map

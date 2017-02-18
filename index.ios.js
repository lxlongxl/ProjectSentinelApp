/**
* Project Sentinel Crime Visualization Application
* https://github.com/lxlongxl/ProjectSentinelApp
* @flow
*/

import React, { Component } from 'react';
import Map from './app/components/Map';
import ViewContainer from './app/components/ViewContainer';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { AppRegistry, StyleSheet, Text, View, Modal, TouchableHighlight, ListView } from 'react-native';
const baseUrl = 'http://custom-env.cvpedt9356.us-east-1.elasticbeanstalk.com/getCrimeData.json';


export default class CrimeApp extends Component {
  constructor() {
    super();
    this.state = {
      crimeData: [],
    }
  }

  componentWillMount() {
    fetch(baseUrl)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({crimeData: responseJson.crimePayload})
    }).catch(function(error) {
    })
    .done();

  }

  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: 64}}>
          <Scene key='home' component={Map} title='Project Sentinel' initial={true} />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CrimeApp', () => CrimeApp);

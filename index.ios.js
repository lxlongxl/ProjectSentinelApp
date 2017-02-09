/**
 * Project Sentinel Crime Visualization Application
 * https://github.com/lxlongxl/ProjectSentinelApp
 * @flow
 */

import React, { Component } from 'react';
import Map from './app/components/Map';
import ViewContainer from './app/components/ViewContainer';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class CrimeApp extends Component {
  render() {
    return (
      <ViewContainer>
        <Map/>
        </ViewContainer>
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

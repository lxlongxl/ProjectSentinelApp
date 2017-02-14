/**
* Project Sentinel Crime Visualization Application
* https://github.com/lxlongxl/ProjectSentinelApp
* @flow
*/

import React, { Component } from 'react';
import Map from './app/components/Map';
import ViewContainer from './app/components/ViewContainer';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
const Realm = require('realm');
const baseUrl = 'http://custom-env.cvpedt9356.us-east-1.elasticbeanstalk.com/getCrimeData.json';
const CoordinatesSchema = {
  name: 'Coordinates',
  properties: {
    latitude: 'float',
    longitude: 'float',
  }
}
const CrimeEntrySchema = {
  name: 'CrimeEntry',
  properties: {
    incident_number: 'int',
    crime: 'string',
    date: 'date',
    intersection: {type: 'list', objectType: 'Coordinates'},
    intersection_address: 'string',
    intersection_city: 'string',
    intersection_state: 'string',
    time: 'string',
  }
}

export default class CrimeApp extends Component {
  constructor() {
    super();
    this.state = {
      crimeData: []
    }
  }

  componentWillMount() {
    fetch(baseUrl)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({crimeData: responseJson.crimePayload})
    }).catch(function(error) {
      if (error) {
        console.log(error);
      }
    })
    .done();
  }

  render() {
    // let realm = new Realm({schema: [CrimeEntrySchema, CoordinatesSchema]})
    // for (var i = 0; i < this.state.crimeData.length; i ++) {
    //   var crimeEntry = this.state.crimeData[i];
    //   realm.write(() => {
    //     realm.create('CrimeEntry', {
    //       incident_number: crimeEntry.incident_number,
    //       crime: crimeEntry.crime,
    //       date: crimeEntry.date,
    //       intersection: crimeEntry.intersection,
    //       intersection_address: crimeEntry.intersection_address,
    //       intersection_city: crimeEntry.intersection_city,
    //       intersection_state: crimeEntry.intersection_state,
    //       time: crimeEntry.time,
    //     })
    //   })
    // }
    // console.log(realm.objects('CrimeEntry').length);

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

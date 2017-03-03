// @flow

'use strict'

import React, {Component} from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import MapView from 'react-native-maps';
import ViewContainer from './ViewContainer.js';
import CrimeList from './CrimeList.js';
import CrimeButton from './CrimeButton.js';
import renderIf from './renderIf.js';
const baseUrl = 'http://sentinelweb.9qqamtpp2r.us-east-1.elasticbeanstalk.com/getCrimeData.json';
const crimeData = {
  simpleAssaultCrimes: [],
  motorVehicleTheftCrimes: [],
  theftFromMotorVehicleCrimes: [],
  burglaryBreakingAndEnteringCrimes:[],
  counterfeitingForgeryCrimes: [],
  robberyCrimes: [],
  aggravatedAssaultCrimes: [],
  prostitutionCrimes: [],
  creditCardAndAtmFraudCrimes: [],
  theftOfMotorVehiclePartsAndAccessoriesCrimes: [],
  kidnappingAbductionCrimes: [],
  impersonationCrimes: [],
  shopliftingCrimes: [],
  arsonCrimes: [],
  drugNarcoticViolationCrimes: [],
  destructionDmgVandOfPropertyCrimes: [],
  theftFromBuildingCrimes: [],
  falsePretensesSwindleConfidenceGameCrimes: [],
  allOtherLarcenyCrimes: [],
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
      selectedCrime : crimeData,
    };
  }

  componentWillMount() {
    fetch(baseUrl)
    .then((response) => response.json())
    .then((responseJson) => {
      this.state.crimeData.simpleAssaultCrimes = responseJson.simpleAssaultCrimes;
      this.state.crimeData.motorVehicleTheftCrimes = responseJson.motorVehicleTheftCrimes;
      this.state.crimeData.theftFromMotorVehicleCrimes = responseJson.theftFromMotorVehicleCrimes;
      this.state.crimeData.burglaryBreakingAndEnteringCrimes = responseJson.burglaryBreakingAndEnteringCrimes;
      this.state.crimeData.counterfeitingForgeryCrimes = responseJson.counterfeitingForgeryCrimes;
      this.state.crimeData.robberyCrimes = responseJson.robberyCrimes;
      this.state.crimeData.aggravatedAssaultCrimes = responseJson.aggravatedAssaultCrimes;
      this.state.crimeData.prostitutionCrimes = responseJson.prostitutionCrimes;
      this.state.crimeData.creditCardAndAtmFraudCrimes = responseJson.creditCardAndAtmFraudCrimes;
      this.state.crimeData.theftOfMotorVehiclePartsAndAccessoriesCrimes = responseJson.theftOfMotorVehiclePartsAndAccessoriesCrimes;
      this.state.crimeData.kidnappingAbductionCrimes = responseJson.kidnappingAbductionCrimes;
      this.state.crimeData.impersonationCrimes = responseJson.impersonationCrimes;
      this.state.crimeData.shopliftingCrimes = responseJson.shopliftingCrimes;
      this.state.crimeData.arsonCrimes = responseJson.arsonCrimes;
      this.state.crimeData.drugNarcoticViolationCrimes = responseJson.drugNarcoticViolationCrimes;
      this.state.crimeData.destructionDmgVandOfPropertyCrimes = responseJson.destructionDmgVandOfPropertyCrimes;
      this.state.crimeData.theftFromBuildingCrimes = responseJson.theftFromBuildingCrimes;
      this.state.crimeData.falsePretensesSwindleConfidenceGameCrimes = responseJson.falsePretensesSwindleConfidenceGameCrimes;
      this.state.crimeData.allOtherLarcenyCrimes = responseJson.allOtherLarcenyCrimes;
    }).catch(function(error) {
    })
    .done();
  }

  render() {
    return (
      <ViewContainer>
        <MapView
           style={styles.map}
          region = {this.state.initialRegion}
          />
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
})
module.exports = Map

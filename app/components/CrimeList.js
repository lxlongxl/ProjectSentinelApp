'use strict'

import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableHighlight } from 'react-native';
import CrimeButton from './CrimeButton.js';
import { Actions } from 'react-native-router-flux';

class CrimeList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        status: false
      }
    }

    toggleStatus(){
      this.setState({
        status:!this.state.status
      });
      console.log('toggle button handler: '+ this.state.status);
    }

    render() {
      return (
        <ScrollView style={styles.innerContainer}>
          <View>
            <CrimeButton
              text = 'Simple Assault'
              underlayColor = 'white'
              onPress={Actions.pop({ refresh: {this.state.selectedCrime: this.state.crimeData.simpleAssaultCrimes}}
              )}/>


            //REPLACE WITH CRIMEBUTTONS
            <TouchableHighlight style = {styles.crimes} underlayColor = 'white' onPress={()=>this.toggleStatus()}>
              <Text>
                Crime 2
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style = {styles.crimes} underlayColor = 'white' onPress={()=>this.toggleStatus()}>
              <Text>
                Crime 3
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style = {styles.crimes} underlayColor = 'white' onPress={()=>{this.toggleStatus(); this.state.selectedCrime = this.state.crimeData.allOtherLarcenyCrimes; console.log(this.state.selectedCrime);}}>
              <Text>
                Crime 4
              </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      )
    }
}

const styles = StyleSheet.create({
  listContainer: {
    height: 550,
    width: 270,
    top: 1,
    bottom: 200,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  innerContainer: {
    height: 450,
    width: 270,
  },
  text: {
    fontSize: 25,
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center',
    height: 100,
    backgroundColor: 'white',
  }
});

module.exports = CrimeList

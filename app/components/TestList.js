'use strict'

import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';

class TestList extends Component {
  render() {
    return(
      <View style={styles.menu}>
        <TouchableHighlight style={styles.crimes} underlayColor = 'white'>
          <Image style={styles.image} source={{uri: 'https://cdn2.iconfinder.com/data/icons/vehicle-insurance/256/Theft__Vandalism_Insurance-512.png'}}/>
        </TouchableHighlight>
        <TouchableHighlight style={styles.crimes} underlayColor = 'white'>
          <Image style={styles.image} source={{uri: 'https://cdn4.iconfinder.com/data/icons/risk-insurance-black-red-version/33/car_theft__vandalism-512.png'}}/>
        </TouchableHighlight>
        <TouchableHighlight style={styles.crimes} underlayColor = 'white'>
          <Image style={styles.image} source={{uri: 'https://cdn2.iconfinder.com/data/icons/property-insurance/256/Theft__Vandalism-512.png'}}/>
        </TouchableHighlight>
        <TouchableHighlight style={styles.crimes} underlayColor = 'white'>
          <Image style={styles.image} source={{uri: 'https://cdn2.iconfinder.com/data/icons/security-19/512/2-24-512.png'}}/>
        </TouchableHighlight>
        <TouchableHighlight style={styles.crimes} underlayColor = 'white'>
          <Image style={styles.image} source={{uri: 'https://cdn1.iconfinder.com/data/icons/basic-vol-3/16/revolution_coup_violence_innovation_strike-512.png'}}/>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menu:{
    left:160,
  },
  crimes: {
    paddingTop:10,
    paddingBottom:15,
  },
  image: {
  width: 40,
  height: 40,
}
})

module.exports = TestList

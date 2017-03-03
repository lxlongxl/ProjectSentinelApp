'use strict'

import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

class CrimeList extends Component {
  render() {
    return(
      <View>
        <ScrollView styles={styles.container}>
          <View style={styles.titleBar}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Select a crime:
            </Text>
          </View>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 1
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 2
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 3
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.crimes} underlayColor = 'white'>
            <Text>
              Crime 4
            </Text>
          </TouchableHighlight>
          
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleBar:{
    backgroundColor:'dodgerblue',
    paddingTop:20,
    paddingBottom:10,
    flexDirection:'row',
    justifyContent: 'center'
  },
  title:{
    flex: 1,
    color:'#fff',
    alignItems:'center',
  },
  crimes: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:10,
    paddingBottom:10
  },
})

module.exports = CrimeList

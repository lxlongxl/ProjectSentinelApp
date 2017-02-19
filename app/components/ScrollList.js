'use strict'

import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class ScrollList extends Component {
    render(){
      return(
          <View style={styles.container}>
          <ScrollView>
              <View>
                  <Text style = {styles.text}>asassssass</Text>
              </View>
          </ScrollView>

          </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    top: 1,
    bottom: 200,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    padding: 5
  },
  text: {
    fontSize: 20,
    color: '#888888',
    justifyContent: 'center',
    left: 80,
    top: 20,
    height: 40,
  },
})

module.exports = ScrollList

'use strict'

import React, {Component} from 'react';
import ScrollList from './ScrollList.js';     /* Is this Needed? */
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
          <ScrollView
              <View style={styles.text}>
                  <Text>asassssass</Text>
              </View>
          </ScrollView>
      /*  <TouchableOpacity
              style={styles.button}
              onPress={() => { _scrollView.scrollTo({y: 0}); }}>
              <Text>Scroll to top</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => { _scrollView.scrollToEnd({animated: true}); }}>
              <Text>Scroll to bottom</Text>
              </TouchableOpacity>
  */
          </View>

    ),
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 50,
    backgroundColor: 'mistyrose',
    borderWidth: 2,
    borderColor: 'black'
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888'
    left: 80,
    top: 20,
    height: 40,
  },
})

module.exports = ScrollList

'use strict'

import React, { Component } from 'react';
import { Router, Scene, } from 'react-native-router-flux'


class Navigate extends Component {
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


module.exports = Navigate

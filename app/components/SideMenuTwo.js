'use strict'

import React, { Component } from 'react';
import { View } from 'react-native';
import { SideMenu } from 'react-native-elements';

class SideMenuTwo extends Component {
  render() {
    const menu = <Menu navigator={navigator}/>;

    return (
      <SideMenu menu={menu}>
        <ContentView/>
      </SideMenu>
    );
  }
}
module.exports = SideMenuTwo

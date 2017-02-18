'use strict'

import React, { Component } from 'react';
import { View } from 'react-native';
import { SideMenu as SideSlide, List, ListItem } from 'react-native-elements';

class SideMenu extends Component {
constructor() {
  super();
  this.state = {
    isOpen: false
  }
  this.toggleSideMenu = this.toggleSideMenu.bind(this)
}

toggleSideMenu () {
  this.setState({
    isOpen: !this.state.isOpen
  })
}

render () {
  const list = [
    {
      name: 'Assault'
    },
    {
      name: 'Robbery'
    },
    {
      name: 'Grand Theft Auto'
    }
  ]

  const MenuComponent = (
    <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
      <List containerStyle={{marginBottom: 20}}>
      {
        list.map((l, i) => (
          <ListItem
            roundAvatar
            onPress={() => console.log('Pressed')}
            avatar={l.avatar_url}
            key={i}
            title={l.name}
            subtitle={l.subtitle}
          />
        ))
      }
      </List>
    </View>
  )

  return (
    <SideMenu
      isOpen={this.state.isOpen}
      menu={MenuComponent}>
      <App toggleSideMenu={this.toggleSideMenu.bind(this)} />
    </SideMenu>
  );
}
}
module.exports = SideMenu

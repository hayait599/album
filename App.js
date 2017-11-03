import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';
 
export default class album extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList /> 
      </View>     
    );
  }
}


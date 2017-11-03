import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
 
export default class AlbumList extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      loading: false,
      albums: [],
      error: null,
      refreshing: false
    };
  }  
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }
  render() {
    console.log(this.state.albums);
    return (
      <FlatList
          keyExtractor={(item, index) => index}
          data={this.state.albums}
          renderItem={({ item }) => <AlbumDetail key={item.title} album={item} />}
      />    
    );
  }
}


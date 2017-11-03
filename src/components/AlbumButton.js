import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const AlbumButton = () => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>  
      <Text style={styles.textStyle}>click mee !!</Text>
    </TouchableOpacity>
 );
};
const styles = {
  buttonStyle: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#f000ff',
    elevation: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20
  }
};
export default AlbumButton;

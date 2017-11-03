import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.viewStyle}> 
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    elevation: 10,
    position: 'relative'
  },	
  textStyle: {
    fontSize: 20,
  }
};
export default Header;

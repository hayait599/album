 
import React from 'react';
import {
  Text,
  View,
  Image, 
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import AlbumButton from './AlbumButton';

const AlbumDetail = ({ album }) => { 
  const { title, artist, thumbnail_image, image } = album;
  const { textViewStyle, imgStyle, imgStyle2 } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={imgStyle}
            source={{ uri: thumbnail_image }} 
          />
        </View>
        <View style={textViewStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View> 
      </CardSection>
      <CardSection>
        <Image
          style={imgStyle2}
          source={{ uri: image }} 
        />
      </CardSection>
      <CardSection>
        <AlbumButton /> 
      </CardSection>  
    </Card>
  );
};
const styles = {
  textViewStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginLeft: 20
  },
  imgStyle: {
    width: 50,
    height: 50
  },
  imgStyle2: {
    height: 300,
    flex: 1
  }
};
export default AlbumDetail;


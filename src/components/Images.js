import React from 'react';
import { View, Image } from 'react-native';

export default function Images(props) {


  return (
    <Image
      source={'https://image.tmdb.org/t/p/w500/' + props.url}
    />
  );
}
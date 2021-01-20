import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function RenderList(props) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details',{id:props.id})}>
      <View style={styles.view}>
        <Image
          style={{ width: 140, height: 210 }}
          source={{ uri: 'https://image.tmdb.org/t/p/w500/' + props.url }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 210,
    padding: 3,
    marginRight: 7.5,
  },
});
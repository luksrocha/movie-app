import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import key from '../../constants/api_key';

export default function Details({ route, navigation }) {
  const [details, setDetails] = useState({});
  const { id } = route.params;

  const movieCollection = ''

  const saveData = async () => {
    const newMovie = await movieCollection.create(movie => {
      movie.title = 'Teste',
      movie.poster_path = 'path teste',
      movie.runtime = 1,
      movie.vote_average = 2
    })

    console.log(newMovie);
  }

  navigation.setOptions({
    headerTitle: !details ? ' ' : details.title,
    headerTitleAlign: 'center',
    headerRight: () => <Text style={{ marginRight: 10 }}>Ola</Text>,
    headerStyle: { backgroundColor: '#121212E6' }
  });

  const getDetails = async () => {
    try {
      const response = await api.get('movie/' + id, {
        params: {
          api_key: key,
          language: 'pt-BR'
        }
      });
      console.log(response.data)
      setDetails(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {

    getDetails();
  }, [])

  return (
    <ScrollView style={{backgroundColor:'#121212E6', flex:1}}>
      <View >
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ width: '100%', aspectRatio: 1, height: 420 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w500/' + details.poster_path }}
          />
        </View>

        <View style={{ marginTop: 10, padding: 10 }}>
          <View>
            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{ marginBottom: 10, fontSize:17, color:'#FFF' }}>{details.vote_average}</Text>
                <Text style={{fontSize:17, color:'#FFF'}}>Estrela</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={{color:'#FFF'}}>Favorito</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={{fontSize:17, color:'#FFF'}}>{details.overview}</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

var styles = StyleSheet.create({
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 700,
    width: '100%',
  },
});
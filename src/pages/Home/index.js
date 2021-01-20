import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import key from '../../constants/api_key';
import api from '../../services/api';
import RenderList from '../../components/Home/RenderList';
import { useNavigation } from '@react-navigation/native'
import Genres from '../../components/Genres';
import HomeCarousel from '../../components/Home/Carousel';

export default function Home() {
  const [movies, setMovies] = useState([]);

  const navigation = useNavigation();

  const getMovies = async () => {
    try {
      const results = await api.get('/movie/popular', {
        params: {
          api_key: key,
          language: 'pt-BR'
        }
      })
      setMovies(results.data.results);
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  const renderItem = ({ item }) => (
    <RenderList id={item.id} url={item.poster_path} title={item.original_title} />
  );

  return (
    <ScrollView>
      <View style={{ padding:15,backgroundColor:'#121212E6' }}>
        <HomeCarousel style={{marginTop:20}} url={movies.poster_path}/>
        <Text style={{ paddingLeft: 10, marginTop: 20, color:'#FFF' }}>Generos</Text>
        <ScrollView horizontal style={{ padding: 10 }} showsHorizontalScrollIndicator={false}>
          <Genres icon={'restaurant-outline'} color={'#000'} />
          <Genres icon={'skull-outline'} color={'#000'} />
          <Genres icon={'rocket-outline'} color={'#000'} />
          <Genres icon={'football-outline'} color={'#000'} />
          <Genres icon={'flask-outline'} color={'#000'} />
          <Genres icon={'bonfire-outline'} color={'#000'} />
        </ScrollView>
        <Text style={{ paddingLeft: 10, marginTop:15, color:'#FFF' }}>Top Rateds</Text>
        <View style={{ padding: 10 }}>

          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={movies}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </ScrollView>
  );
}
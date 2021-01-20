import React, { useState, useEffect } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import api from '../../services/api';
import key from '../../constants/api_key';
import { useNavigation } from '@react-navigation/native'

export default function HomeCarousel(props) {
  const [entries, setEntries] = useState([]);
  const [activeSlide, setActiveSlide] = useState(1);

  const navigation = useNavigation();

  const getMovies = async () => {
    try {
      const response = await api.get('movie/upcoming', {
        params: {
          api_key: key,
          language: 'pt-BR'
        }
      });
      setEntries(response.data.results);
      console.log(response.data.results)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  const renderItem = ({ item, index }) => {
    return (
      <View >
        <TouchableOpacity onPress={() => navigation.navigate('Details',{id:item.id})}>
          <Image
            style={{ width: 260, height: 420, borderRadius: 35 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }}
          />
        </TouchableOpacity>
        <Text style={{ marginTop: 10, fontSize: 18, color: '#FFF' }}>{item.title}</Text>
      </View>
    )
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Carousel
        layout={'default'}
        layoutCardOffset={18}
        activeSlideOffset={5}
        sliderHeight={420}
        sliderWidth={340}
        itemHeight={420}
        itemWidth={265}
        data={entries}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
    </View>
  );
}
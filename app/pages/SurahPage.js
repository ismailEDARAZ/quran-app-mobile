import React from 'react'
import { View } from 'react-native';

export default function SurahPage({ route, navigation }) {
  const { item } = route.params;
  const urlImage = item.image_url ? item.image_url : "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg";
  console.log('Detail', item)
  return (
    <View></View>
  )
}
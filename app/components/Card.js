import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default function Card({item}) {
  const navigation = useNavigation();
  //console.log(item)
  return (
    <View style={{marginTop:30, marginRight:20, marginBottom: 15, marginLeft:20, direction: 'rtl', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row-reverse'}}>
     <Text style={{fontSize:25}}>{item.number} . {item.name}</Text>
     <Text style={{fontSize:15}}>{item.numberOfAyahs}</Text>
    </View>
  )
}
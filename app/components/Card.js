import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Card({item}) {
  const navigation = useNavigation();
  //console.log(item)
  return (
    <TouchableOpacity style={style.card} 
      onPress={()=> navigation.navigate('SurahPage', {surahNumber: item.number})}
    >
     <Text style={{fontSize:25}}>{item.number} . {item.name}</Text>
     <Text style={{fontSize:15}}>{item.numberOfAyahs}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  card: {
    marginTop:10, 
    marginRight:20, 
    marginBottom: 5, 
    marginLeft:20, 
    direction: 'rtl', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flexDirection: 'row-reverse',
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10
  }
});
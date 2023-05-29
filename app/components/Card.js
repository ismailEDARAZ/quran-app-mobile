import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Card({item}) {
  const navigation = useNavigation();
  //console.log(item)
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SurahPage', {surahId: item.number})}
    >
      <View style={styles.card}>
        <Text style={{fontSize:25}}>{item.number} . {item.name}</Text>
        <Text style={{fontSize:15}}>{item.numberOfAyahs}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   card: {
    marginTop:10, 
    marginRight:20, 
    marginBottom: 10, 
    marginLeft:20, 
    direction: 'rtl', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flexDirection: 'row-reverse',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 15
   }
})
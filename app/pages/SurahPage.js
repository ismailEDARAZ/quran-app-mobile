import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function SurahPage({ route }) {
  const { surahNumber } = route.params;
  console.log('Detail', surahNumber)
  const [surah, setSurah] = useState({});
  const [ayahs, setAyahs] = useState([]);

  const getSurah = async () => {
    const resp = await fetch("http://api.alquran.cloud/v1/surah/"+surahNumber);
    const data_json = await resp.json();
    setSurah(data_json.data);
    setAyahs(data_json.data.ayahs);
    console.log("surah ",surah)
    console.log("ayahs ",ayahs)
  };

  useEffect(()=>{
    getSurah();
  },[]);

  return (
    <View style={style.container}>
      <Text style={style.surah}>{surah.name}</Text>
      <Text> {ayahs.map((ayah, index)=> <Text style={style.ayah} key={index}>{ayah.text.trim()} <Text style={style.number}>{ayah.number}</Text> </Text>)}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 25
  },
  surah:{
    fontSize:36, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginVertical: 20
  },
  ayah: {
    fontSize: 18
  },
  number :{
    fontWeight: 'bold',
    fontSize: 18
  }
})
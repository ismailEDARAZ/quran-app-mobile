import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';

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
    <View style={{ flexGrow: 2}}>
      <Text> {ayahs.map((ayah, index)=>(<Text style={{backgroundColor: 'red'}} key={index}>{ayah.text}</Text>) )}</Text>
    </View>
  )
}
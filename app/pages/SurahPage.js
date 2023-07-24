import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import quran from "../../assets/data/quran.json";
import { Icon } from 'react-native-vector-icons/Ionicons';

export default function SurahPage({ route }) {
  const { surahNumber } = route.params;
  console.log('Detail', surahNumber)
  const [surah, setSurah] = useState({});
  const [ayahs, setAyahs] = useState([]);

  const getSurah = async () => {
    //const resp = await fetch("http://api.alquran.cloud/v1/surah/"+surahNumber);
    //const data_json = await resp.json();
    setSurah(quran[surahNumber-1]);
    setAyahs(quran[surahNumber-1].array);
    console.log("surah ",surah)
    console.log("ayahs ",ayahs)
  };

  useEffect(()=>{
    getSurah();
  },[]);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity>
          <Icon name='arrow-back' />
        </TouchableOpacity>
        <Text style={style.surah}>{surah.name}</Text>
      </View>
      <ScrollView>
        <Text> {ayahs.map((ayah, index)=> <Text style={style.ayah} key={index}>{ayah.ar.trim()} <Text style={style.number}>{ayah.id}</Text> </Text>)}</Text>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 25
  },
  header:{
    display: "flex",
    flexDirection:"row",
    justifyContent:'space-between'
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
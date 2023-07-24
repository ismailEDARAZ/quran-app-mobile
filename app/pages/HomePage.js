import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { FlatList, ScrollView, Text, View } from 'react-native';
import quran from "../../assets/data/quran.json"

export default function HomePage() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    //const resp = await fetch("http://api.alquran.cloud/v1/surah");
    //const data_json = await resp.json();
    //setData(data_json.data);
    console.log("quran ",quran)
  };

  useEffect(()=>{
    //fetchData();
    //console.log("quran ",quran)
  },[]);

  return (
    <FlatList 
      data={quran} 
      renderItem={({item})=> <Card item={item} /> }
      keyExtractor={item => item.id}
    />
  )
}
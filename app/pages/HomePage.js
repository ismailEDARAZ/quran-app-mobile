import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { FlatList, ScrollView, Text, View } from 'react-native';

export default function HomePage() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch("http://api.alquran.cloud/v1/surah");
    const data_json = await resp.json();
    setData(data_json.data);
    console.log("data ",data)
  };

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <FlatList 
      data={data} 
      renderItem={({item})=> <Card item={item} /> }
      keyExtractor={item => item.number}
    />
  )
}
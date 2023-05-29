import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { ScrollView } from 'react-native';

export default function HomePage() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch("http://api.alquran.cloud/v1/surah");
    const data_json = await resp.json();
    setData(data_json.data);
    //console.log(data_json)
  };

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <ScrollView margin={3} marginBottom={20}>
      { data.map((item,index) =>
          (<Card key={index} item={item} />))
      }
    </ScrollView>
  )
}
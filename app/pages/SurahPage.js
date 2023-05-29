import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SurahPage({ route }) {
  const { surahId } = route.params;

  const [surah, setSurah] = useState('');
  const [ayahs, setAyahs] = useState([]);

  useEffect(async ()=>{
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahId}`);
    //const surah = res.json();
    const data = await res.json();

    console.log('Surah', data.data)
    setSurah(data.data.name);
    setAyahs(data.data.ayahs);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'column'}}>
        <Text style={{with: 100, display: 'inline-block'}}>{surah}</Text>
        {
          ayahs.map((ayah, index) => {
            return (<Text key={index}>{ayah.text} {ayah.number}</Text>)
          })
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});
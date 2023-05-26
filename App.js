import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './app/pages/HomePage';
import SurahPage from './app/pages/SurahPage';
import StartPage from './app/pages/StartPage';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Start" component={StartPage} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Surah" component={SurahPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


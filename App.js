import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Home from './components/Home';
import ClassHome from './components/ClassHome';
import PlannedTrips from './components/PlannedTrip';
import PlannedTrip from './components/PlannedTrip';
import Contants from 'expo-constants';

const Stack = createStackNavigator();

function App() {
  return (
    <View style={styles.container}>
        <Home/>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PlannedTrip" component={PlannedTrip} />
        </Stack.Navigator>
   
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2e5f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

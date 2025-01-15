import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  const Stack = createNativeStackNavigator
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator intialRouteName='StudentList'screenOptions={
          {
            headerStyle: { backgroundColor: '#4b0150' },
            headerTintColor:'#ffff', 
            headerTitleAlign:'center'
        }}>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

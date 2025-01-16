import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import StudentList from './components/StudentList';
import Profile from './components/Profile';
import AddStudent from './components/AddStudent';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='StudentList'screenOptions={
          {
            headerStyle: { backgroundColor: '#4b0150' },
            headerTintColor:'#ffff', 
            headerTitleAlign:'center'
        }}>
          <Stack.Screen name='StudentList' component={StudentList} options={{ title: "UoV Health Care" }} />
          <Stack.Screen name='Profile' component={Profile} options={{ title: "UoV Health Care" }} />
          <Stack.Screen name='AddStudent' component={AddStudent} options={{ title: "UoV Health Care" }} />
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

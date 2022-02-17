import React from "react";
import {} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/signUp'

const App = ()=>{
  const Stack = createNativeStackNavigator();

return (
  <NavigationContainer>
  <Stack.Navigator>
      <Stack.Screen
          name="App"
          component={Login}
          options={{ title: 'SIGN-UP', headerTitleAlign:'center'}}
          
          />
  </Stack.Navigator>
</NavigationContainer>  
)
}
export default App
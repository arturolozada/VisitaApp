import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//import { StackMUno } from './src/navegacion/StackMUno';
import { MenuLateral } from './src/navegacion/MenuLateral';


const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral />
    </NavigationContainer>
  )
}

export default App;
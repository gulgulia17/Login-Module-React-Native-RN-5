import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Login from "./screens/Login";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Demo from "./screens/Demo";

export default class App extends React.Component{
  render(){
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Demo'>
          <Stack.Screen name="Demo" component={Demo}
          options={{ 
            headerLeft:null,
            title: '',
            headerStyle:{
              height:0
            }
            }}
            />
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Signup" component={Signup}/>
        </Stack.Navigator>
      </NavigationContainer>
      );
  }
}
import React, { Component } from 'react'
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
export default class Demo extends Component {
    constructor(props){
        super(props);
        this.loadData(); 
      }
      render(){
          return null;
      }
    loadData = async() => {
       const isLoggedIn =  await AsyncStorage.getItem('isLoggedIn');
       this.props.navigation.dispatch(
        StackActions.replace(isLoggedIn == 1 ? 'Home' : 'Login'));
    }
}


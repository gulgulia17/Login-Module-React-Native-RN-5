import React, { Component } from 'react'
import { 
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
 } from 'react-native'
 import AsyncStorage from '@react-native-community/async-storage';
 import { StackActions } from '@react-navigation/native';

 const userInfo = {username:'admin' , password:'12345678'}

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
    }
  }
  login = async() => {
    if(userInfo.username === this.state.username && userInfo.password === this.state.password){
      await AsyncStorage.setItem('isLoggedIn','1');
      this.props.navigation.dispatch(
        StackActions.replace('Home'));
    } else {
      alert('Inccorect');
    }
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#2f71ee"
          barStyle="light-content"
        />
        <Text style={styles.welcome}>Login to my app</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}
          autoCapitalize="none"
          value={this.state.username}

        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
          secureTextEntry
          autoCapitalize="none"
          value={this.state.password}

        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.userBtn} onPress={this.login}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.userBtn} onPress={() =>  this.props.navigation.navigate('Signup')}>
            <Text style={styles.btnTxt}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    )
  }
  
}
const styles = StyleSheet.create({
  container:{
    height:Dimensions.get("window").height-80,
    width:Dimensions.get("window").width,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1e90ff'
  },
  welcome:{
    fontSize:30,
    textAlign:'center',
    margin:10,
    color:'#fff',
  },
  input:{
    width:"90%",
    backgroundColor:"#fff",
    padding:15,
    marginBottom: 10
  },
  userBtn:{
    backgroundColor:'#ffd700',
    padding:15,
    width:"45%"
  },
  btnTxt:{
    fontSize:18,
    textAlign:"center"
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:"90%"
  }
});

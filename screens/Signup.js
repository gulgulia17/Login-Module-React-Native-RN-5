import React, { Component } from 'react'
import { 
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions
 } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class Signup extends Component {
  render() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar
                backgroundColor="#2f71ee"
                barStyle="light-content"
                />
                <Text style={styles.welcome}>Signup to my app</Text>
                <TextInput
                style={styles.input}
                placeholder="Username"
                />
                <TextInput
                style={styles.input}
                placeholder="Username"
                />
                <TextInput
                style={styles.input}
                placeholder="Username"
                />
                <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                />
                <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.userBtn} onPress={() => alert('Working')}>
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
    alignItems:'center',
    justifyContent:'center',
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
    width:"90%",
    alignItems:'center'
  }
});

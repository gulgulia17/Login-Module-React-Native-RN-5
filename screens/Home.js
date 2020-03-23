import React, { Component } from 'react'
import { 
  View,
  StyleSheet,
  Text,
  Dimensions,
  AsyncStorage,
  StatusBar
 } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends Component {
  render() {
    return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#2f71ee"
          barStyle="light-content"
        />
            <Text style={styles.btnTxt}>Home</Text>
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
  userBtn:{
    backgroundColor:'#ffd700',
    padding:15,
    width:"45%"
  },
  btnTxt:{
    fontSize:18,
    textAlign:"center"
  }
});

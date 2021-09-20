
import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';  
  
type Props = {};  
export default class App extends Component<Props> {  
  render() {  
    return (  
      <View>  
        <Text style={styles.welcome}>Hello World</Text> 
        <Text style={styles.welcme}>Welcome to React Native!</Text>   
      </View>  
    );  
  }  
}  
const styles = StyleSheet.create({  
  welcome: {  
    fontSize: 30,  
    textAlign: 'center',  
    margin: 50, 
    color: 'white', 
    marginBottom: 0,
  }, 
  welcme: {
    fontSize: 20,  
    textAlign: 'center',  
    margin: 10, 
    color: 'white', 
  } 
}); 



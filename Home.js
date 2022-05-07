import React from "react";
//import { Routes, Route } from "react-router-dom";
/*import Game from "./pages/game";
import Home from "./pages/Home";
import Password from "./pages/Password";
import Random from "./pages/Random"*/
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import { Camera } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
//import * as Brightness from 'expo-brightness';
//import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
//import { Link } from '@react-navigation/native';

//<Link to="./Home.js"><Text>Go to Jane's profile</Text></Link>;
function addcomponent() {
  return(
    <View>
      <Text>Helloooo !</Text>
    </View>
  );
}

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.uppart}>
        <TouchableOpacity style={styles.note}><MaterialCommunityIcons style={styles.texts} name="filter" size={24} color="black" /></TouchableOpacity>
        <View style={styles.notes}>
          <Text style={styles.text}>Note contact <FontAwesome name="pencil-square-o" size={24} color="darkseagreen" /></Text>
        </View>
        <View style={styles.changeicons}>
          <TouchableOpacity style={styles.noteicons}><AntDesign style={styles.textsicons} name="pluscircleo" size={24} color="black" /></TouchableOpacity>
          <TouchableOpacity style={styles.noteicons}><Ionicons style={styles.textsicons} name="trash" size={24} color="black" /></TouchableOpacity>
        </View>
      </View>
      
      
        <TouchableOpacity onPress={addcomponent}><Text>Add section</Text></TouchableOpacity>
        
    </View>
  );
}
const styles = StyleSheet.create({
  uppart: {
    backgroundColor: '#5B6961',
    height: 200,
    top: 0,
    width: 'auto',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    alignItems: 'center',
  },
  notes: {
    backgroundColor: '#425047',
    height: 75,
    borderRadius: 15,
    top: 30,
    width: 200,
    marginBottom: 20,
  },
  note: {
    backgroundColor: '#425047',
    height: 27,
    borderRadius: 10,
    top: 30,
    width: 27,
    marginLeft: 300,
  },
  noteicons: {
    backgroundColor: '#425047',
    height: 35,
    borderRadius: 10,
    top: 30,
    width: 75,
    alignItems: 'center',
    marginLeft:50,
    marginRight: 50,
  },
  changeicons: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    color: 'red',
    width: 50,
    height: 50,

  },
  text: {
    fontSize: 23,
    color: 'darkseagreen',
    height: 100,
    width: 250,
    marginTop: 20,
    marginLeft: 30,
    display: 'flex',
  },
  texts: {
    fontSize: 23,
    color: 'darkseagreen',
    display: 'flex',
    top: 2,
    marginLeft: 2,
  },
  textsicons: {
    fontSize: 23,
    color: 'darkseagreen',
    display: 'flex',
    top: 5,
    marginLeft: 2,
  },
  bg: {
    width: 500,
    height: 400,
  },
  container: {
    height: '100%',
    backgroundColor: '#76897E',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default App;
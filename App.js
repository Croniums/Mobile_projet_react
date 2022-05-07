import * as React from "react";
//import { Routes, Route } from "react-router-dom";
/*import Game from "./pages/game";
import Home from "./pages/Home";
import Password from "./pages/Password";
import Random from "./pages/Random"*/
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
//import { Camera } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
//import * as Brightness from 'expo-brightness';
//import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, MaterialCommunityIcons, AntDesign, Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileBar from "./ProfileBar";

class Connexion extends React.Component {
  state = {
    myInputValue1: "",
    myInputValue2: "",
    myInputValue3: "",
    myInputValue4: "",
    myInputValue5: "",
  }
}
const Stack = createNativeStackNavigator();

const toggleVisibility = () => {
  this.setState(prevState => ({visible: !prevState.visible}));
}

function HomeScreen({ navigation }) {
  return(
    <View>
      <View style={styles.container}>
        <View style={styles.uppart}>
          <View style={styles.notes}>
            <Text style={styles.text}>Note contact <FontAwesome name="pencil-square-o" size={24} color="darkseagreen" /></Text>
          </View>
          <View style={styles.changeicons}>
            <TouchableOpacity style={styles.noteicons}><AntDesign style={styles.textsicons} name="pluscircleo" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity style={styles.noteicons}><Ionicons style={styles.textsicons} name="trash" size={24} color="black" /></TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile1')}>
          <ProfileBar title="Marc Lughen" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile2')}>
          <ProfileBar title="Lucie Jaurès" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile3')}>
          <ProfileBar title='Paul Milker'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile4')}>
          <ProfileBar title="Marie Auguste"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile5')}>
          <ProfileBar title="Brian Mark"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function ProfileScreen1({ navigation }) {
  return(
    <View style={styles.profileUpper}>
      <View style={styles.profilepicture}>
        <TouchableOpacity style={styles.photo}><MaterialIcons name="add-a-photo" size={24} color="darkseagreen" style={styles.phototake}/></TouchableOpacity>
        <Text style={styles.profilename}>Marc Lughen</Text>
      </View>
      <View style={styles.downparam}>
      <Text>Age :</Text>
      <TextInput style={styles.inputs}/>
      <Entypo name="phone" size={24} color="black" style={styles.break}/>
      <TextInput style={styles.inputs}/>
      <Entypo name="mail" size={24} color="black" />
      <TextInput style={styles.inputsinfo}/>
      <FontAwesome name="birthday-cake" size={24} color="black" />
      <TextInput style={styles.inputsinfo} placeholder="                  /                  /"/>
      <FontAwesome5 name="cookie-bite" size={24} color="black" />
      <TextInput style={styles.inputsinfo} />
      <Text>Description :</Text>
      <TextInput style={styles.inputsB}/>
      </View>
    </View>
  );
}
function ProfileScreen2({ navigation }) {
  return(
    <View style={styles.profileUpper}>
      <View style={styles.profilepicture}>
        <TouchableOpacity style={styles.photo}><MaterialIcons name="add-a-photo" size={24} color="darkseagreen" style={styles.phototake}/></TouchableOpacity>
        <Text style={styles.profilename}>Lucie Jaurès</Text>
      </View>
      <View style={styles.downparam}>
      <Text>Age :</Text>
      <TextInput style={styles.inputs}/>
      <Entypo name="phone" size={24} color="black" style={styles.break}/>
      <TextInput style={styles.inputs}/>
      <Entypo name="mail" size={24} color="black" />
      <TextInput style={styles.inputsinfo}/>
      <FontAwesome name="birthday-cake" size={24} color="black" />
      <TextInput style={styles.inputsinfo} placeholder="                  /                  /"/>
      <FontAwesome5 name="cookie-bite" size={24} color="black" />
      <TextInput style={styles.inputsinfo} />
      <Text>Description :</Text>
      <TextInput style={styles.inputsB}/>
      </View>
    </View>
  );
}
function ProfileScreen3({ navigation }) {
  return(
    <View style={styles.profileUpper}>
      <View style={styles.profilepicture}>
        <TouchableOpacity style={styles.photo}><MaterialIcons name="add-a-photo" size={24} color="darkseagreen" style={styles.phototake}/></TouchableOpacity>
        <Text style={styles.profilename}>Paul Milker</Text>
      </View>
      <View style={styles.downparam}>
      <Text>Age :</Text>
      <TextInput style={styles.inputs}/>
      <Entypo name="phone" size={24} color="black" style={styles.break}/>
      <TextInput style={styles.inputs}/>
      <Entypo name="mail" size={24} color="black" />
      <TextInput style={styles.inputsinfo}/>
      <FontAwesome name="birthday-cake" size={24} color="black" />
      <TextInput style={styles.inputsinfo} placeholder="                  /                  /"/>
      <FontAwesome5 name="cookie-bite" size={24} color="black" />
      <TextInput style={styles.inputsinfo} />
      <Text>Description :</Text>
      <TextInput style={styles.inputsB}/>
      </View>
    </View>
  );
}
function ProfileScreen4({ navigation }) {
  return(
    <View style={styles.profileUpper}>
      <View style={styles.profilepicture}>
        <TouchableOpacity style={styles.photo}><MaterialIcons name="add-a-photo" size={24} color="darkseagreen" style={styles.phototake}/></TouchableOpacity>
        <Text style={styles.profilename}>Marie Auguste</Text>
      </View>
      <View style={styles.downparam}>
      <Text>Age :</Text>
      <TextInput style={styles.inputs}/>
      <Entypo name="phone" size={24} color="black" style={styles.break}/>
      <TextInput style={styles.inputs}/>
      <Entypo name="mail" size={24} color="black" />
      <TextInput style={styles.inputsinfo}/>
      <FontAwesome name="birthday-cake" size={24} color="black" />
      <TextInput style={styles.inputsinfo} placeholder="                  /                  /"/>
      <FontAwesome5 name="cookie-bite" size={24} color="black" />
      <TextInput style={styles.inputsinfo} />
      <Text>Description :</Text>
      <TextInput style={styles.inputsB}/>
      </View>
    </View>
  );
}
function ProfileScreen5({ navigation }) {
  return(
    <View style={styles.profileUpper}>
      <View style={styles.profilepicture}>
        <TouchableOpacity style={styles.photo}><MaterialIcons name="add-a-photo" size={24} color="darkseagreen" style={styles.phototake}/></TouchableOpacity>
        <Text style={styles.profilename}>Brian Mark</Text>
      </View>
      <View style={styles.downparam}>
      <Text>Age :</Text>
      <TextInput style={styles.inputs}/>
      <Entypo name="phone" size={24} color="black" style={styles.break}/>
      <TextInput style={styles.inputs}/>
      <Entypo name="mail" size={24} color="black" />
      <TextInput style={styles.inputsinfo}/>
      <FontAwesome name="birthday-cake" size={24} color="black" />
      <TextInput style={styles.inputsinfo} placeholder="                  /                  /"/>
      <FontAwesome5 name="cookie-bite" size={24} color="black" />
      <TextInput style={styles.inputsinfo} />
      <Text>Description :</Text>
      <TextInput style={styles.inputsB}/>
      </View>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
            headerStyle: {
              backgroundColor: '#5B6961',
              color: 'darkseagreen',
            },
            headerRight: () => (
              <TouchableOpacity style={styles.notess}><MaterialCommunityIcons style={styles.texts} name="filter" size={24} color="black" /></TouchableOpacity>
              ),
              headerShadowVisible: false,
          }
        }/>
        <Stack.Screen name="Profile1" component={ProfileScreen1} options={{
            headerStyle: {
              backgroundColor: '#76897E',
              color: 'darkseagreen',
            },
              headerShadowVisible: false,
          }
        }/>
        <Stack.Screen name="Profile2" component={ProfileScreen2} options={{
            headerStyle: {
              backgroundColor: '#76897E',
              color: 'darkseagreen',
            },
              headerShadowVisible: false,
          }
        }/>
        <Stack.Screen name="Profile3" component={ProfileScreen3} options={{
            headerStyle: {
              backgroundColor: '#76897E',
              color: 'darkseagreen',
            },
              headerShadowVisible: false,
          }
        }/>
        <Stack.Screen name="Profile4" component={ProfileScreen4} options={{
            headerStyle: {
              backgroundColor: '#76897E',
              color: 'darkseagreen',
            },
              headerShadowVisible: false,
          }
        }/>
        <Stack.Screen name="Profile5" component={ProfileScreen5} options={{
            headerStyle: {
              backgroundColor: '#76897E',
              color: 'darkseagreen',
            },
              headerShadowVisible: false,
          }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
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
  notess: {
    backgroundColor: '#425047',
    height: 27,
    borderRadius: 10,
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
    marginLeft: 2,
  },
  boutons: {
    fontSize: 23,
    color: 'darkseagreen',
    display: 'flex',
    marginLeft: 2,
    backgroundColor: '#425047',
    height: 50,
    width: 50,
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
  profileUpper: {
    backgroundColor: '#76897E',
    height: 700,
  },
  inputs: {
    borderColor: '#050505',
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: '#D3DbD6',
    height: 25,
    width: 75,
  },
  inputsB: {
    borderColor: '#050505',
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: '#D3DbD6',
    height: 150,
    width: 300,
  },
  inputsinfo: {
    borderColor: '#050505',
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: '#D3DbD6',
    height: 25,
    width: 200,
    paddingLeft: 2,
  },
  downparam: {
    paddingLeft: 25,
    paddingTop: 25,
    top: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#E0E9E4',
    height: 500,
    width: 'auto',
  },
  break: {
    marginTop: 15,
  },
  profilename: {
    fontSize: 15,
    color: '#B5CEAD',
  },
  photo: {
    alignItems: 'center',
    backgroundColor: '#2C3630',
    height: 77,
    width: 77,
    borderRadius: 50,

  },
  profilepicture: {
    alignItems: 'center',
  },
  phototake: {
    marginTop: 23,
  },
});
export default App;
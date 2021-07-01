import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

export default class App extends React.Component {
  render(){
    return (      
       <AppContainer/>      
    );
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  HomeScreen: {screen:HomeScreen},
});

const AppContainer =  createAppContainer(switchNavigator)

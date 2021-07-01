import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/Header';
import {SafeAreaProvider} from "react-native-safe-area-context";

export default class HomeScreen extends React.Component{
    render(){
        return(
            <SafeAreaProvider>
                <View >
                    <MyHeader title='Home' navigation={this.props.navigation}/>
                    <Text>user will get all notification about school work here</Text>
                </View>
            </SafeAreaProvider>
        );
    }
}

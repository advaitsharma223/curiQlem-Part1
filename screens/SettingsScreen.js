import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SettingsScreen extends React.Component{
    render(){
        return(
            <View >
                <Text>Settings</Text>
            </View>
        );
    }
}

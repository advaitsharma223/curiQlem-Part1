import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class ScheduleScreen extends React.Component{
    render(){
        return(
            <View >
                <Text>Schedule</Text>
            </View>
        );
    }
}

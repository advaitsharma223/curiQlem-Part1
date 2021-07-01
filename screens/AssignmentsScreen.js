import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class AssignmentsScreen extends React.Component{
// component did mount call function, get data from database (10 items),

    render(){
        return(
            <View >
                <Text>Assignments</Text>
            </View>
        );
    }
}
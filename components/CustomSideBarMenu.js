import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Image,
  TouchableOpacity, TextInput, Alert, Modal,
  ScrollView, KeyboardAvoidingView} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { RFValue } from "react-native-responsive-fontsize";
import db from '../config';
import firebase from 'firebase';
import { DrawerItems } from "react-navigation-drawer";

export default class CustomSideBarMenu extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View>
           
          </View>
          <Text></Text>
            <View style={{ flex: 0.6 }}>
              <DrawerItems {...this.props} />
            </View>
            <View style={styles.logOutContainer}>
          <TouchableOpacity
            style={styles.logOutButton}
            onPress={() => {
              this.props.navigation.navigate('WelcomeScreen');
              firebase.auth().signOut();
            }}
          >
            <Text>
              Log Out
            </Text>
          </TouchableOpacity>
          <Icon
            name = 'logout'
            type = 'antdesign'
            size = {RFValue(20)}
            iconStyle = {{paddingLeft: RFValue(10)}}
          />
        </View>
        </View>
      );
    }
  }

  var styles = StyleSheet.create({
    container: {
      flex: 1
    },
    drawerItemsContainer: {
      flex: 0.88
    },
    logOutContainer: {
      flex: 0.2,
      justifyContent: 'flex-end',
      paddingBottom: 30
    },
    logOutButton: {
      height: 30,
      width: '100%',
      justifyContent: 'center',
      padding: 10
    },
    logOutText: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    imageContainer: {
      flex: 0.75,
      width: "40%",
      height: "20%",
      marginLeft: 20,
      marginTop: 30,
      borderRadius: 40,
    },
  })
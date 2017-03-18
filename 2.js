import React, {Component} from 'react';
import {
  AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity
} from 'react-native';

var Platform = require('react-native').Platform;
var ImagePicker = require('react-native-image-picker');


export default class CameraRollPicker extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          {this.state.image?<Image style={{flex: 1}} source={this.state.image}></Image>:null}
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.chooseImage}>
            <Text style={styles.buttonText}>Choose Images...</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'gray',
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  buttonText:{
    color: 'white'
  }
});

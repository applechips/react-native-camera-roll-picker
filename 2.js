import React, {Component} from 'react';
import {
  AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity
} from 'react-native';

var Platform = require('react-native').Platform;
var ImagePicker = require('react-native-image-picker');


export default class CameraRollPicker extends Component {
/*
* The first arg is the options object for customization (it can also be null or omitted for default options),
* The second arg is the callback which sends object: response (more info below in README)
*/
chooseImage(){
  ImagePicker.showImagePicker({noData: true }, (response) => {
    // callback response
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      //If it is iOS, remove 'file://' prefix
      let source = {uri: response.uri.replace('file://', ''), isStatic: true};

      //If android, don't need to remove the 'file://'' prefix
      if (Platform.OS === 'android') {
        source = {uri: response.uri, isStatic: true};
      }

      this.setState({image: source});
    }
  });
}

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

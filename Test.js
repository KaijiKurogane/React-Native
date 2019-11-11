import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      year: 1996,
      name: 'Kaiji',
      color: ['red']
    };
  }
  updateYear = () => {
    this.setState({year: 2020});
    Alert.alert(
      'Hey You There!!!',
      'You have clicked Year',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
        <Text onPress = {this.updateYear}>{this.state.year}</Text>
        <Text>{this.state.color[0]}</Text>
        <Button color='#f194ff' style={styles.button} onPress = {this.updateYear} title="Click"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#32CD32',
  },
  button: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'green',
  }
});
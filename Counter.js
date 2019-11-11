import React, {Component} from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      counter: 0
    }
  }
  IncreaseCount = () => {
    this.setState({counter: this.state.counter + 1}, () => {
      if(this.state.counter == 33){
        Alert.alert('You have reach your limit'),
        this.setState({counter: this.state.counter * 0})
      }
    });
  }
  DecreaseCount = () => {
    this.setState({counter: this.state.counter - 1}, () => {
      if(this.state.counter == -1){
        Alert.alert('Cannot count to negative'),
        this.setState({counter: this.state.counter * 0})
      }
    });
  }
  ResetCount = () => {
    this.setState({counter: this.state.counter * 0});
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Counter{'\n'}</Text>
        <Text>
          {this.state.counter}{'\n'}
        </Text>
        <Button
          onPress ={this.IncreaseCount}
          title='Increase'
          style={styles.button}
        />
        <Text/>
        <Button
          onPress ={this.DecreaseCount}
          title='Decrease'
          style={styles.button}
        />
        <Text/>
        <Button
          onPress={this.ResetCount}
          title='Reset'
          style={styles.button}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'green',
  }
});
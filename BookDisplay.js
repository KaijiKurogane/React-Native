import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      book: 'React Native in Action'
    };
  }
  updateBook = () => {
    this.setState({book: 'Anything'});
  }
  render(){
    return(
      <BookDisplay updateBook={this.updateBook} book={this.state.book}/>
    );
  }
}

class BookDisplay extends Component {
  render(){
    return(
      <View>
        <Text onPress = {this.props.updateBook}>{this.props.book}</Text>
      </View>
    );
  }
}
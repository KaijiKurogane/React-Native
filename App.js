import React, {Component} from 'react';
import {View, Text} from 'react-native';
import BookDisplay from './BookDisplay';
import Test from './Test'
import BMI from './BMI';
import Counter from './Counter';
import Table from './Table'

export default class App extends Component{
  render(){
    return(
      <Table />
    );
  }
}
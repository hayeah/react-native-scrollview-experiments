import React from "react";

import {
  AppRegistry,

  ScrollView,
  StyleSheet,
  View,
} from "react-native";

export class App extends React.Component {
  render() {
    return (
      <ScrollView style={jss.scrollView}>
        <View style={jss.box}/>
        <View style={jss.box}/>
        <View style={jss.box}/>
        <View style={jss.box}/>
      </ScrollView>
    );
  }
}

const jss = StyleSheet.create({
  scrollView: {
    backgroundColor: 'lightgray'
  },

  box: {
    width: 300,
    height: 300,
    backgroundColor: 'gray',
    marginBottom: 10,
  }
});

AppRegistry.registerComponent('SampleApp', () => App);

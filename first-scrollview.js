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
    backgroundColor: 'rgba(255,0,0,0.3)'
  },

  box: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: '#666',
    marginBottom: 10,
  }
});

AppRegistry.registerComponent('SampleApp', () => App);
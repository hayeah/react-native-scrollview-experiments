import React from "react";

import {
  AppRegistry,

  ScrollView,
  StyleSheet,
  View,
} from "react-native";

function Row() {
  return (
    <ScrollView style={jss.row}
      horizontal={true}
      contentContainerStyle={jss.rowContentContainer}
      >
      <View style={jss.box}/>
      <View style={jss.box}/>
      <View style={jss.box}/>
      <View style={jss.box}/>
      <View style={jss.box}/>
      <View style={jss.box}/>
    </ScrollView>
  );
}

export class App extends React.Component {
  render() {
    return (
      <ScrollView style={jss.scrollView}
        contentContainerStyle={jss.scrollViewContentContainer}>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
      </ScrollView>
    );
  }
}

const jss = StyleSheet.create({
  scrollView: {
    backgroundColor: 'lightgray'
  },

  scrollViewContentContainer: {
    paddingTop: 50,
  },

  row: {
    flex: 1,
    marginBottom: 30,
  },

  rowContentContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    paddingLeft: 10,
  },

  box: {
    width: 80,
    height: 80,
    marginRight: 10,
    backgroundColor: 'gray',
  }
});

AppRegistry.registerComponent('SampleApp', () => App);

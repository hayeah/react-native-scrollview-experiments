import React from "react";

import {
  AppRegistry,
  StyleSheet,

  ScrollView,
  View,
  Text,
} from "react-native";

const NUM_ITEMS = 1000;
const numbers = Array.from({length: NUM_ITEMS}, (_, i) => i);

export class App extends React.Component {
  render() {
    const views = numbers.map(i => {
      return (
        <View key={i} style={jss.box}>
          <Text>{i}</Text>
        </View>
      );
    });

    return (
      <ScrollView style={jss.scrollView}
        contentContainerStyle={jss.contentContainerStyle}
        removeClippedSubviews={true}
        >
        {views}
      </ScrollView>
    );
  }
}

const jss = StyleSheet.create({
  scrollView: {
    backgroundColor: 'lightgray'
  },

  contentContainerStyle: {
    alignItems: 'center',
    paddingTop: 50,
  },

  box: {
    width: 300,
    height: 300,
    backgroundColor: 'gray',
    marginBottom: 10,
    overflow: 'hidden',
  }
});

AppRegistry.registerComponent('SampleApp', () => App);

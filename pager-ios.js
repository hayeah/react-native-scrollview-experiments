import React from "react";

import {
  AppRegistry,
  StyleSheet,
  Dimensions,

  ScrollView,
  View,
  Text,
} from "react-native";

const windowSize = Dimensions.get("window");

export class App extends React.Component {
  render() {
    const windowSize = Dimensions.get("window");

    const fullScreenSize = {
      width: windowSize.width,
      height: windowSize.height,
    };

    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        bounces={true}
        >

        <View style={[
          jss.page,
          fullScreenSize,
          { backgroundColor: 'rgba(255,0,0,0.3)' },
        ]}>
          <Text>Page 1</Text>
        </View>

        <View style={[
          jss.page,
          fullScreenSize,
          { backgroundColor: 'rgba(0,255,0,0.3)' },
        ]}>
          <Text>Page 2</Text>
        </View>

        <View style={[
          jss.page,
          fullScreenSize,
          { backgroundColor: 'rgba(0,0,255,0.3)' },
        ]}>
          <Text>Page 3</Text>
        </View>
    </ScrollView>
    );
  }
}

const jss = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('SampleApp', () => App);

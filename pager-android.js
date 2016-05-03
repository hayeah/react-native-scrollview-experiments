import React from "react";

import {
  AppRegistry,
  StyleSheet,
  Dimensions,

  ViewPagerAndroid,
  View,
  Text,
} from "react-native";


export class App extends React.Component {
  render() {
    const windowSize = Dimensions.get("window");

    const fullScreenSize = {
      width: windowSize.width,
      height: windowSize.height,
    };

    console.log("App#render", fullScreenSize);
    return (
      <ViewPagerAndroid
        style={fullScreenSize}
        >
        <View style={[
          jss.page,
          { backgroundColor: 'rgba(255,0,0,0.3)' },
        ]}>
          <Text>Page 1</Text>
        </View>

        <View style={[
          jss.page,
          { backgroundColor: 'rgba(0,255,0,0.3)' },
        ]}>
          <Text>Page 2</Text>
        </View>

        <View style={[
          jss.page,
          { backgroundColor: 'rgba(0,0,255,0.3)' },
        ]}>
          <Text>Page 3</Text>
        </View>
      </ViewPagerAndroid>
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

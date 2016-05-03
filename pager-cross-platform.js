import React from "react";

// TODO: figure out where this is exported -.-. Use haste module seems to work.
var ReactElement = require('ReactElement');

import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Platform,

  ScrollView,
  ViewPagerAndroid,
  View,
  Text,
} from "react-native";

// @prop size Size of the pager.
function Pager(props) {
  const PagerClass = Platform.OS === "ios" ? PagerIOS : PagerAndroid;

  return <PagerClass {...props}/>
}

function PagerAndroid(props) {
  const { size } = props;
  return (
    <ViewPagerAndroid
        style={size}>
      {props.children}
    </ViewPagerAndroid>
  );
}

function PagerIOS(props) {
  const { size } = props;

  const stretchedChildren = React.Children.map(props.children, function(child) {
    if (!child) {
      return null;
    }
    var newProps = {
      ...child.props,
      style: [child.props.style, {
        width: size.width,
        height: size.height,
      }],

      // Disable Android Optimization
      // https://facebook.github.io/react-native/docs/view.html#collapsable
      collapsable: false,
    };
    if (child.type &&
        child.type.displayName &&
        (child.type.displayName !== 'RCTView') &&
        (child.type.displayName !== 'View')) {
      console.warn('Each ViewPager child must be a <View>. Was ' + child.type.displayName);
    }

    return ReactElement.createElement(child.type, newProps);
  });

  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      >
      {stretchedChildren}
    </ScrollView>

  );
}

export class App extends React.Component {
  render() {
    const windowSize = Dimensions.get("window");

    const fullScreenSize = {
      width: windowSize.width,
      height: windowSize.height,
    };

    return (
      <Pager size={fullScreenSize}>
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
      </Pager>
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

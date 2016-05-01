import React from "react";

import {
  AppRegistry,

  ScrollView,
  StyleSheet,
  View,
} from "react-native";

// export class App extends React.Component {
//   render() {
//     return (
//       <View style={jss.container}>
//         <View style={jss.scrollViewParent}>
//           <ScrollView style={jss.scrollView}
//             contentContainerStyle={jss.contentContainerStyle}>
//             <View style={jss.box}/>
//             <View style={jss.box}/>
//             <View style={jss.box}/>
//             <View style={jss.box}/>
//           </ScrollView>
//         </View>

//         <View style={jss.scrollViewParent}>
//           <ScrollView style={jss.scrollView}
//             contentContainerStyle={jss.contentContainerStyle}>
//             <View style={jss.box}/>
//             <View style={jss.box}/>
//             <View style={jss.box}/>
//             <View style={jss.box}/>
//           </ScrollView>
//         </View>


//       </View>
//     );
//   }
// }

export class App extends React.Component {
  render() {
    return (
      <View style={jss.container}>

          <ScrollView style={jss.scrollView}
            contentContainerStyle={[jss.contentContainerStyle, jss.topScrollViewBG]}>
            <View style={jss.box}/>
            <View style={jss.box}/>
            <View style={jss.box}/>
            <View style={jss.box}/>
          </ScrollView>



          <ScrollView style={jss.scrollView}
            contentContainerStyle={[jss.contentContainerStyle, jss.bottomScrollViewBG]}>
            <View style={jss.box}/>
            <View style={jss.box}/>
            <View style={jss.box}/>
            <View style={jss.box}/>
          </ScrollView>



      </View>
    );
  }
}

const jss = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollViewParent: {
    flex: 1,
  },

  topScrollViewBG: {
    backgroundColor: 'blue',
  },

  bottomScrollViewBG: {
    backgroundColor: 'red',
  },



  // scrollView: {
  //   flex: 1,
  //   alignSelf: 'stretch',
  // },

  contentContainerStyle: {
    alignItems: 'center',
    paddingTop: 50,
  },

  box: {
    width: 300,
    height: 300,
    backgroundColor: 'gray',
    marginBottom: 10,
  }
});

AppRegistry.registerComponent('SampleApp', () => App);

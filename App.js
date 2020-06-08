/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Video from './Video.js';

class App extends React.Component {
  state = {
    videos: [],
  };

  componentDidMount = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyCqZ_-Q_sMnTjG3PXrHrn_piZ4bUeJt0_I`,
    )
      .then(data => data.json())
      .then(json => {
        console.log(json)
        this.setState({videos: json.items});
      });
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.mainText}>Youtube Search</Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Enter your search"
            />
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              {this.state.videos.map(ele => (
                <Video key={ele.etag} styles={styles} snippet={ele.snippet}/>
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  mainText: {
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 19,
  },
  textInputStyle: {
    borderWidth: 0.25,
    borderColor: 'black',
    width: '70%',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 13,
    borderRadius: 10,
  },
});

export default App;

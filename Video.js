import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';

class Video extends React.Component {
  render = () => {
    return (
      <>
        <View style={this.props.styles.sectionContainer}>
          <Image
            style={{width: "100%", height: 360}}
            source={{uri: this.props.snippet.thumbnails.high.url}}
          />
          <Text style={this.props.styles.sectionTitle}>
            {this.props.snippet.title}
          </Text>
          <Text style={this.props.styles.sectionDescription}>
            {this.props.snippet.description}
          </Text>
        </View>
      </>
    );
  };
}

export default Video;

import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
const videoURL = require('../../assets/videos/Ntosflix.mp4')
export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../../assets/videos/Ntosflix.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        shouldPlay={true}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex'
    }
    , 
    video: {
        height: '90%',
        width: '100%'
    }, 
    buttons: {
        width: 150, height: 50
    }
})
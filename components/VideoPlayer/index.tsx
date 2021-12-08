import React, { Component, useRef , useState , useEffect} from 'react'
import { View, Text } from 'react-native'
import { Episode } from '../../types'
import {Video} from 'expo-av'
import { setStatusBarBackgroundColor } from 'expo-status-bar'
import styles from './styles'
import { Playback } from 'expo-av/build/AV'
 
interface VideoPlayerProps {
    
    episode: Episode
}
const videoURL = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'


const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;
  const video = useRef<Playback>(null);
  const [status, setStatus] = useState({})

  useEffect(()=>{
      if(!video) {
          return ;
      }
      (async()=>{
          await video?.current?.unloadAsync()
          await video?.current?.loadAsync(
              {uri: videoURL},
              {},
              false
          );

      });
  }, [episode])
    return (
        <View>
            <Video
            ref={video}
            style={styles.video}
            // style={{
            //     width:'100%', height: 200
            // }}
            source={{
                uri: videoURL
            }}
            usePoster={true}
            posterSource={{
                uri: episode.poster
            }}
            posterStyle={{
                resizeMode:'cover'
            }}
            useNativeControls
            resizeMode='contain'
            onPlaybackStatusUpdate={status => setStatus(()=> status)}
            />
            
        </View>
    )
}

export  default VideoPlayer;
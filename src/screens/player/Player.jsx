import {View, Text, TouchableOpacity, Touchable, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';

import IonIcon from 'react-native-vector-icons/Ionicons';

const Player = ({navigation}) => {
  const [clicked, setClicked] = useState(false);
  const [puased, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [play, setPlay] = useState(true);
  const ref = useRef();
  const onBackPress = () => {
    navigation.navigate('Guide');
  };
  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };
  

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{width: '100%', height: fullScreen ? '100%' : 200}}
        onPress={() => {
          setClicked(true);
        }}>
        <Video
          paused={puased}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          ref={ref}
          onProgress={x => {
            // console.log(x)
            setProgress(x);
          }}
          // Can be a URL or a local file.
          //  ref={(ref) => {
          //    this.player = ref
          //  }}                                      // Store reference
          onBuffer={e => setPlay(!play)} // Callback when remote video is buffering
          //  onError={this.videoError}

          // Callback when video cannot be loaded

          style={{width: '100%', height: fullScreen ? '100%' : 200}}
          resizeMode="contain"
        />
        {clicked &&
          (play ? (
            <TouchableOpacity
              onPress={() => setClicked(!clicked)}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,.5)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    ref.current.seek(parseInt(progress.currentTime) - 10);
                  }}>
                  <Image
                    source={require('../../assets/backward.png')}
                    style={{width: 30, height: 30, tintColor: 'white'}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setPaused(!puased);
                  }}>
                  <Image
                    source={
                      puased
                        ? require('../../assets/play-button.png')
                        : require('../../assets/pause.png')
                    }
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: 'white',
                      marginLeft: 50,
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    ref.current.seek(parseInt(progress.currentTime) + 10);
                  }}>
                  <Image
                    source={require('../../assets/forward.png')}
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: 'white',
                      marginLeft: 50,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  bottom: 0,
                  paddingLeft: 20,
                  paddingRight: 20,
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>
                  {format(progress.currentTime)}
                </Text>
                <Slider
                  style={{width: '80%', height: 40}}
                  minimumValue={0}
                  maximumValue={progress.seekableDuration}
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="#fff"
                  onValueChange={x => {
                    ref.current.seek(x);
                  }}
                value={1}
                />
                <Text style={{color: 'white'}}>
                  {format(progress.seekableDuration)}
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  top: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                  alignItems: 'center',
                }}>
                {!fullScreen && (
                  <TouchableOpacity onPress={() => onBackPress()}>
                    <IonIcon name="arrow-back" size={25} color="white" />
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  onPress={() => {
                    if (fullScreen) {
                      Orientation.lockToPortrait();
                    } else {
                      Orientation.lockToLandscape();
                    }
                    setFullScreen(!fullScreen);
                  }}>
                  <Image
                    source={
                      fullScreen
                        ? require('../../assets/minimize.png')
                        : require('../../assets/full-size.png')
                    }
                    style={{width: 24, height: 24, tintColor: 'white'}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,.5)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
             <Image  source={require('../../assets/loader.gif')} style={{width:20,height:20}}/>
            </View>
          ))}
      </TouchableOpacity>
      <View style={{padding:10}}><Text style={{color:'black'}}>Video Details</Text></View>
    </View>
  );
};

export default Player;

//http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4

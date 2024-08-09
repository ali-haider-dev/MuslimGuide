import {View, Text, TouchableOpacity, Touchable, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';

import IonIcon from 'react-native-vector-icons/Ionicons';


const Player = ({navigation,route}) => {
const [videoUrl,setVideoUrl] = useState("") 
  useEffect(() => {
    const videoUrl = route.params.videoUrl;
     setVideoUrl(videoUrl)
   console.log(videoUrl)
  }, [])
  
  const [clicked, setClicked] = useState(false);
  const [puased, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [play, setPlay] = useState(true);
  const ref = useRef();


  const onBackPress = () => {
    navigation.goBack();
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
            uri: videoUrl,
          }}
          ref={ref}
          onProgress={x => {
            // console.log(x)
            setProgress(x);
            
          }}
      
          onBuffer={e => setPlay(!play)} 
           onError={(e)=>console.log(e)}

          // Callback when video cannot be loaded

          style={{width: '100%', height: fullScreen ? '100%' : 200}}
          resizeMode="contain"
        />
        {clicked &&
          (
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
             
             {!play ? <Image  source={require('../../assets/loader.gif')} style={{width: 30,
                   height: 30,
                   
                   marginLeft: 50,backgroundColor:'transparent'}} />:
                 
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
             
             }
                
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
                value={ parseInt(progress.currentTime)}
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
          ) }
      </TouchableOpacity>
      <View style={{padding:10}}><Text style={{color:'black'}}>Video Details</Text></View>
    </View>
  );
};

export default Player;



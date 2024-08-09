import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const VideoCard = () => {

  const navigation = useNavigation()


  return (
    
    <View
      style={{
        position: 'relative',
        borderRadius: 20,
        height: 200,
        width: 150,
      }}
     >
      <TouchableOpacity  onPress={()=>{navigation.navigate('Player') }}>
      <Image
        source={{
          uri: 'http://img.youtube.com/vi/wm5gMKuwSYk/default.jpg',
        }}
        style={{
          height: 100,
          width: 150,
          resizeMode: 'cover',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
       <Image
        source={require('../assets/play-button.png')}
        style={{
          width: 30,
          height: 30,
          tintColor: 'white',
          borderColor: 'green',
          borderWidth: 1,
          borderRadius: 50,
          position: 'absolute',
          top: 40,
          left: 55,
        }}
      />
      </TouchableOpacity>
      
     
      <View
        onPress={() => console.log()}
        style={{
          backgroundColor: 'green',
          position: 'absolute',
          top: 80,
          width: '100%',
          height: 100,
          borderRadius: 10,
          padding: 5,
        }}>
        <View>
          <Text style={{fontSize: 18, fontWeight: '600', color: 'white'}}>
            Umrah Guide Part 1/5
          </Text>
          <View>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <IonIcon name="heart" size={20} color="white" />
            <IonIcon name="share-social-outline" size={20} color="white" />
            </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <Text style={{fontWeight:'600',color:"white",fontSize:12}}>3 weeks ago</Text>
            <Text style={{fontWeight:'600',color:"white",fontSize:10}}>99k views</Text>
          </View>

          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoCard;

import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  BackHandler,
  TextInput,
  ScrollView,
} from 'react-native';

import Icon2 from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {videoData} from "../../components/VideoData"
// import VideoCard from '../../components/VideoCard';

const filterTabs = [
  'For You',
  'Bussiness',
  'Community',
  'Education',
  'Lifestyle',
  'Family',
  'Inspiration',
  'Faith',
];

const Discover = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(filterTabs[0]);
  const [forYou,setForYou] = useState([])
  const [bussiness,setBussiness] = useState([])
  const [community,setCommunity] = useState([])
  const [education,setEducation] = useState([])
  const [lifestyle,setLifeStyle] = useState([])
  const [family,setFamily] = useState([])
  const [inspiration,setInspiration] = useState([])
  const [faith,setFaith] = useState([])
  const [trending,setTrending]= useState([])
  
  

  const renderVideos = ({ item }) => (

       <View
              style={{
                position: 'relative',
                borderRadius: 20,
                height: 130,
                width: 100,
              }}>
              <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Player',{videoUrl:item.videoUrl});
                }}>
                <Image
                  source={{
                    uri: item.thumbnailUrl,
                  }}
                  style={{
                    height: 120,
                    width: 160,
                    resizeMode: 'cover',
                    borderRadius: 10,
                  }}
                />
                <Image
                  source={require('../../assets/play-button.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    borderColor: 'green',
                    borderWidth: 1,
                    borderRadius: 50,
                    position: 'absolute',
                    top: 48,
                    left: 58,
                  }}
                />
              </TouchableOpacity>
            </View>
  
  );
   
useEffect(() => {
    const forYouVideos = [];
    const bussinessVideos = [];
    const communityVideos = [];
    const educationVideos = [];
    const lifestyleVideos = [];
    const familyVideos = [];
    const inspirationVideos = [];
    const faithVideos = [];
    const trendingVideos = [];
    videoData.map((item)=>{
        // Check the "type" field to determine where to categorize the product
        if (item.type === "For You") {
          forYouVideos.push(item);
        } else if (item.type === "Bussiness") {
          bussinessVideos.push(item);
        } else if (item.type === "Community") {
        communityVideos.push(item);
        }else if (item.type === "Education") {
          educationVideos.push(item);
        }else if (item.type === "LifeStyle") {
          lifestyleVideos.push(item);
        }else if (item.type === "Family") {
          familyVideos.push(item);
        }else if (item.type === "Inspiration") {
          inspirationVideos.push(item);
      }else if (item.type === "Faith") {
          faithVideos.push(item);
        }
      else if (item.type === "Trending") {
          trendingVideos.push(item);
        }
      });

      setForYou(forYouVideos)
      setBussiness(bussinessVideos)
      setCommunity(communityVideos)
      setEducation(educationVideos)
    setLifeStyle(lifestyleVideos)
    setFamily(familyVideos)
    setInspiration(inspirationVideos)
    setFaith(faithVideos)
    setTrending(trendingVideos)
}, [activeTab])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          paddingVertical: 10,
          borderRadius: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <IonIcon name="list-outline" size={32} color="green" />
        <Icon2 name="search" size={32} color="green" />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            fontWeight: '700',
            marginBottom: 5,
            marginRight: 5,
          }}>
          Trending this week
        </Text>
        <Image source={require('../../assets/DiscoveryStar.png')} />
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 0}}>
          
          {trending.map((item)=>(
          <View
          key={item.id}
          style={{
            position: 'relative',
            borderRadius: 20,
            height: 150,
            width: 270,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Player',{videoUrl:item.videoUrl});
            }}>
            <Image
              source={{
                uri: item.thumbnailUrl,
              }}
              style={{
                height: 150,
                width: 260,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Image
              source={require('../../assets/play-button.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: 'white',
                borderColor: 'green',
                borderWidth: 1,
                borderRadius: 50,
                position: 'absolute',
                top: 60,
                left: 110,
              }}
            />
          </TouchableOpacity>
        </View>
          ))}
           
        </ScrollView>
      </View>
<View>
<ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 15,
        }}>
        {filterTabs.map((data, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveTab(data)}
              style={{
                paddingRight: 20,
                // marginRight: 10,
                paddingVertical: 5,
              }}>
              <Text
                style={{
                  color: activeTab == data ? 'green' : 'black',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                {data}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
</View>
    

      {/* Videos */}
{activeTab === "For You" && 
 <FlatList
       numColumns={2}
        data={forYou}
        columnWrapperStyle={{gap:70}}
        renderItem={renderVideos}
        keyExtractor={(item) => item.id}
      contentContainerStyle={{marginVertical:5}}
      />}
      {activeTab === "Bussiness" && 
 <FlatList
       numColumns={2}
        data={bussiness}
        columnWrapperStyle={{gap:70}}
        renderItem={renderVideos}
        keyExtractor={(item) => item.id}
      contentContainerStyle={{marginVertical:5}}
      />}
        {activeTab === "Community" && 
 <FlatList
       numColumns={2}
        data={community}
        columnWrapperStyle={{gap:70}}
        renderItem={renderVideos}
        keyExtractor={(item) => item.id}
      contentContainerStyle={{marginVertical:5}}
      />}
      {activeTab === "Education" && 
 <FlatList
       numColumns={2}
        data={education}
        columnWrapperStyle={{gap:70}}
        renderItem={renderVideos}
        keyExtractor={(item) => item.id}
      contentContainerStyle={{marginVertical:5}}
      />}
  {activeTab === "lifestyle" && 
 <FlatList
       numColumns={2}
        data={lifestyle}
        columnWrapperStyle={{gap:70}}
        renderItem={renderVideos}
        keyExtractor={(item) => item.id}
      contentContainerStyle={{marginVertical:5}}
      />}
       {activeTab === "Family" && 
 <FlatList
       numColumns={2}
        data={family}
        columnWrapperStyle={{gap:70}}
        renderItem={renderVideos}
        keyExtractor={(item) => item.id}
      contentContainerStyle={{marginVertical:5}}
      />}
       {activeTab === "Inspiration" && 
 <FlatList
       numColumns={2}
        data={inspiration}
        columnWrapperStyle={{gap:70}}
        renderItem={renderVideos}
        keyExtractor={(item) => item.id}
      contentContainerStyle={{marginVertical:5}}
      />}
       {activeTab === "Faith" && 
 <FlatList
       numColumns={2}
        data={faith}
        columnWrapperStyle={{gap:70}}
        renderItem={renderVideos}
        keyExtractor={(item) => item.id}
      contentContainerStyle={{marginVertical:5}}
      />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Discover;

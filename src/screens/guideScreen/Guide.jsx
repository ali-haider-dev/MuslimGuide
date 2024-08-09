import React, { useContext, useEffect, useState } from "react";
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
} from "react-native";


import Icon2 from "react-native-vector-icons/MaterialIcons";
import IonIcon from "react-native-vector-icons/Ionicons";


import VideoCard from "../../components/VideoCard";

const Guide = ({navigation}) => {
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isModalVisible, setModalVisible] = useState(false);

  const [filteredSpaces, setFilteredSpaces] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text) => {
    setSearchQuery(text);
    // filterData(text);
  };

//   const filterData = (text) => {
//     const filtered = spaces.filter((space) => {
//       return (
//         space.name.toLowerCase().includes(text.toLowerCase()) ||
//         space.location.city.toLowerCase().includes(text.toLowerCase())
//       );
//     });
//     setFilteredSpaces(filtered);
//   };

 





  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 16,
        gap: 10,
        backgroundColor: "#fff",
      }}
    >
        <ScrollView>
      <View
        style={{
          paddingVertical: 10,
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IonIcon name="arrow-back-circle-outline" size={32} color="green" />

          <Text style={{ color: "black" }}></Text>
        </View>
        <Text style={{ color: "green", fontSize: 24, fontWeight: 900 }}>
          Guides
        </Text>
        <IonIcon name="list-outline" size={32} color="green" />
      </View>
      <View
        style={{
          borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 20,
          borderColor: "#8395a7",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flex: 1,
          }}
        >
          <Icon2 name="search" size={24} color="#8395a7" />
          <TextInput
            style={{
              fontFamily: "Outfit-Medium",
              color: "black",
              flex: 1,
              fontSize: 14,
              marginLeft: 8,
            }}
            placeholder="What are you looking for...."
            placeholderTextColor="black"
            onChangeText={handleSearch}
            value={searchQuery}
          ></TextInput>
        </View>
      </View>
      <View style={{ width: "98%" }}>
        <Text style={{ fontSize: 40, color: "black" }}>Explore Our</Text>
        <Text style={{ fontSize: 40, color: "black" }}>Comprehensive </Text>

        <Text style={{ color: "green", fontSize: 40, fontWeight: 700 }}>
          Guides
        </Text>
      </View>
      {/* Video guides */}
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 18,
              fontWeight: "500",
              marginBottom: 5,
            }}
          >
            Video Guides
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "green", fontWeight: "500" }}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal contentContainerStyle={{ gap: 15 }}>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
        
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "black", fontSize: 22, fontWeight: "500" }}>
          Categories
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "green", fontWeight: "500" }}>View All</Text>
        </TouchableOpacity>
      </View>
      {/* Categories */}
      <>
        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <TouchableOpacity style={{ width: 90, height: 120 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
             <Image source={require('../../assets/hajGuide.png')} size={10}/>
          </View>
          <Text style={{ color: "black", textAlign: "center",fontWeight:'600' }}>Hajj Guide</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: 90, height: 120 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
             <Image source={require('../../assets/UmrahGuide.png')} size={10}/>
          </View>
          <Text style={{ color: "black", textAlign: "center",fontWeight:'600' }}>Umrah Guide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 90, height: 120 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
         <Image source={require('../../assets/Wudu.png')} size={10}/>
          </View>
          <Text style={{ color: "black", textAlign: "center",fontWeight:'600' }}>Wudu Guide</Text>
        </TouchableOpacity>
        </View>
       
        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <TouchableOpacity style={{ width: 90, height: 120 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
             <Image source={require('../../assets/Women.png')} size={10}/>
          </View>
          <Text style={{ color: "black", textAlign: "center",fontWeight:'600' }}>Women Guide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 90, height: 120 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
             <Image source={require('../../assets/SalahGuide.png')} size={10}/>
          </View>
          <Text style={{ color: "black", textAlign: "center",fontWeight:'600' }}>Salah Guide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 90, height: 120 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
         <Image source={require('../../assets/Fasting&Ramadan.png')} size={10}/>
          </View>
          <Text style={{ color: "black", textAlign: "center",fontWeight:'600' }}>Fasting and Ramadan</Text>
        </TouchableOpacity>
        </View>
       
        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <TouchableOpacity style={{ width: 90, height: 120 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
             <Image source={require('../../assets/Zakat.png')} size={10}/>
          </View>
          <Text style={{ color: "black", textAlign: "center",fontWeight:'600' }}>Zakat Calculation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 90, height: 120 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
             <Image source={require('../../assets/Ettiquate.png')} size={10}/>
          </View>
          <Text style={{ color: "black", textAlign: "center",fontWeight:'600',  }}>Islamic Etiquettes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 90, height: 120 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
         <Image source={require('../../assets/study&learning.png')} size={10}/>
          </View>
          <Text style={{ color: "black", textAlign: "center",fontWeight:'600' }}>Study and Learning</Text>
        </TouchableOpacity>
        </View>
       
      </>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Guide;

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, ScrollView, Image } from 'react-native';
import styleDr from './styleDr';
import { SERVER_URL } from '../../constants';
// Backend API endpoint to retrieve data from MongoDB
const URL = SERVER_URL + `/api/doctor/findRating`;

import { useNavigation } from '@react-navigation/native';
const Category = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView style={styleDr.s2}>
        <Text style={styleDr.h1}>Categories</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styleDr.catdiv}>
            <TouchableOpacity
              style={styleDr.catbtn}
              onPress={() => navigation.navigate('Nuero')}>
              <Image
                style={styleDr.catimg}
                source={require('../assets/brain.png')}
              />
              <Text style={styleDr.cattext}> Nuero</Text>
            </TouchableOpacity>
          </View>

          <View style={styleDr.catdiv}>
            <TouchableOpacity
              style={styleDr.catbtn}
              onPress={() => Sendtobackend()}>
              {/* onPress={()=>navigation.navigate('bottomNavigation')} */}
              <Image
                style={styleDr.catimg}
                source={require('../assets/brain.png')}
              />
              <Text style={styleDr.cattext}> abcds </Text>
            </TouchableOpacity>
          </View>

          <View style={styleDr.catdiv}>
            <TouchableOpacity
              style={styleDr.catbtn}
              onPress={() => Sendtobackend()}>
              {/* onPress={()=>navigation.navigate('bottomNavigation')} */}
              <Image
                style={styleDr.catimg}
                source={require('../assets/foot.png')}
              />
              <Text style={styleDr.cattext}> Orhto</Text>
            </TouchableOpacity>
          </View>

          <View style={styleDr.catdiv}>
            <TouchableOpacity
              style={styleDr.catbtn}
              onPress={() => Sendtobackend()}>
              {/* onPress={()=>navigation.navigate('bottomNavigation')} */}
              <Image
                style={styleDr.catimg}
                source={require('../assets/kidneys.png')}
              />
              <Text style={styleDr.cattext}>Nephrol</Text>
            </TouchableOpacity>
          </View>

          <View style={styleDr.catdiv}>
            <TouchableOpacity
              style={styleDr.catbtn}
              onPress={() => Sendtobackend()}>
              {/* onPress={()=>navigation.navigate('bottomNavigation')} */}
              <Image
                style={styleDr.catimg}
                source={require('../assets/heart.png')}
              />
              {/* <Text style={styleDr.cattext}>Cardio</Text> */}
            </TouchableOpacity>
          </View>

          <View style={styleDr.catdiv}>
            <TouchableOpacity
              style={styleDr.catbtn}
              onPress={() => Sendtobackend()}>
              {/* onPress={()=>navigation.navigate('bottomNavigation')} */}
              <Image
                style={styleDr.catimg}
                source={require('../assets/lungs.png')}
              />
              <Text style={styleDr.cattext}>Pulmonol</Text>
            </TouchableOpacity>
          </View>

          <View style={styleDr.catdiv}>
            <TouchableOpacity
              style={styleDr.catbtn}
              onPress={() => Sendtobackend()}>
              {/* onPress={()=>navigation.navigate('bottomNavigation')} */}
              <Image
                style={styleDr.catimg}
                source={require('../assets/eye.png')}
              />
              <Text style={styleDr.cattext}>Opthalm</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
    </View>

  );
};

export default Category
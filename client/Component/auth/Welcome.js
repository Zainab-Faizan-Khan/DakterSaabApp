import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styleAuth from './styleAuth/indexLogin';
import { useNavigation } from '@react-navigation/native';


const Welcome = ({}) => {
  const navigation= useNavigation();
  return (
    <>
      <View style={styleAuth.container}>
        <Image
          source={require('../assets/bg2.jpg')}
          style={styleAuth.imageBG}
        />
       <View style={styleAuth.btndiv}>
          <TouchableOpacity style={styleAuth.welbtn} 
            onPress={() => navigation.navigate('login')}
            >
            <Text style={styleAuth.weltext}>LogIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleAuth.welbtn}
            onPress={() => navigation.navigate('Register')}
            >
            <Text style={styleAuth.weltext}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Welcome;

import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { BGColor, rgbaColor } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Welcome = ({ }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container1}>
        <Image source={require('../assets/logo.png')}
          style={styles.imageBG}/>

        <View style={styles.btndiv}>
          <TouchableOpacity style={styles.welbtn}
            onPress={() => navigation.navigate('login')}>
            <Text style={styles.weltext}>LogIn</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.welbtn}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.weltext}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container1: {
    // backgroundColor:"#87CEEB",
    // backgroundColor:"#A7C7E7", 
    backgroundColor: "#ADD8E6",
    height:"100%",
    display: "flex",
    justifyContent: "center",
    alignItems:'center'
  },
  btndiv: {
    // backgroundColor: 'pink',
  },
  welbtn: {
    backgroundColor: 'white',
    height: 50,
    width: 180,
    // marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 20,
    marginTop: 20,
  },
  weltext: {
    color: BGColor,
    fontFamily: 'serif'
  },

  imageBG: {
    // position: "absolute",
    // zIndex: -1,
    height: 250,
    width: 250,
  },
});


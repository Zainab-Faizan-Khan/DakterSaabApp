import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../navigation/data/metrics"
import { BGColor } from "../../../constants"
// import styles from "./bbstyles"

const { width: screenWidth } = Dimensions.get('window');
const images = [
  require('../assets/c1.jpg'),
  require('../assets/c2.jpg'),
  require('../assets/c4.jpg'),
  require('../assets/c3.jpg'),
];

export default function Blood({ navigation, route }) {
  const { email } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (

    <>
      <View style={styles.container}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={[
              styles.imagee,
              { left: screenWidth * (index - currentIndex) },
            ]}
            resizeMode="contain"
          />
        ))}
      </View>
      <View style={styles.btndiv}>
        <TouchableOpacity style={styles.BBtn} onPress={() => navigation.navigate('BloodBank', { email: email })}>
          <Text style={styles.BText}>Find Blood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BBtn} onPress={() => navigation.navigate('Donate', { email: email })}>
          <Text style={styles.BText}>Register As A Donor</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    width: screenWidth * images.length,
  },
  imagee: {
    position: 'absolute',
    width: screenWidth,
    height: '100%',
  },

// ----buttton--- 
  btndiv: {
    // marginTop: 20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

  },
  BBtn: {
    marginTop: 15,
    backgroundColor: 'pink',
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: 'red',
  },
  BText: {
    fontSize: 16,
    fontFamily: 'serif',
    color: 'black',
  },
});


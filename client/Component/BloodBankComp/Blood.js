import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./bbstyles"



export default function Blood({ navigation,route }) {
  const { email } = route.params;
  return (
    
    <>
      <ScrollView style={styles.cdiv} horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image style={styles.cimg}
          source={require('../assets/c1.jpg')} />
        <Image style={styles.cimg}
          source={require('../assets/c2.jpg')} />
        <Image style={styles.cimg}
          source={require('../assets/c3.jpg')} />
        <Image style={styles.cimg}
          source={require('../assets/c4.jpg')} />
      </ScrollView>
      <View style={styles.btndiv}>
        <TouchableOpacity style={styles.BBtn} onPress={() => navigation.navigate('BloodBank',{ email: email })}>
          <Text style={styles.BText}>Find Blood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BBtn} onPress={() => navigation.navigate('Donate',{ email: email })}>
          <Text style={styles.BText}>Register As A Donor</Text>
        </TouchableOpacity>
      </View>
      
      </>
);
  
}


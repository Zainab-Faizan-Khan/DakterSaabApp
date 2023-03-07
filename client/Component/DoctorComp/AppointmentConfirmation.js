import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
const BGColor = "#6a6acc"
const rgbaColor = 'rgba(106, 106, 204, 0.2)'


const AppointmentConfirmation = ({ navigation, route }) => {
  // const { doctorName, appointmentDate, appointmentTime, patientName } = route.params;

  return (
    <>
    <View>
    <Text style={styles.header}>Appointment Confirmation</Text>
    </View>
    <ScrollView style={styles.container}>
      

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Doctor Name:</Text>
        <Text style={styles.value}>{'doctorName'}</Text>
      </View>
      <View style={styles.infoContainer}>
      <Text style={styles.label}>Category:</Text>
      <Text style={styles.value}>{'asdfgjk'}</Text>
      </View>

      <View style={styles.infoContainer}>
      <Text style={styles.label}>Appointment Date:</Text>
      <Text style={styles.value}>{'appointmentDate'}</Text>
      </View>
      

      <View style={styles.infoContainer}>
      <Text style={styles.label}>Appointment Time:</Text>
      <Text style={styles.value}>{'appointmentTime'}</Text>
      </View>
      <View style={styles.infoContainer}>
      <Text style={styles.label}>Patient Name:</Text>
      <Text style={styles.value}>{'patientName'}</Text>
      </View>
      

      <TouchableOpacity style={styles.bookbtn}  
          onPress={() => navigation.navigate('Confirmed')}>
            <Text style={styles.btntext}>Confirm</Text>
          </TouchableOpacity>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily:'serif',
    color:'black',
    padding:30,
    backgroundColor:BGColor,
    // marginBottom:10,
  },

  container: {
    padding: 30,
    // backgroundColor:'pink'
  },
  
  infoContainer: {
    // marginBottom:20,
    flexDirection:'row',
    // backgroundColor: rgbaColor,
    padding:10,
    // justifyContent:'space-between'
  },
  label: {
    fontWeight: 'bold',
    fontFamily:'serif',
    color:'black',
    fontSize: 15,
    // padding: 5,
    width:170
  },
  value: {
    fontSize: 14,
    fontFamily:'serif',
    // backgroundColor: rgbaColor,
    borderRadius: 5,
    marginLeft: 10,
    // width: "100%",
  },
  
  bookbtn: {
    marginTop: "3%",
    marginBottom: "8%",
    backgroundColor: '#6a6acc',
    height: 50,
    width: 160,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btntext: {
    color: 'white',
    fontFamily: 'serif',
  }
});

export default AppointmentConfirmation;



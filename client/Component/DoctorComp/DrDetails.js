import React from 'react'
import { Text, View, StyleSheet, ScrollView, verticalScale, SafeAreaView, ActivityIndicator, FlatList, Image, TouchableOpacity, } from 'react-native';
const BGColor = "#6a6acc"
const rgbaColor = 'rgba(106, 106, 204, 0.2)'

const DrDetails = ({navigation}) => {
  return (
    <>

      <View style={styles.container1}>
        <View style={styles.docdiv}>
          <View >
            <Image style={styles.docimg}
              source={require('../assets/doctor.png')} />
          </View>
          <View style={styles.dochead} >
            <Text style={styles.docname}>Dr.Ashfaq</Text>
            <Text style={styles.docspec}>Speciality: </Text>
            {/* {item.Speciality} */}
          </View>
        </View>

        <View style={styles.infodiv}>
            <Text style={styles.infoD}>
              <Text style={styles.infoT}>Field: </Text>
              {/* {item.Field} */}
            </Text>
            <Text style={styles.infoD}>
              <Text style={styles.infoT}>Consultancy Fees: </Text>
              {/* {item.ConsultancyFees} */}
            </Text>
            <Text style={styles.infoD}>
              <Text style={styles.infoT}>Hospital: </Text>
              {/* {item.Hospital} */}
            </Text>
        </View>

      </View>

 {/* schdule div */}
      <View style={styles.container2}>
        <View style={styles.scheddiv}>
          <Text style={styles.infoT}>Year: </Text>
          <Text style={styles.infoT}>Month: </Text>

          <View style={styles.datediv}>
            <Text style={styles.infoT}>day: </Text>
            <Text style={styles.infoT}>time: </Text>
          </View>

          {/* <TouchableOpacity style={styles.bookbtn}
            onPress={() => { Sendtobackend(); showAlert(); navigation.navigate('Home') }} >
            <Text style={styles.btntext}>Book Appointment</Text>
          </TouchableOpacity> */}

          <TouchableOpacity style={styles.bookbtn}  
          onPress={() => navigation.navigate('AppointmentConfirmation')}>
            <Text style={styles.btntext}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default DrDetails


const styles = StyleSheet.create({

  container1: {
    // backgroundColor: BGColor,
    padding:20,
  },
  docdiv: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor:'cyan',
    paddingLeft:"8%",
    marginTop:"5%",
  },
 
  docimg: {
    backgroundColor: 'white',
    backgroundColor: rgbaColor,

    borderRadius: 20,
    width: 120,
    height: 120,
  },
  dochead: {
    marginLeft: '8%',
  },
  docname: {
    // backgroundColor: 'orange',
    fontFamily: 'serif',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  docspec: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'serif',
    color:'black',
  },

  infodiv: {
    paddingLeft:"8%",
    paddingTop:"3%",
    // backgroundColor:'yellow'
  },
  infoT: {
    // marginTop:10,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: 'black',
  },
  infoD: {
    marginLeft: "4%",
    fontSize: 16,
    fontFamily: 'serif',
    color: 'black',
  },

  container2: {
    // marginTop: '5%',
    padding: 20,
  },
  scheddiv: {
    
    padding: 20,
    backgroundColor: rgbaColor,
    borderRadius: 15,
  },
  datediv: {
    marginTop: '5%',
  },
  bookbtn: {
    marginTop: "3%",
    backgroundColor: '#6a6acc',
    height: 50,
    width: 180,
    alignSelf: 'center',
    // marginHorizontal: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btntext: {
    color: 'white',
    fontFamily: 'serif',
  }
})

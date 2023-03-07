import { horizontalScale, moderateScale, verticalScale } from "../navigation/data/metrics";
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SERVER_URL, BGColor, rgbaColor } from '../../constants';
import ProfileHeader from "../screens/Header";


const OPDdr = ({ navigation, route }) => {
  const URL = SERVER_URL + `/api/doctor/findDr`;
  const { email } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // console.log(data);
  const filter = () => {
    data.sort((a, b) => a.ConsultancyFees - b.ConsultancyFees)
    console.log(data);
    setData([...data])
  };
  useEffect(() => {
    fetch(URL)
      .then(response => response.json()) // get response, convert to json
      .then(json => {
        // console.log(json);
        setData(json);
      })
      .catch(error => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);
  return (
    <>
      <View style={styles.s1}>
        <ProfileHeader email={email} />

        {/* ---------------- Search bar---------------- */}
        <View style={styles.sbar}>
          <View style={styles.search}>
            <TextInput style={styles.inputsearch}
              placeholder="Search Disease" />
          </View>
          <View style={styles.searchimgdiv}>
            <TouchableOpacity style={styles.search}>
              <Image style={styles.simg}
                source={require('../assets/sicon.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*----- Nearby hospitals -------- */}
      <SafeAreaView style={styles.maindiv} vertical={true} >
        <View style={styles.loc}>
          <Text style={styles.h1}>Nearby Doctors</Text>
        </View>

        <TouchableOpacity style={styles.docdiv}
          onPress={() => navigation.navigate('OPDHospitalDetails')}>

          <View style={styles.subdiv1}>
            <View style={styles.namediv}>
              <Image style={styles.drimg}
                source={require('../assets/hospital.png')} />
              <View>
                <Text style={styles.nametext}>Abbasi shaheed</Text>
              </View>
            </View>
          </View>

          <View style={styles.subdiv2}>
            <View style={styles.linediv}>
              <Image style={styles.line}
                source={require('../assets/line.png')} />
            </View>

            <View style={styles.infodiv}>
              <View style={styles.info}>
                <Image style={styles.infoimg}
                  source={require('../assets/address.png')} />
                <Text style={styles.infoF}>
                  <Text style={styles.infoH}>Location: </Text>
                  W2CH+4QG, Block 3 Nazimabad, Karachi
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.docdiv}
          onPress={() => navigation.navigate('OPDHospitalDetails')}>
          <View style={styles.subdiv1}>
            <View style={styles.namediv}>
              <Image style={styles.drimg}
                source={require('../assets/hospital.png')} />
              <View>
                <Text style={styles.nametext}>DOW Ojha</Text>
              </View>
            </View>
          </View>
          <View style={styles.subdiv2}>
            <View style={styles.linediv}>
              <Image style={styles.line}
                source={require('../assets/line.png')} />
            </View>
            <View style={styles.infodiv}>
              <View style={styles.info}>
                <Image style={styles.infoimg}
                  source={require('../assets/address.png')} />
                <Text style={styles.infoF}>
                  <Text style={styles.infoH}>Location: </Text>
                  Gulzar-e-Hijri Scheme-33, Suparco Road, Karachi
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.docdiv}
          onPress={() => navigation.navigate('OPDHospitalDetails')}>
          <View style={styles.subdiv1}>

            <View style={styles.namediv}>
              <Image style={styles.drimg}
                source={require('../assets/hospital.png')} />
              <View>
                <Text style={styles.nametext}>Jinnah Hospital</Text>
              </View>
            </View>
            
          </View>
          <View style={styles.subdiv2}>
            <View style={styles.linediv}>
              <Image style={styles.line}
                source={require('../assets/line.png')} />
            </View>
            <View style={styles.infodiv}>
              <View style={styles.info}>
                <Image style={styles.infoimg}
                  source={require('../assets/address.png')} />
                <Text style={styles.infoF}>
                  <Text style={styles.infoH}>Location: </Text>
                  Rafiqui, Sarwar Shaheed Rd, Karachi Cantonment, Karachi
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>



      </SafeAreaView>
    </>
  );
};

export default OPDdr;




const styles = StyleSheet.create({
  s1: {
    backgroundColor: BGColor,
    height: verticalScale(180),
    padding: moderateScale(20),
    zIndex: 20,
  },
  s: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    // backgroundColor:'pink',
  },
  heading: {
    fontWeight: "900",
    fontSize: 24,
    color: "white",
    fontFamily: "serif",
  },
  subhead: {
    color: 'black',
    fontSize: 16,
    fontFamily: "serif",
  },
  // -----------------------  Search bar-------------

  sbar: {
    flexDirection: 'row',
    justifyContent: "space-between",
    borderRadius: 25,
    backgroundColor: "rgb(200, 200, 222)",
    marginTop: verticalScale(8),
  },
  inputsearch: {
    fontSize: 16,
    fontFamily: 'serif',
    marginLeft: 20,
    width: "100%",
    // backgroundColor:"pink"
  },

  searchimgdiv: {
    marginRight: 20
  },
  search: {
    height: verticalScale(45),
    justifyContent: 'center',
  },
  simg: {
    width: 25,
    height: 25,
  },
  // ------------ Nearby doctor ------------
  maindiv: {
    paddingLeft: 20,
    paddingRight: 15,
    marginTop: 10,
  },
  h1: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    fontFamily: "serif",
  },

  docdiv: {
    marginTop: verticalScale(15),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: BGColor,
    paddingLeft: 15,
    paddingRight: 15,
  },

  subdiv1: {
    marginTop: "3%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:"pink"
  },
  namediv: {
    flexDirection: 'row',
    alignItems: "center"
  },
  drimg: {
    width: 60,
    height: 60,
    color: BGColor,
  },
  nametext: {
    marginLeft: "7%",
    fontFamily: 'serif',
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: "black",
  },
  Btn: {
    backgroundColor: '#6a6acc',
    height: verticalScale(40),
    width: horizontalScale(60),
    justifyContent: 'center',
    borderRadius: 10,
  },
  btntext: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif',
    fontSize: 12,
  },
  subdiv2: {
    marginTop: "3%",
    marginBottom: "2%",
    display: 'flex',
    flexDirection: 'row',
  },
  linediv: {
    justifyContent: "center",
  },
  line: {
    height: verticalScale(40),
    width: verticalScale(30),
  },
  infodiv: {
    marginLeft: "4%",
    justifyContent: 'center',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: "center",
  },
  infoimg: {
    height: verticalScale(20),
    width: verticalScale(20),
  },
  infoH: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: "black",
  },
  infoF: {
    marginLeft: "3%",
    fontSize: 14,
    fontFamily: 'serif',
    color: "black",
    width:270,
    flexWrap:"wrap",
    marginBottom: verticalScale(10),

  },


})
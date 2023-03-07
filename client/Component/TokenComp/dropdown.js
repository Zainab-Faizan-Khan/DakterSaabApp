import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, ActivityIndicator, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SERVER_URL } from '../../constants';
import { horizontalScale, moderateScale, verticalScale } from "../navigation/data/metrics";
const BGColor = "#6a6acc"
const rgbaColor = 'rgba(106, 106, 204, 0.2)'

// fariya ip add 192.168.0.109
// edurome ip address 10.57.182.136
//fetching data from the backend through url below
// this page = dropdown
export default function DropdownFilter({ fieldDr }) {
  const URL = SERVER_URL + `/api/OPDdr/find?field=${fieldDr}`;
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then(response => response.json()) // get response, convert to json
      .then(json => {
        setData(json);
      })
      .catch(error => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, [fieldDr]);

  return (
    <SafeAreaView vertical={true}>
      {/* While fetching show the indicator, else show response*/}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView vertical={true}>
          <View>
            <Text style={styles.h1}>Doctors</Text>
          </View>

          <FlatList horizontal={false}
            data={data}
            renderItem={({ item }) => (
              <View style={styles.docdiv} key={item._id}>

                <View style={styles.subdiv1}>
                  <View style={styles.namediv}>
                    <Image style={styles.drimg}
                      source={require('../assets/doc.png')} />
                    <Text style={styles.nametext}>{item.Name} </Text>
                  </View>
                  <View style={styles.Btndetaildiv}>
                    <TouchableOpacity style={styles.Btn}
                      onPress={() => { navigation.navigate('OPDdrDetail', { paramKey: item._id, }); }}>
                      <Text style={styles.btntext}>Details</Text>
                    </TouchableOpacity>
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
                        <Text style={styles.infoH}>Address: </Text>
                        {item.Branch}
                      </Text>
                    </View>

                    <View>
                      {item.Day.map((data, index) => {
                        return (

                          <View style={styles.info}>
                            <Image style={styles.infoimg}
                              source={require('../assets/clock.png')} />
                            <Text style={styles.infoF}>
                              <Text style={styles.infoH}>Day: </Text>
                              {data} ({item.Timing[index]})
                            </Text>
                          </View>

                        );
                      })}
                    </View>
                  </View>
                </View>
                {/* <TouchableOpacity style={styles.Btndetail} onPress={() => {   // Pass and merge params back to home screen
                                        navigation.navigate('BbDetails', { paramKey: item._id })
                                    }}>
                                        <Text style={styles.btntext}>Details</Text>
                                    </TouchableOpacity> */}
              </View>
            )}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  h1: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    fontFamily: "serif",
    // marginLeft: horizontalScale(14),
  },
  docdiv: {
    marginBottom: verticalScale(10),
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
    width: 40,
    height: 40,
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
    height: verticalScale(60),
    width: verticalScale(30),
  },
  infodiv: {
    marginLeft: "4%",
    justifyContent: 'center',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
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
    width: 270,
    flexWrap: "wrap",
    marginBottom: verticalScale(5),

  },



})
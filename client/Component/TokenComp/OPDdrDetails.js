import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity, ActivityIndicator, StyleSheet, } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SERVER_URL } from '../../constants';
import Weekdays from './Weekdays';
const BGColor = "#6a6acc"

const rgbaColor = 'rgba(106, 106, 204, 0.2)';

export default function OPDdrDetail() {
  const route = useRoute();
  const id = route.params.paramKey;
  const URL = SERVER_URL + `/api/OPDdr/find/${id}`;
  console.log(URL);
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
  }, [id]);
  SampleFunction = item => {
    Alert.alert(item);
  };
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get current month and year
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  const [isEnabled, setIsEnabled] = useState(true);

  // Disable the view after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsEnabled(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View style={styles.container1}>
            <View style={styles.docdiv}>
              <View style={styles.dochead}>
                <Text style={styles.docname}>{data.Name}</Text>
                <Text style={styles.hosploc}>
                  {data.Field} </Text>
              </View>
              <View>
                <Image
                  style={styles.docimg}
                  source={require('../assets/doc.png')} />
              </View>
            </View>
          </View>


          <View style={styles.container2}>
            <View style={styles.dochead}>
              <Text style={styles.infoF}>
                <Text style={styles.infoH}>Speciality: </Text>
                {data.Speciality}
              </Text>
              <Text style={styles.infoF}>
                <Text style={styles.infoH}>Fees: Rs.</Text>
                {data.ConsultancyFees}
              </Text>
              <Text style={styles.infoF}>
                <Text style={styles.infoH}>Hospital: </Text>
                {data.Hospital}
              </Text>
              <Text style={styles.infoF}>
                <Text style={styles.infoH}>Branch: </Text>
                {data.Branch}
              </Text>
            </View>
            <View>
              {data.Day.map((item, index) => {
                return (
                  <View>
                    <Text style={styles.infoF}>
                      <Text style={styles.infoH}>Day: </Text>
                      {item}
                    </Text>
                    <Text style={styles.infoF}>
                      <Text style={styles.infoH}>Timing: </Text>
                      {data.Timing[index]}
                    </Text>
                  </View>
                );
              })}
            </View>
            {/* <View style={styles.weekdaydiv}>
            <Text style={{backgroundColor: isEnabled ? 'black' : 'yellow'}}>
              {currentMonth} {currentYear}
            </Text>
          </View> */}
            <View style={styles.schedulediv}>
              <View style={styles.monthdiv}>
                {/* <Weekdays /> */}
                <Text style={styles.monthname}>{currentMonth} {currentYear}</Text>
              </View>

              <View style={styles.tokendiv}>
                <Text style={styles.tokentext}>Token Slot </Text>
                <View style={styles.token}>
                  <Text style={styles.tokentime}> 9:00 am - 10:am </Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.bookbtn}
                onPress={() => navigation.navigate('app')}>
                <Text style={styles.btntext}>Book Token</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container1: {
    backgroundColor: rgbaColor,
    padding: 20,
  },


  docdiv: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 8,
    marginTop: '5%',
    justifyContent: 'space-between',
    // backgroundColor:'pink'
  },

  dochead: {
    // marginLeft: '8%',
  },
  docimg: {
    width: 120,
    height: 100,
  },
  // drimg: {
  //   width: 40,
  //   height: 70,
  // },
  docname: {
    fontFamily: 'serif',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  hosploc: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: 'serif',
    color: 'black',
    width: '110%',
  },



  container2: {
    padding: 20,
  },

  infoH: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: "black",
  },
  infoF: {
    fontSize: 16,
    fontFamily: 'serif',
    color: "black",
    flexWrap: "wrap",
    marginBottom: 5,
    marginLeft: 8
  },

  schedulediv: {
    marginTop: '5%',
    borderWidth: 1,
    borderColor: BGColor,
    padding: 10,
    borderRadius: 15,
  },
  monthdiv: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: rgbaColor,
    justifyContent: 'center',
  },

  monthname: {
    fontFamily: 'serif',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  tokendiv: {
    marginTop: '3%',
  },
  tokentext: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: 'black',
  },
  token: {
    marginVertical: 10,
    backgroundColor: rgbaColor,
    width: 150,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tokentime: {
    fontSize: 14,
    // fontWeight: 'bold',
    color: 'black',

  },

  bookbtn: {
    marginTop: '3%',
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
  },
});



// const styles = StyleSheet.create({

//   container1: {
//     backgroundColor: rgbaColor,
//     padding: 20,

//   },
//   docdiv: {
//     display: 'flex',
//     flexDirection: 'row',
//     paddingLeft: 8,
//     marginTop: "5%",
//     justifyContent: 'space-between',
//     // backgroundColor:'pink'
//   },

//   dochead: {
//     // marginLeft: '8%',
//   },
//   docname: {
//     // backgroundColor: 'orange',
//     fontFamily: 'serif',
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   hosploc: {
//     marginTop: 8,
//     fontSize: 16,
//     fontFamily: 'serif',
//     color: 'black',
//     width: 190,
//   },
//   docimg: {
//     width: 120,
//     height: 100,
//   },


//   timetext: {
//     fontSize: 18,
//     // fontWeight: 'bold',
//     fontFamily: 'serif',
//     color: 'black',
//   },
//   container2: {
//     // marginTop: '5%',
//     padding: 20,
//   },
//   weekdaydiv: {
//     marginTop: '3%',
//   },
//   timediv: {
//     marginTop: '3%',
//   },

//   tokendiv: {
//     marginVertical: 10,
//     marginRight: 8,
//     backgroundColor: rgbaColor,
//     width: 150,
//     height: 60,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   bookbtn: {
//     marginTop: "3%",
//     backgroundColor: '#6a6acc',
//     height: 50,
//     width: 180,
//     alignSelf: 'center',
//     // marginHorizontal: 90,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   btntext: {
//     color: 'white',
//     fontFamily: 'serif',
//   }
// })

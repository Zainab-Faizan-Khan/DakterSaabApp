import { useState,useEffect } from 'react';
import React from 'react';
import { horizontalScale, moderateScale, verticalScale } from "../navigation/data/metrics";
import { Text, TouchableOpacity, TextInput, Image, SafeAreaView, View, ScrollView, StyleSheet, Alert,TouchableHighlight, Button } from 'react-native';
import { SERVER_URL } from '../../constants';
import Checkbox from './Checkbox';



const BGColor = "#6a6acc"
const rgbaColor = 'rgba(106, 106, 204, 0.2)'


export default function Donate({ navigation, route }) {
  const { email } = route.params;
  const [fdata, setFdata] = useState({
    name: '',
    age: null,
    gender: '',
    address: '',
    cnic: '',
    phone: '',
    bloodgrp: '',
    weight: '',
    HB: '',
    prev: '',
    suffer: [],
  });
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePress = (value) => {
    setFdata({ ...fdata, prev: value });
    setSelectedOption(value);
  };
  const [isChecked, setIsChecked] = useState({
    Diabetes: false,
    Typhoid: false,
    Tuberculosis: false,
    Malaria: false,
    Kidney: false,
    Hepatitis: false,
    Jaundice: false,
  });

  const handleToggle = (name) => {
    setIsChecked({ ...isChecked, [name]: !isChecked[name] });
  };

  useEffect(() => {
    const selectedCheckboxes = Object.keys(isChecked).filter((key) => isChecked[key]);
    setFdata({ ...fdata, suffer: selectedCheckboxes.join(', ') });
  }, [isChecked]);

  const showAlert = () => {
    Alert.alert(
      'Registered Successfully!'
    )
  }
  const [errormsg, setErrormsg] = useState(null);
  const Sendtobackend = () => {
    if (fdata.name == '' || fdata.address == '' || fdata.cnic == '' || fdata.phone == '' || fdata.bloodgrp == '' || fdata.prev == '') {
      setErrormsg('All fields must be filled!');
      return;
    } else {
      fetch(SERVER_URL + '/registerDonor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fdata)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
       
        showAlert()
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
  
  return (
    <>
      <View style={styles.headdiv}>
        <View style={styles.dropimg}>
          <Image style={styles.dropimg} source={require('../assets/donatedrop.png')} />
        </View>
        <View style={styles.heading}>
          <Text style={styles.headtext}>Blood Donation Form</Text>
          <Text style={styles.headbody}>Please Fill the form correctly.
            {"\n"}This will help to protect you and the patient {"\n"}who receives your blood. </Text>
        </View>
      </View>

      <ScrollView style={styles.formdiv}>
        {errormsg ? <Text style={styles.errormsg}>{errormsg}</Text> : null}

        <View style={styles.form}>

          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input}
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({ ...fdata, name: text })} />

          <Text style={styles.label}>Age</Text>
          <TextInput style={styles.input}
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({ ...fdata, age: text })} />

          <Text style={styles.label}>Gender</Text>
          <TextInput style={styles.input}
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({ ...fdata, gender: text })}
          />
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input}
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({ ...fdata, address: text })} />

          <Text style={styles.label}>Phone No</Text>
          <TextInput style={styles.input}
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({ ...fdata, phone: text })} />

          <Text style={styles.label}>CNIC</Text>
          <TextInput style={styles.input}
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({ ...fdata, cnic: text })}
          />

          <Text style={styles.label}>What is your blood type?</Text>
          <TextInput style={styles.input}
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({ ...fdata, bloodgrp: text })} />

          <Text style={styles.label}>Additional Information </Text>

          <View style={styles.addinfo}>
            <View>
              <Text style={styles.addlabel}>Weight</Text>
              <TextInput style={styles.addinput}
                onPressIn={() => setErrormsg(null)}
                onChangeText={(text) => setFdata({ ...fdata, weight: text })} />
            </View>
            <View>
              <Text style={styles.addlabel}>HB</Text>
              <TextInput style={styles.addinput}
                onPressIn={() => setErrormsg(null)}
                multiline={true}
                onChangeText={(text) => setFdata({ ...fdata, HB: text })} />
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.addlabel}>Have you donated previously?</Text>
              <TextInput
                onPressIn={() => setErrormsg(null)}
                onChangeText={(text) =>
                  setFdata({ ...fdata, prev: text })
                }
              />
            </View>
            {/* RADIO BUTTON */}
            <View style={styles.container}>
              <TouchableHighlight
                underlayColor="transparent"
                style={[
                  styles.option,
                  selectedOption === 'Yes' && styles.selectedOption,
                ]}
                onPress={() => handlePress('Yes')}>
                <Text style={styles.optionText}>YES</Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="transparent"
                style={[
                  styles.option,
                  selectedOption === 'No' && styles.selectedOption,
                ]}
                onPress={() => handlePress('No')}>
                <Text style={styles.optionText}>NO</Text>
              </TouchableHighlight>

            </View>
          </View>

          <View>
            <Text style={styles.addlabel}>Do you suffer from or have suffered from any of the following diseases?</Text>
            {/* <TextInput style={styles.addinput}
              onPressIn={() => setErrormsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, suffer: text })} />
            <MyComponent /> */}
             <View style={styles.container1}>
        <Checkbox label="Diabetes" checked={isChecked.Diabetes} onToggle={() => handleToggle('Diabetes')} />
      </View>
      <View style={styles.container1}>
        <Checkbox label="Typhoid (Last 1 year)" checked={isChecked.Typhoid} onToggle={() => handleToggle('Typhoid')} /> 
      </View>
      <View style={styles.container1}>
        <Checkbox label="Tuberculosisss" checked={isChecked.Tuberculosis} onToggle={() => handleToggle('Tuberculosis')} />
      </View>
      <View style={styles.container1}>
        <Checkbox label="Malaria (6 months)" checked={isChecked.Malaria} onToggle={() => handleToggle('Malaria')} />
      </View>
      <View style={styles.container1}>
        <Checkbox label="Kidney Disease" checked={isChecked.KidneyDisease} onToggle={() => handleToggle('KidneyDisease')} />
      </View>
      <View style={styles.container1}>
        <Checkbox label="Hepatitis B/C" checked={isChecked.Hepatitis} onToggle={() => handleToggle('Hepatitis')} />
      </View>
      <View style={styles.container1}>
        <Checkbox label="Jaundice (Last 1 year)" checked={isChecked.Jaundice} onToggle={() => handleToggle('Jaundice')} />
      </View>
          </View>


          <TouchableOpacity style={styles.btnStyle1}
          onPress={() => { Sendtobackend(); showAlert(); navigation.navigate('Home', { email: email }) }}
            >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </>
  );
};


// -------------------------Stylesheet----
const styles = StyleSheet.create({
  headdiv: {
    backgroundColor: BGColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 140,
  },
  container1: {
    // marginLeft:"25%",
    marginBottom:"2%",
  },
  dropimg: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  heading: {
    alignSelf: 'center',
    marginRight: 20,
  },
  headtext: {
    fontFamily: "serif",
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },

  headbody: {
    // backgroundColor: 'red',
    fontFamily: "serif",
    fontSize: 12,
    // fontWeight: 'bold',
    color: 'white',
  },
  formdiv: {
    display: "flex"
  },
  form: {
    // backgroundColor: 'orange',
    display: "flex",
    padding: 25,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    color: "black",
    fontFamily: "serif",
    marginTop: 5,
    marginBottom: 5
  },
  input: {
    backgroundColor: rgbaColor,
    borderRadius: 10,
    padding: 8,
    width: "100%",
    color:"black"
  },

  addinfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addlabel: {
    fontSize: 11,
    color: "black",
    fontFamily: "serif",
    marginTop: 5,
    marginBottom: 5,
  },
  addinput: {
    backgroundColor: rgbaColor,
    borderRadius: 10,
    padding: 8,
    width: 160,
    marginBottom: 10,

  },

  btnStyle1: {
    backgroundColor: '#6a6acc',
    height: 50,
    marginHorizontal: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 70,
  },
  // RADIO Button
  container: {
    flexDirection: 'row',
    marginTop:-40
  },
  option: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: BGColor,
    width: 50,
    height: 30,
    alignItems: 'center',
    padding:5,
    marginRight:20
  },
  selectedOption: {
    backgroundColor: BGColor,
  },
  optionText: {
    fontSize: 12,
    fontWeight:'bold',
    color:'black',
  },
  donorForm: {
    height: verticalScale(40),
    width: horizontalScale(250),
    alignItems: 'center',
    marginRight: horizontalScale(10),
    marginLeft: horizontalScale(60),
    marginTop: verticalScale(30)
  },
  submit: {
    marginTop: verticalScale(60),
    backgroundColor: '#6a6acc',
    height: verticalScale(50),
    marginHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 20,
    shadowColor: '#6a6acc',
  },
  errormsg: {
    color: 'black',
    fontSize: 14,
    backgroundColor: '#6a6acc',
    padding: 5,
    borderRadius: 10,
    textAlign: 'center',
    marginHorizontal: 60
  },





})
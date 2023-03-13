import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SERVER_URL } from '../../constants';
import { BGColor, rgbaColor } from '../../constants';


const LogIn = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    email: '',
    password: ''
  })

  const Sendtobackend = () => {
    if (fdata.email == '' || fdata.password == '') {
      setErrormsg('All fields must be filled!');
      return;
    }
    else {
      fetch(SERVER_URL + '/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(fdata)
      })
        .then(res => res.json()).then(
          data => {
            if (data.error) {
              setErrormsg(data.error)
            }
            else {

              navigation.navigate('Home', { email: fdata.email });
            }
          }
        )
    }
  }
  const [errormsg, setErrormsg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <View style={styleAuth.container1}>
        {/* <Image style={styleAuth.imageBG}
          source={require('../assets/bg.jpg')} /> */}
        <View style={styleAuth.container1}>

          <View style={styleAuth.s2}>
            <Text style={styleAuth.h1}>SignIn</Text>
            {errormsg ? <Text style={styleAuth.errormsg}>{errormsg}</Text> : null}

            <Text style={styleAuth.label}>Email</Text>
            <TextInput style={styleAuth.input} placeholder="xyz@gmail.com"
              onPressIn={() => setErrormsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, email: text })} />

            <Text style={styleAuth.label}>Password</Text>

            <View style={styleAuth.passwordContainer}>

              <TextInput style={styleAuth.passwordInputContainer}
                onPressIn={() => setErrormsg(null)}
                secureTextEntry={!showPassword}
                onChangeText={(text) => setFdata({ ...fdata, password: text })} />

              <TouchableOpacity style={styleAuth.showPasswordCheckbox}
                onPress={() => setShowPassword(!showPassword)}>
                <Image source={require('../assets/peye.png')}
                  style={[
                    styleAuth.showPasswordCheckboxInner,
                    showPassword && styleAuth.showPasswordCheckboxInnerActive,
                  ]} />
              </TouchableOpacity>
            </View>
            <View style={styleAuth.fp}>
              <Text style={styleAuth.link}>Forgot Password?</Text>
            </View>

            <TouchableOpacity style={styleAuth.btnStyle}
              onPress={() => Sendtobackend()}>
              <Text style={styleAuth.btntext}>LogIn</Text>
            </TouchableOpacity>

            <Text style={styleAuth.h3}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styleAuth.link}> Click Here!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default LogIn;

const styleAuth = StyleSheet.create({
  container1: {
    // backgroundColor:"#A7C7E7",
    backgroundColor: "#ADD8E6",
    padding: 10,
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  // imageBG: {
  //     position: "absolute",
  //     zIndex: -1,
  //     height: "100%",
  //     width: "100%",
  // },

  s2: {
    // display: "flex",
    // width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  h1: {
    marginTop: 10,
    marginBottom: 15,
    fontWeight: "600",
    fontSize: 26,
    color: "black",
    fontFamily: "serif",
    textAlign: "center"
  },

  label: {
    fontWeight: "200",
    fontSize: 14,
    color: "black",
    fontFamily: "serif",
    marginTop: 8,
  },
  input: {
    backgroundColor: rgbaColor,
    borderRadius: 10,
    padding: 8,
    color: "black",
    fontFamily: "serif",
  },
  fp: {
    alignItems: 'flex-end'
  },
  btnStyle: {
    backgroundColor: BGColor,
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,

  },
  btntext: {
    fontFamily: 'serif',
    color: 'white',
  },
  h3: {
    fontSize: 12,
    color: "grey",
    fontFamily: "serif",
    textAlign: "center",
    // marginTop: 10,
  },
  link: {
    fontSize: 12,
    color: "blue",
    fontFamily: "serif",
    textAlign: "center",
  },

  // ------verfiy----

  errormsg: {
    color: 'red',
    fontFamily: 'serif',
    fontSize: 12,
  },

  // show password
  passwordContainer: {
    // marginBottom: 20,
    display: "flex",
    flexDirection: 'row',
    justifyContent:'space-between',
    // width: 392,
    backgroundColor: rgbaColor,
    borderRadius: 10,

  },
  passwordInputContainer: {
    alignItems: 'center',
    padding: 8,
  },
  showPasswordCheckbox: {
    justifyContent: 'center',
    paddingRight: 12,
  },
  showPasswordCheckboxInner: {
    width: 22,
    height: 22,
  },
  showPasswordCheckboxInnerActive: {
    opacity:0.3
  },



})
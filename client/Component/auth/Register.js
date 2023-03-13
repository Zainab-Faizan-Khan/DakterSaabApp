import {Text,View,Image,TouchableOpacity,TextInput,ScrollView,StyleSheet} from 'react-native';
import React, { useState } from 'react';
// import styleAuth from './styleAuth/indexRegister';
import { SERVER_URL, BGColor, rgbaColor} from '../../constants';

const Register = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    name: '',
    email: '',
    password: '',
    cnic: '',
    phone: '',
  });
  const [errormsg, setErrormsg] = useState(null);
  const Sendtobackend = () => {
    // console.log(fdata);
    if (
      fdata.name == '' ||
      fdata.email == '' ||
      fdata.password == '' ||
      fdata.cnic == '' ||
      fdata.phone == ''
    ) {
      setErrormsg('All fields must be filled!');
      return;
    } else {
      fetch(SERVER_URL + '/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fdata),
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          if (data.error === 'Invalid credentials') {
            alert('Invalid Credentials');
            setErrormsg('Invalid Credentials');
          } else if (data.message === 'Verification code sent') {
            // console.log(data.udata);
            alert(data.message);
            navigation.navigate('verification', { userdata: data.udata });
          }
        });
    }
  };
  return (
    <>
      <View style={styleAuth.container1}>
        {/* <Image style={styleAuth.imageBG}
          source={require('../assets/bg.jpg')} /> */}

        <View style={styleAuth.container1}>
          <View style={styleAuth.s2}>
            <Text style={styleAuth.h1}>Create a new Account</Text>
            {errormsg ? <Text style={styleAuth.errormsg}>{errormsg}</Text> : null}

            <ScrollView style={styleAuth.Rform} showsVerticalScrollIndicator={false}>

              <Text style={styleAuth.label}>Username</Text>
              <TextInput style={styleAuth.input}
                onPressIn={() => setErrormsg(null)}
                onChangeText={text => setFdata({ ...fdata, name: text })} />

              <Text style={styleAuth.label}>Email</Text>
              <TextInput
                style={styleAuth.input}
                onPressIn={() => setErrormsg(null)}
                onChangeText={text => setFdata({ ...fdata, email: text })} />

              <Text style={styleAuth.label}>Password</Text>
              <TextInput
                style={styleAuth.input}
                onPressIn={() => setErrormsg(null)}
                secureTextEntry={true}
                onChangeText={text => setFdata({ ...fdata, password: text })} />
            <Text style={styleAuth.ptext}>(Password should be 8 charecter long)</Text>


              <Text style={styleAuth.label}>Cnic</Text>
              <TextInput
                style={styleAuth.input}
                onPressIn={() => setErrormsg(null)}
                onChangeText={text => setFdata({ ...fdata, cnic: text })} />

              <Text style={styleAuth.label}>Phone No.</Text>
              <TextInput
                style={styleAuth.input}
                onPressIn={() => setErrormsg(null)}
                onChangeText={text => setFdata({ ...fdata, phone: text })} />

              <TouchableOpacity style={styleAuth.btnStyle}
                onPress={() => { Sendtobackend(); }}>
                <Text style={styleAuth.btntext}>Sign Up</Text>
              </TouchableOpacity>

              <Text style={styleAuth.h3}> Already have a account?
              </Text>
              <TouchableOpacity  onPress={() => navigation.navigate('login')} >
              <Text style={styleAuth.link}> Login here!</Text>
                </TouchableOpacity>

            </ScrollView>
          </View>
        </View>
      </View>


    </>
  );
};

export default Register;



const styleAuth = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: "100%",
//     display: "flex"
// },

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
    backgroundColor: "rgba(173, 216, 230,0.3)",
    borderRadius: 10,
    padding: 8,
    color: "black",
    fontFamily: "serif",
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
},
link: {
    fontSize: 12,
    color: "blue",
    fontFamily: "serif",
    textAlign: "center",
},

errormsg:{
  color:'red',
  fontFamily:'serif',
  fontSize:12,
},

ptext:{
  fontFamily:'serif',
  fontSize:10,
}

})
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import styleAuth from './styleAuth/indexRegister';
import { SERVER_URL } from '../../constants';
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
      <View style={styleAuth.container}>
        <Image style={styleAuth.imageBG}
          source={require('../assets/bg.jpg')} />

        <View style={styleAuth.container1}>
          <View style={styleAuth.s2}>
            <Text style={styleAuth.h1}>Create a new Account</Text>
            {errormsg ? <Text style={styles.errormsg}>{errormsg}</Text> : null}

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
              <TouchableOpacity  onPress={() => navigation.navigate('login')} >
              <Text style={styleAuth.link}> Login here!</Text>
                </TouchableOpacity>
              </Text>

            </ScrollView>
          </View>
        </View>
      </View>


    </>
  );
};

export default Register;

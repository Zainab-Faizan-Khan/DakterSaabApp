import { Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import styleAuth from './styleAuth/indexLogin';
import { SERVER_URL } from '../../constants';

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
  return (
    <>
      <View style={styleAuth.container}>
        <Image style={styleAuth.imageBG}
          source={require('../assets/bg.jpg')} />

        <View style={styleAuth.container1}>

          <View style={styleAuth.s2}>
            <Text style={styleAuth.h1}>SignIn</Text>
            {errormsg ? <Text style={styles.errormsg}>{errormsg}</Text> : null}

            <ScrollView style={styleAuth.Lform}>

              <Text style={styleAuth.label}>Email</Text>
              <TextInput style={styleAuth.input}
                onPressIn={() => setErrormsg(null)}
                onChangeText={(text) => setFdata({ ...fdata, email: text })} />

              <Text style={styleAuth.label}>Password</Text>
              <TextInput style={styleAuth.input}
                onPressIn={() => setErrormsg(null)}
                secureTextEntry={true}
                onChangeText={(text) => setFdata({ ...fdata, password: text })} />

              <View style={styleAuth.fp}>
                <Text style={styleAuth.link}>Forgot Password?</Text>
              </View>

              <TouchableOpacity style={styleAuth.btnStyle}
                onPress={() => Sendtobackend()}>
                <Text style={styleAuth.btntext}>LogIn</Text>
              </TouchableOpacity>

              <Text style={styleAuth.h3}>Don't have an account?
              <TouchableOpacity  onPress={() => navigation.navigate('Register')}>
                <Text style={styleAuth.link}> Click Here!</Text>
                </TouchableOpacity>
                </Text>

            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

export default LogIn;
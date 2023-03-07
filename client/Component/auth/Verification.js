import {Text,View,Image,TouchableOpacity,TextInput,ScrollView,} from 'react-native';
import React, {useEffect, useState} from 'react';
import styleAuth from './styleAuth/indexLogin';
import { SERVER_URL } from '../../constants';
const Verification = ({navigation, route}) => {
  const {userdata} = route.params;
  const [errormsg, setErrormsg] = useState(null);
  const [userCode, setuserCode] = useState('xxxx');
  const [actualCode, setActualCode] = useState('null');

  useEffect(() => {
    setActualCode(userdata?.VerificationCode);
  }, []);
  const Sendtobackend = () => {
    // console.log(userCode);
    // console.log(actualCode);
    if (userCode === 'xxxx' || userCode === '') {
      setErrormsg('Please enter the code');
      return;
    } else if (userCode == actualCode) {
      // console.log('correct code');
      const fdata = {
        name: userdata?.name,
        email: userdata?.email,
        password: userdata?.password,
        cnic: userdata?.cnic,
        phone: userdata?.phone,
      };
      fetch(SERVER_URL + '/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fdata),
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 'User Registered Successfully!') {
            alert(data.message);
          }
          else{
              alert(data.message);
              navigation.navigate('login')
          }
        });
    } else if (userCode != actualCode) {
      setErrormsg('incorrect code!');
      return;
    }
  };
  return (
    <>
      <View style={styleAuth.container}>
        <Image
        
          source={require('../assets/bg.jpg')}
          style={styleAuth.imageBG}
        />
        <View style={styleAuth.container2}>
          {/* <View style={styleAuth.s1}>
            <Text style={styleAuth.head}>DAAKTER SAAB</Text>
          </View> */}
          <ScrollView style={styleAuth.s2}>
            <Text style={styleAuth.h1}>Verification</Text>
            <Text style={styleAuth.h2}>Enter code sent to your email.</Text>
            {errormsg ? <Text style={styles.errormsg}>{errormsg}</Text> : null}
            <View style={styleAuth.Lform}>
              <Text style={styleAuth.label}>Code</Text>
              <TextInput
                style={styleAuth.input}
                onPressIn={() => setErrormsg(null)}
                secureTextEntry={true}
                onChangeText={text => setuserCode(text)}
              />
              <View style={styleAuth.fp}>
                <Text style={styleAuth.link}>Forgot Password?</Text>
              </View>
              <TouchableOpacity
                style={styleAuth.btnStyle}
                onPress={() => Sendtobackend()}
                // onPress={()=>navigation.navigate('bottomNavigation')}
              >
                <Text>Verify</Text>
              </TouchableOpacity>
              <Text style={styleAuth.h3}>
                Don't have an account?
                <Text style={styleAuth.link}> Click Here!</Text>
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Verification;

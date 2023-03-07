import React, { useState } from 'react';
import { View, TouchableHighlight, Text, StyleSheet,TextInput } from 'react-native';
import { BGColor,rgbaColor} from "../../constants"
import { SERVER_URL } from '../../constants';

const Radiobtn = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePress = (value) => {
    setSelectedOption(value);
    sendToBackend(value);
  };

  const sendToBackend = (value) => {
    // Make an API call to your backend server with the selected value as a parameter
    fetch(SERVER_URL + '/registerDonor', {
      method: 'POST',
      body: JSON.stringify({ donatedPreviously: value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="transparent"
        style={[
          styles.option,
          selectedOption === 'yes' && styles.selectedOption,
        ]}
        onPress={() => handlePress('yes')}>
        <Text style={styles.optionText}>YES</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        style={[
          styles.option,
          selectedOption === 'no' && styles.selectedOption,
        ]}
        onPress={() => handlePress('no')}>
        <Text style={styles.optionText}>NO</Text>
      </TouchableHighlight>
   
    </View>
  );
};
export default Radiobtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
});
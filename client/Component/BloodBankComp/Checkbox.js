
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BGColor, rgbaColor} from "../../constants"
const Checkbox = ({ label, onToggle, checked }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  };

  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={handleToggle}>
      <View style={styles.checkbox}>
        {isChecked && <Text style={styles.checkmark}>✓</Text> }
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 25,
    width: 25,
    backgroundColor:rgbaColor,
    borderWidth: 1,
    borderColor: BGColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontWeight:'bold',
    fontSize:16,
    color :'black',
  },
  label: {
    fontSize: 14,
    fontFamily:'serif',
    fontWeight:'bold',
    color:'black',
    padding:5,
    marginLeft:5,

  },
});

export default Checkbox;
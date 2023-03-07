import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Checkbox from './Checkbox';

const MyComponent = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const handleToggle = (label, checked) => {
    if (checked) {
      setCheckedItems([...checkedItems, label]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== label));
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Checkbox label="Diabetes" checked={checkedItems.includes("Diabetes")} onToggle={(checked) => handleToggle("Diabetes", checked)} />
      </View>
      <View style={styles.container}>
        <Checkbox label="Typhoid (Last 1 year)" checked={checkedItems.includes("Typhoid")} onToggle={(checked) => handleToggle("Typhoid", checked)} /> 
      </View>
      <View style={styles.container}>
        <Checkbox label="Tuberculosisss" checked={checkedItems.includes("Tuberculosisss")} onToggle={(checked) => handleToggle("Tuberculosisss", checked)} />
      </View>
      <View style={styles.container}>
        <Checkbox label="Malaria (6 months)" checked={checkedItems.includes("Malaria")} onToggle={(checked) => handleToggle("Malaria", checked)} />
      </View>
      <View style={styles.container}>
        <Checkbox label="Kidney Disease" checked={checkedItems.includes("Kidney Disease")} onToggle={(checked) => handleToggle("Kidney Disease", checked)} />
      </View>
      <View style={styles.container}>
        <Checkbox label="Hepatitis B/C" checked={checkedItems.includes("Hepatitis B/C")} onToggle={(checked) => handleToggle("Hepatitis B/C", checked)} />
      </View>
      <View style={styles.container}>
        <Checkbox label="Jaundice (Last 1 year)" checked={checkedItems.includes("Jaundice")} onToggle={(checked) => handleToggle("Jaundice", checked)} />
      </View>
      
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    // marginLeft:"25%",
    marginBottom:"2%",
  },
});

export default MyComponent;

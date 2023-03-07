import React, {useState, useEffect} from 'react';
import { Text,View,StyleSheet,ScrollView,Image,TouchableOpacity,} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { horizontalScale, moderateScale, verticalScale } from "../navigation/data/metrics";
import Weekdays from './Weekdays';
import DropdownFilter from './dropdown';
import {SERVER_URL} from '../../constants';
import {useRoute} from '@react-navigation/native';
const BGColor = '#6a6acc';
const rgbaColor = 'rgba(106, 106, 204, 0.2)';

const OPDHospitalDetails = ({navigation}) => {
  const [fieldDr, setFieldDr] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'ENT', value: 'ENT'},
    {label: 'Cardio', value: 'Cardiology'},
    {label: 'General Physician', value: 'General Physician'},
  ]);
  
  return (
    <>
      
        <View style={styles.container1}>
          <View style={styles.docdiv}>    
            <View style={styles.dochead}>
            <Text style={styles.docname}>Abbasi shaheed</Text>
              <Text style={styles.hosploc}>W2CH+4QG, Block 3 Nazimabad, Karachi</Text>
              {/* <Text style={styles.docname}>{data.Hospital}</Text>
              <Text style={styles.hosploc}>{data.Branch} </Text> */}
              {/* {item.Speciality} */}
            </View>

            <View> 
              <Image style={styles.docimg}
                source={require('../assets/hospital.png')}/>
            </View>
          </View>
        </View>
        <View style={styles.container2}>
        <View style={styles.dropdowndiv}>
          <DropDownPicker
            style={styles.dropdown}
            placeholder="Select Field"
            open={open}
            value={fieldDr || ''}
            items={items}
            setOpen={setOpen}
            setValue={fieldDr => setFieldDr(fieldDr)}
            setItems={setItems}/>
        </View>
        <DropdownFilter fieldDr={fieldDr} />
      </View>
      {/* doctors dropdown se araye */}
    </>
  );
};

export default OPDHospitalDetails;




const styles = StyleSheet.create({
  
  container1: {
    backgroundColor: rgbaColor,
    padding: 20,
  },

  container2: {
    padding: 10,
  },


  docdiv: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 8,
    marginTop: '5%',
    justifyContent: 'space-between',
    // backgroundColor:'pink'
  },
  dropdown: {
    borderRadius: 8,
    backgroundColor: "rgba(106, 106, 204, 0.2)",
    marginTop: verticalScale(10),
    borderWidth: 0,
  },
  dochead: {
    // marginLeft: '8%',
  },
  docname: {
    // backgroundColor: 'orange',
    fontFamily: 'serif',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  hosploc: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: 'serif',
    color: 'black',
    width: 190,
  },
  docimg: {
    width: 120,
    height: 100,
  },

  timetext: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: 'serif',
    color: 'black',
  },
 
  weekdaydiv: {
    marginTop: '3%',
  },
  timediv: {
    marginTop: '3%',
  },

  tokendiv: {
    marginVertical: 10,
    marginRight: 8,
    backgroundColor: rgbaColor,
    width: 150,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
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

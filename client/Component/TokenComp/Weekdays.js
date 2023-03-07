import React, { useState } from 'react';
import { View, Text,ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
const rgbaColor = 'rgba(106, 106, 204, 0.2)'


const months = ['January', 'February', 'March', 'April', 'May','June',
  'July','August','September','October','November','December',];

const years = Array.from({ length: 1 }, (_, i) => `${new Date().getFullYear() + i}`);

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

const Weekdays = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setSelectedDate(new Date(selectedYear, month, selectedDate.getDate()));
    setIsOpen(false);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setSelectedDate(new Date(year, selectedMonth, selectedDate.getDate()));
    setIsOpen(false);
  };

  const handleDateSelect = (day) => {
    setSelectedDate(new Date(selectedYear, selectedMonth, day));
    setIsOpen(false);
  };

  const renderDays = () => {
    const numDays = daysInMonth(selectedMonth, selectedYear);
    const days = Array.from({ length: numDays }, (_, i) => i + 1);

    return days.map((day) => (
      <TouchableOpacity key={day} onPress={() => handleDateSelect(day)}>
        <View style={styles.daysdiv}>
          <Text style={styles.daystext}>
            {`${new Date(selectedYear, selectedMonth, day).toDateString()
            .slice(0, 3)} ${day.toString().padStart(2, '0')}`}
            </Text>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown}>
        <Text style={styles.dropdown}>
          {`${months[selectedMonth]} ${selectedYear}`} &#9662;
        </Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdowndiv}>
          <View style={styles.yeardiv}>
            {years.map((year) => (
              <TouchableOpacity key={year} onPress={() => handleYearSelect(year)}>
                <Text style={styles.yeartext}>{year}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.dropdownopen}>
            {months.map((month, index) => (
              <TouchableOpacity style={styles.monthdiv} key={month} onPress={() => handleMonthSelect(index)}>
                <Text style={styles.monthtext}>{month}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.daysrender}>{renderDays()}</ScrollView>
    </View>
  );
};

export default Weekdays;


const styles = StyleSheet.create({
container:{
    
},
dropdown:{
  color: 'black', 
  fontSize: 18,
  fontFamily:'serif',
},  
dropdowndiv:{
  // backgroundColor:rgbaColor,
  marginTop:8,
  borderBottomWidth:2,
  borderLeftWidth:2,
  borderRightWidth:2,
  borderTopWidth:1,
},
dropdownopen:{
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
},
monthdiv:{
  flexBasis: '25%',
  textAlign: 'center',
},
monthtext:{
  color: 'black',
  backgroundColor:rgbaColor,
  padding:5,
  margin:5,
  borderRadius:5,
  fontFamily:'serif',
  fontSize: 12,

},

daysdiv:{
  marginVertical: 10, 
  marginRight:8,
  backgroundColor:rgbaColor, 
  width:70,
  height:70,
  borderRadius:15,
  alignItems:'center',
  justifyContent:'center',
},

daystext:{
  color: 'black',
  fontFamily:'serif',
  fontSize: 13,
},
  
  yeardiv:{
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  yeartext:{
    color:'black',
    fontSize:16,
  fontFamily:'serif',
  marginLeft:10

  },

daysrender:{
  flexDirection:'row'
},


})

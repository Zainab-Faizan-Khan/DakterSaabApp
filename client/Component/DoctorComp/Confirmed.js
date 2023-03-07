import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
const BGColor = "#6a6acc"
const rgbaColor = 'rgba(106, 106, 204, 0.2)'


const Confirmed= ({ visible, onClose, navigation}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.dialogContainer}>
          <Text style={styles.text}>Appointment successfull</Text>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('FindDr')} >
            <Text style={styles.buttonText} >OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: BGColor,
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Confirmed;




















// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const Calendar = () => {
//     const [selectedDate, setSelectedDate] = useState(new Date());

//     const daysInMonth = (month, year) => {
//         return new Date(year, month, 0).getDate();
//     };

//     const months = [
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December',
//     ];

//     const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//     const generateCalendar = (month, year) => {
//         const calendar = [];
//         const days = daysInMonth(month, year);
//         const firstDay = new Date(year, month - 1, 1).getDay();
//         let day = 1;
//         for (let i = 0; i < 6; i++) {
//             const week = [];
//             for (let j = 0; j < 7; j++) {
//                 if (i === 0 && j < firstDay) {
//                     week.push(null);
//                 } else if (day <= days) {
//                     week.push(day);
//                     day++;
//                 } else {
//                     break;
//                 }
//             }
//             calendar.push(week);
//         }
//         return calendar;
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>
//                 {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
//             </Text>
//             <View style={styles.weekDaysContainer}>
//                 {weekDays.map((day) => (
//                     <Text key={day} style={styles.weekDay}>
//                         {day}
//                     </Text>
//                 ))}
//             </View>
//             <View style={styles.calendarContainer}>
//                 {generateCalendar(selectedDate.getMonth() + 1, selectedDate.getFullYear()).map((week, index) => (
//                     <View key={index} style={styles.weekContainer}>
//                         {week.map((day) => (
//                             <TouchableOpacity
//                                 key={day}
//                                 style={styles.dayContainer}
//                                 onPress={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}
//                             >
//                                 <Text style={styles.day}>{day || ''}</Text>
//                             </TouchableOpacity>
//                         ))}
//                     </View>
//                 ))}
//             </View>
//             <Text style={styles.selectedDate}>Selected Date: {selectedDate.toString()}</Text>
//         </View>
//     );
// };
// export default Calendar


// const styles = StyleSheet.create({
//   container:{},
// })








// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const Calendar = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>{selectedDate.toDateString()}</Text>
//       </View>
//       <View style={styles.body}>
//         <View style={styles.daysContainer}>
//           <Text style={styles.dayHeader}>Sun</Text>
//           <Text style={styles.dayHeader}>Mon</Text>
//           <Text style={styles.dayHeader}>Tue</Text>
//           <Text style={styles.dayHeader}>Wed</Text>
//           <Text style={styles.dayHeader}>Thu</Text>
//           <Text style={styles.dayHeader}>Fri</Text>
//           <Text style={styles.dayHeader}>Sat</Text>
//         </View>
//         <View style={styles.datesContainer}>
//           {/* Loop through the dates in the current month */}
//           {Array.from({ length: 31 }, (_, index) => {
//             const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), index + 1);
//             return (
//               <TouchableOpacity
//                 key={date}
//                 style={styles.dateContainer}
//                 onPress={() => handleDateSelect(date)}
//               >
//                 <Text style={styles.dateText}>{date.getDate()}</Text>
//               </TouchableOpacity>
//             );
//           })}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     height: 60,
//     backgroundColor: '#ddd',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerText: {
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   body: {
//     flex: 1,
//     padding: 20,
//   },
//   daysContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   dayHeader: {
//     width: 40,
//     textAlign: 'center',
//   },
//   datesContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   dateContainer: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//     marginBottom: 10,
//     borderRadius: 20,
//   }
// })

// export default Calendar

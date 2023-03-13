import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const images = [
 require('../assets/c1.jpg'),
 require('../assets/c2.jpg'),
 require('../assets/c4.jpg'),
 require('../assets/c3.jpg'),
];

const Pharmacy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <Image
          key={index}
          source={image}
          style={[
            styles.image,
            { left: screenWidth * (index - currentIndex) },
          ]}
          resizeMode="contain"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: screenWidth * images.length,
  },
  image: {
    position: 'absolute',
    width: screenWidth,
    height: '100%',
  },
});

export default Pharmacy;





























// import React, { Component } from 'react';
// import {StyleSheet,Text,View} from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';


// export default class Pharmacy extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedStartDate: null,
//     };
//     this.onDateChange = this.onDateChange.bind(this);
//   }

//   onDateChange(date) {
//     this.setState({
//       selectedStartDate: date,
//     });
//   }

//   render() {
//     const { selectedStartDate } = this.state;
//     const startDate = selectedStartDate ? selectedStartDate.toString() : '';
//     return (
//       <View style={styles.container}>
//         <CalendarPicker
//           onDateChange={this.onDateChange}
//         />

//         <View>
//           <Text>SELECTED DATE:{ startDate }</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     marginTop: 100,
//   },
// });






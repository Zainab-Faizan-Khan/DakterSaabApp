import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity,  Image,StyleSheet} from 'react-native';
import { SERVER_URL } from '../../constants';
import { useNavigation } from '@react-navigation/native';
const BGColor = "#6a6acc"
import { horizontalScale, moderateScale, verticalScale } from "../navigation/data/metrics";

// Backend API endpoint to retrieve data from MongoDB
const URL = SERVER_URL + `/api/doctor/findRating`;

const ProfileHeader = ({email}) => {
    
    const URL = SERVER_URL + `/user?email=${email}`;
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(URL)
            .then(response => response.json()) // get response, convert to json
            .then(json => {
                setData(json);
            })
            .catch(error => alert(error)) // display errors
            .finally(() => setLoading(false)); // change loading state
    });
    console.log(URL)
    const renderDataItem = ({ item }) => (
        <View >
         <View style={styles.s}>
          <Text style={styles.heading}> Hello {item.name} </Text>
          <TouchableOpacity style={styles.p}
            onPress={() => navigation.navigate('Profile', { email })}>
            <Image style={styles.prof}
              source={require('../assets/profile.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.subhead}> How can we help? </Text>
             
        </View>

    );
   

    return (
        <>
        <View>
           
           <FlatList
               data={data}// list of categories to filter by
               renderItem={renderDataItem}
           />
           </View>
      


          
        </>

    );
};

export default ProfileHeader


const styles = StyleSheet.create({
      s: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        // backgroundColor:'pink',
      },
      heading: {
        // fontWeight: "900",
        fontSize: 25,
        color: "white",
        fontFamily: "serif",
        flexWrap:"wrap",
        width:290,
        // backgroundColor:'pink',
      }      ,
      prof: {
        alignSelf: 'center',
        width: 60,
        height: 60,
        borderRadius:30,
        // backgroundColor: 'purple',
      },
    
    
})
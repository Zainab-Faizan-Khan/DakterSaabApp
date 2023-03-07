import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView, Image, SafeAreaView } from 'react-native';
// import styles from '../DoctorComp/styles';
import { SERVER_URL } from '../../constants';
import { horizontalScale, moderateScale, verticalScale } from "../navigation/data/metrics";
const BGColor = "#6a6acc"
const rgbaColor = 'rgba(106, 106, 204, 0.2)'

import { useNavigation } from '@react-navigation/native';
// Backend API endpoint to retrieve data from MongoDB
const URL = SERVER_URL + `/api/doctor/findRating`;

const RecommendedDr = () => {

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

    const renderDataItem = ({ item }) => (
        <View >
            <View style={styles.docdiv}>
                <TouchableOpacity style={styles.docbtn}
                    onPress={() => {
                        // Pass and merge params back to home screen
                        navigation.navigate('DrDetails', { paramKey: item._id });
                    }}>
                    <Text style={styles.docname}> {item.Name}</Text>
                    <Text style={styles.docfield}> {item.Field}</Text>
                    <Text style={styles.docfield}>  {item.Ratings}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    return (
        <>
            <View>
                <Text style={styles.h1}>Recommended Doctors</Text>
                <FlatList
                    data={data}// list of categories to filter by
                    renderItem={renderDataItem} horizontal showsHorizontalScrollIndicator={false} />
            </View>
        </>
    );
};

export default RecommendedDr

const styles = StyleSheet.create({

    h1: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black",
        fontFamily: "serif",
    },
    docdiv: {
        // marginTop: verticalScale(5),
        // backgroundColor:'blue',
        marginTop: 8,
    },
    docbtn: {
        // backgroundColor: "rgba(200, 200, 222,0.5)",
        height: 90,
        width: 160,
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: horizontalScale(8),
        padding: 8,
        borderWidth: 1,
        borderColor: BGColor,
    },
    docname: {
        fontFamily: 'serif',
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
        flexWrap: "wrap",
    },
    docfield: {
        fontFamily: 'serif',
        fontSize: 12,
        // fontWeight: 'bold',
        color: 'black',
        flexWrap: "wrap",

    },
})
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const BGColor = "#6a6acc"
const rgbaColor = 'rgba(106, 106, 204, 0.2)'


const TokenDisplay = ({ userToken, currentToken, ProcessedToken}) => {
    return (
        <>
            <View style={styles.container1}>
                <View >
                    <Text style={styles.utoken}>Your token number</Text>
                    <Text style={styles.utokenno}>{userToken}</Text>
                </View>

            </View>
            <View style={styles.container2}>

                <View style={styles.ctokendiv}>
                    <Text style={styles.ctokenno}>{ ProcessedToken}</Text>
                    <Text style={styles.ctoken}>Processed</Text>
                </View>
                <View style={styles.ctokendiv}>
                    <Text style={styles.ctokenno}>{currentToken}</Text>
                    <Text style={styles.ctoken}>Current tokeeen </Text>
                </View>

            </View>

        </>
    );
};

export default TokenDisplay;

const styles = StyleSheet.create({
    container1: {
        alignItems: 'center',
        padding: 20,
        // display:"flex",
        // justifyContent:'center'
    },

    utoken: {
        display: "flex",
        justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: rgbaColor,
        padding: 20,
        fontFamily: 'serif',
        color: "black",
    },
    utokenno: {
        fontFamily: 'serif',
        fontSize: 58,
        color: "black",
        alignSelf: "center",
        marginBottom: 10,

    },

    container2:{
        display:'flex',
        flexDirection:"row",
        alignSelf:"center",
        margin:20,
        // flexBasis:"50%",
        // justifyContent:"space-between"
    },
    ctokendiv: {
        backgroundColor: rgbaColor,
        padding: 20,
        width:150,
        margin:10
    },
    ctokenno: {
        fontFamily: 'serif',
        fontSize: 28,
        color: "black",
        
        alignSelf: "center",
        // marginBottom: 10,

    },
    ctoken: {
        display: "flex",
        alignSelf: "center",        
        fontFamily: 'serif',
        color: "black",
    },


})
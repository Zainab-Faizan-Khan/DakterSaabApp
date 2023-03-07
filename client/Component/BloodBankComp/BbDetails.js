import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../navigation/data/metrics";
import { useRoute } from '@react-navigation/native';
import { SERVER_URL } from "../../constants";
import { BGColor} from "../../constants"

export default function BbDetails() {
    const route = useRoute()
    const id = route.params.paramKey
    const URL = SERVER_URL + `/api/bloodbank/find/${id}`
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(URL)
            .then((response) => response.json()) // get response, convert to json
            .then((json) => {
                setData(json);
            })
            .catch((error) => alert(error)) // display errors
            .finally(() => setLoading(false)); // change loading state
    }, [id]);
    SampleFunction = (item) => {
        Alert.alert(item);
    }
    return (
        <SafeAreaView >
            {isLoading ? (<ActivityIndicator />) :
                (<View>
                    <View style={styles.bbnamediv}>
                        <View style={styles.subdiv}>
                            <View style={styles.imgdiv}>
                                <Image style={styles.BBimg} source={require('../assets/3.png')} />
                            </View>
                            <View style={styles.namediv}>
                                <Text style={styles.BBname}>{data.name} </Text>
                                <Text style={styles.BBrating}>Ratings * * * * </Text>
                            </View>
                        </View>
                    </View >

                    {/* -------------info DESCRIPTION -------------- */}
                    <View style={styles.bbdescription}>
                        <View style={styles.subdiv}>
                            <View style={styles.infodiv}>
                                <View style={styles.info}>
                                    <Image style={styles.infoimg}
                                        source={require('../assets/address.png')} />
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>Address: </Text>{data.address}</Text>
                                </View>
                                <View style={styles.info}>
                                    <Image style={styles.infoimg}
                                        source={require('../assets/phone.png')} />
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>Phone: </Text>{data.phone}</Text>
                                </View>
                                <View style={styles.info}>
                                    <Image style={styles.infoimg}
                                        source={require('../assets/clock.png')} />
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>Timings: </Text>{data.time}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* --------------available blood groups--------------------- */}

                    <ScrollView style={styles.bbavailable}>
                        <Text style={styles.h1}>Available Blood Groups</Text>

                        <View style={styles.bgdiv}>
                            {/* <Text style={styles.bbquantity}> 3 available </Text> */}

                            {data.AvalibleBloodGroup.map((item, key) => (

                                <Text key={key} style={styles.blood} onPress={this.SampleFunction.bind(this, item)}>

                                    <Image style={styles.bgimg} source={require('../assets/bloodgrp.png')} />
                                    {item} </Text>)
                            )}
                        </View>
                    </ScrollView>
                </View>
                )}
        </SafeAreaView>
    );
}




const styles = StyleSheet.create({
    bbnamediv: {
        backgroundColor: BGColor,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: verticalScale(120),
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // -------- img and name-------------
    subdiv: {
        // marginTop: "2%",
        display: 'flex',
        flexDirection: 'row',
    },
    imgdiv: {
        justifyContent: 'center',
    },
    BBimg: {
        height: verticalScale(50),
        width: verticalScale(50),
    },
    namediv: {
        justifyContent: 'center',
    },
    BBname: {
        fontFamily: 'serif',
        fontSize: moderateScale(30),
        fontWeight: "700",
        color: "black",
    },
    BBrating: {
        fontFamily: 'serif',
        fontSize: moderateScale(14),
        fontWeight: "500",
        color: "black",
    },
    // -----------infoooo descriptipon------------
    bbdescription: {
        marginLeft: "2%",
        marginRight: "2%",
        borderRadius: 15,
        color: "black",
        marginTop: "3%",
        backgroundColor: "rgba(106, 106, 204, 0.2)",
        // backgroundColor: 'pink',
    },
    infodiv: {
        marginTop: "4%",
        marginLeft: "4%",
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: "7%",
    },
    infoimg: {
        height: verticalScale(35),
        width: verticalScale(35),
    },
    infoT: {
        fontSize: 21,
        fontWeight: 'bold',
        fontFamily: 'serif',
        color: "black",
        flexWrap: 'wrap',
    },
    infoD: {
        marginLeft: "4%",
        fontSize: 18,
        fontFamily: 'serif',
        color: "black",
        flexWrap: 'wrap',
        width: 300,
        // backgroundColor:'cyan',
    },
    //    --------avaialable blood gropus--------
    bbavailable: {
        marginTop: "2%",
        // backgroundColor: 'cyan',
    },
    h1: {
        fontWeight: "bold",
        fontSize: 26,
        fontFamily: 'serif',
        marginTop: "1%",
        color: "black",
        marginLeft: "5%",
    },

    bgdiv: {
        // backgroundColor: 'purple',
        padding: "2%",
        backgroundColor: "rgba(106, 106, 204, 0.2)",
        marginLeft: "2%",
        marginRight: "2%",
        borderRadius: 15,


    },
    bgimg: {
        height: verticalScale(28),
        width: verticalScale(30),


    },
    blood: {
        // fontWeight: "bold",
        fontFamily: 'serif',
        fontSize: 22,
        color: "black",
        marginLeft: "25%",
        padding: 5,

    },
    bbquantity: {
        // backgroundColor: 'pink',
        fontSize: 20,
        color: "black",
        textAlign: "center",
    }
})

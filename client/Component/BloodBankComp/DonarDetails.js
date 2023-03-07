import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../navigation/data/metrics";
import { BGColor} from "../../constants"
import { useRoute } from '@react-navigation/native';
import { SERVER_URL } from "../../constants";
export default function DonarDetails() {
    const route = useRoute()
    const id = route.params.paramKey
    const URL = SERVER_URL + `/find/${id}`
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
                                <Image style={styles.BBimg} source={require('../assets/blooddonor2.png')} />
                            </View>
                            <View style={styles.namediv}>
                                <Text style={styles.BBname}>{data.name} </Text>
                                
                            </View>
                        </View>
                    </View >

                    {/* -------------info DESCRIPTION -------------- */}
                    <View style={styles.bbdescription}>
                        <View style={styles.subdiv}>
                            <View style={styles.infodiv}>
                                <View style={styles.info}>
                                    <Image style={styles.infoimg}
                                        source={require('../assets/blooddonor.png')} />
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>Name: </Text>{data.name}</Text>
                                </View>
                                <View style={styles.info}>
                                    <Image style={styles.infoimg}
                                        source={require('../assets/address.png')} />
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>Location: </Text>{data.address}</Text>
                                </View>
                                <View style={styles.info}>
                                    <Image style={styles.infoimg}
                                        source={require('../assets/phone.png')} />
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>Phone: </Text>{data.phone}</Text>
                                </View>
                                <View style={styles.info}>
                                    <Image style={styles.infoimg}
                                        source={require('../assets/dot.png')} />
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>Gender: </Text>{data.gender}</Text>
                                </View><View style={styles.info}>
                                    <Image style={styles.infoimg}
                                        source={require('../assets/dot.png')} />
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>Age: </Text>{data.age}</Text>
                                </View>
                                
                                <View style={styles.info}>
                                    <Image style={styles.infoimg}
                                        source={require('../assets/dot.png')} />
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>CNIC: </Text>{data.cnic}</Text>
                                </View>
                                <View style={styles.info}>
                                    <Image style={styles.infoimg}
                                        source={require('../assets/dot.png')} />
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>Available Blood Group: </Text>{data.bloodgrp}</Text>
                                </View>
                                
                                <View style={styles.info}>
                                    <Image style={styles.infoimg}
                                        source={require('../assets/dot.png')} />
                                    <Text style={styles.infoT}>   Health Record:</Text>
                                </View>
                                <View style={styles.records}>
                                <View style={styles.info}>
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>Weight: </Text>{data.weight}</Text>
                                </View>
                                <View style={styles.info}>
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>HB: </Text>{data.HB}</Text>
                                </View>
                                <View style={styles.info}>
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>Previously Donated: </Text>{data.prev}</Text>
                                </View>
                                <View style={styles.info}>
                                    <Text style={styles.infoD} ><Text style={styles.infoT}>Suffered From any diseases: </Text>{data.suffer}</Text>
                                </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* --------------available blood groups--------------------- */}

                   
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
        marginLeft: "10%",
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: "3%",
    },
    infoimg: {
        height: verticalScale(30),
        width: verticalScale(30),
    },
    infoT: {
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'serif',
        color: "black",
        flexWrap: 'wrap',
    },
    infoD: {
        marginLeft: "5%",
        fontSize: 17,
        fontFamily: 'serif',
        color: "black",
        flexWrap: 'wrap',
        width: 300,
        // backgroundColor:'cyan',
    },
    records:{
        marginLeft:40,

    }
})

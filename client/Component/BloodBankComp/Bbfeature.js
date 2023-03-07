import React, { useState, useEffect } from "react";
import styles from "./bbstyles";
import { Text, View, SafeAreaView, ActivityIndicator, FlatList, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { SERVER_URL } from "../../constants";

// fariya ip add 192.168.0.109
// edurome ip address 10.57.182.136 
//fetching data from the backend through url below

export default function Bbfeature({ bloodgrp }) {
    const URL = SERVER_URL + `/api/bloodbank/find?bloodBank=${bloodgrp}`
    const navigation = useNavigation();
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
    }, [bloodgrp]);

    return (
        <SafeAreaView vertical={true}>
            {/* While fetching show the indicator, else show response*/}
            {isLoading ? (<ActivityIndicator />) :
                (

                    <ScrollView vertical={true}>
                        <View  >
                            <Text style={styles.featuredhead}>BloodBanks</Text>
                        </View>
                        <FlatList
                            horizontal={false}
                            data={data} renderItem={({ item }) => (

                                <View style={styles.bloodbankdiv} key={item._id}>

                                    <View style={styles.subdiv}>
                                        <View style={styles.imgdiv}>
                                            <Image style={styles.BBimg}
                                                source={require('../assets/bloodbank-red.png')} />
                                        </View>
                                        <View style={styles.namediv}>
                                            <Text style={styles.BBname}>{item.name} </Text>
                                        </View>
                                        <View style={styles.Btndetaildiv}>
                                            <TouchableOpacity style={styles.Btndetail} onPress={() => {   // Pass and merge params back to home screen
                                                navigation.navigate('BbDetails', { paramKey: item._id })
                                            }}>
                                                <Text style={styles.btntext}>Details</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={styles.subdiv}>
                                        <View style={styles.linediv}>
                                            <Image style={styles.line}
                                                source={require('../assets/line.png')} />
                                        </View>
                                        <View style={styles.infodiv}>

                                            <View style={styles.info}>
                                                <Image style={styles.infoimg} source={require('../assets/address.png')} />
                                                <Text style={styles.infoD} >
                                                    <Text style={styles.infoT}>Address: </Text>
                                                    {item.address}</Text>
                                            </View>

                                            <View style={styles.info}>
                                                <Image style={styles.infoimg}
                                                    source={require('../assets/phone.png')} />
                                                <Text style={styles.infoD} ><Text style={styles.infoT}>Phone: </Text>{item.phone}</Text>
                                            </View>

                                        </View>
                                    </View>
                                    {/* <TouchableOpacity style={styles.Btndetail} onPress={() => {   // Pass and merge params back to home screen
                                        navigation.navigate('BbDetails', { paramKey: item._id })
                                    }}>
                                        <Text style={styles.btntext}>Details</Text>
                                    </TouchableOpacity> */}
                                </View>
                            )}
                        />
                    </ScrollView>
                )}
        </SafeAreaView>
    );
}

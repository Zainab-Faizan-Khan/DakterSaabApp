import React, { useState, useEffect } from 'react';
import styles from "./bbstyles"
import {Text, View,SafeAreaView,ActivityIndicator,FlatList,Image,TouchableOpacity,StyleSheet,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SERVER_URL } from '../../constants';

export default function DonorList({ bloodgrp }) {
    // const { email } = route.params;
    const URL = SERVER_URL + `/find?donar=${bloodgrp}`;
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
    }, [bloodgrp]);

    return (
        <ScrollView style={styles.container}>
            <View  >
                <Text style={styles.featuredhead}>Donors</Text>
            </View>
            {isLoading ? (<ActivityIndicator />) :
                (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View style={styles.bloodbankdiv}>
                                <View style={styles.subdiv}>
                                    <View style={styles.imgdiv}>
                                        <Image
                                            style={styles.BBimg}
                                            source={require('../assets/blooddonor-red.png')}/>
                                    </View>
                                    <View style={styles.namediv}>
                                        <Text style={styles.BBname}>{item.name} </Text>
                                    </View>
                                    <View style={styles.Btndetaildiv}>
                                        <TouchableOpacity style={styles.Btndetail}
                                            onPress={() => {
                                                // Pass and merge params back to home screen
                                                navigation.navigate('DonarDetails', { paramKey: item._id });
                                            }}>
                                            <Text style={styles.btntext}>Details</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* <View style={styles.subdiv}>
                                <View style={styles.linediv}>
                                    <Image style={styles.line}
                                        source={require('../assets/line.png')} />
                                </View>
                            </View> */}
                            </View>
                        )}
                    />
                )}
        </ScrollView>
    );
}

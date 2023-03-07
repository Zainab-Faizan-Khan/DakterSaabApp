import * as React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/';

export default function HomeScreen({ navigation, route }) {
    const { email } = route.params;

    return (
        <>
            <View style={styles.appbar}>
                <View style={styles.appbardiv}>
                    <Text style={styles.appname}> Dakter Saab</Text>
                    <TouchableOpacity style={styles.p}
                        onPress={() => navigation.navigate('Profile', { email })}
                        // onPress={() => navigation.navigate('Profile')}

                        >
                        <Image style={styles.prof}
                            source={require('../assets/fariya.jpeg')} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.appsubhead}> Welcome</Text>
                <Text style={styles.appsubhead}> What are you looking for? </Text>
            </View>

            <View style={styles.maindiv}>
                <TouchableOpacity style={styles.carddiv}
                    onPress={() => navigation.navigate('FindDr', { email: email })}>
                    <View style={styles.imdiv}>
                        <Image style={styles.img}
                            source={require('../assets/DR1.png')} />
                    </View>
                    <View style={styles.textdiv}>
                        <Text style={styles.cardtext}>Find Doctor</Text>
                        <Text style={styles.infotext} >Discover affordable doctors near you, without leaving your location!</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.carddiv}
                    onPress={() => navigation.navigate('Blood', { email: email })}>
                    <View style={styles.imdiv}>
                        <Image style={styles.img}
                            source={require('../assets/BLOOD1.png')} />
                    </View>
                    <View style={styles.textdiv}>
                        <Text style={styles.cardtext}>BloodBank</Text>
                        <Text style={styles.infotext} >Say goodbye to the hassle of finding your required blood group.</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.carddiv}
                    onPress={() => navigation.navigate('OPDHospital', { email: email })}>
                    <View style={styles.imdiv}>
                        <Image style={styles.img}
                            source={require('../assets/OPD1.png')} />
                    </View>
                    <View style={styles.textdiv}>
                        <Text style={styles.cardtext}>OPD</Text>
                        <Text style={styles.infotext} >No more waiting in line for tokens, let's save you some time!</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.carddiv}
                    onPress={() => navigation.navigate('Pharmacy')}>
                    <View style={styles.imdiv}>
                        <Image style={styles.img}
                            source={require('../assets/PILL1.png')} />
                    </View>
                    <View style={styles.textdiv}>
                        <Text style={styles.cardtext}>Pharmacy</Text>
                        <Text style={styles.infotext} >Discover the best deals on medicine at pharmacies near you!</Text>
                    </View>
                </TouchableOpacity>



            </View></>
    );
}
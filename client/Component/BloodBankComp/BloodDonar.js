import React from 'react'
import { useState, useContext } from 'react';
import DonorList from './DonarList';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./bbstyles"
import ProfileHeader from '../screens/Header';

export default function BloodDonar({ navigation, route }) {
    const { email } = route.params;
    const [bloodgrp, setbloodgrp] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'A RhD positive (A+)', value: 'A-positive' },
        { label: 'A RhD negative (A-)', value: 'A-negative' },
        { label: 'B RhD positive (B+)', value: 'B-positive' },
        { label: 'B RhD negative (B-)', value: 'B-negative' },
        { label: '0 RhD positive (O+)', value: 'O-positive' },
        { label: 'O RhD negative (O-)', value: 'O-negative' },
        { label: 'AB RhD positive (AB+)', value: 'AB-positive' },
        { label: 'AB RhD negative (AB-)', value: 'AB-negative' },

    ]);

    return (
        <SafeAreaView>
            {/* BloodBank header */}
            <View style={styles.s1}>
            <ProfileHeader email={email}/>

                {/* ---------------- dropdown---------------- */}
                <DropDownPicker style={styles.dropdown}
                    placeholder="Select Blood Group"
                    open={open}
                    value={bloodgrp || ""}
                    items={items}
                    setOpen={setOpen}
                    setValue={(bloodgrp) => setbloodgrp(bloodgrp)}
                    setItems={setItems} />
            </View >
            {/* ------------------sort buttons  ----------------------- */}
            <View style={styles.sortbtndiv}>
                <TouchableOpacity style={styles.sortbtns} onPress={() => navigation.navigate('BloodBank',{ email: email })}>
                    <Image style={styles.sortbtnimg}
                        source={require('../assets/bloodbank.png')} />
                    <Text style={styles.sortbtntext}>BloodBanks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sortbtns}>
                    <Image style={styles.sortbtnimg}
                        source={require('../assets/blooddonor.png')} />
                    <Text style={styles.sortbtntext}>Donors</Text>
                </TouchableOpacity>
            </View>
             {/* ------------------Donor List  ----------------------- */}
             <DonorList bloodgrp={bloodgrp} />
        </SafeAreaView>
    )
}




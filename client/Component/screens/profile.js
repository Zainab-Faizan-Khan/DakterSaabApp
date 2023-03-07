import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, ScrollView, Image, SafeAreaView, StyleSheet } from 'react-native';

import { SERVER_URL } from '../../constants';
import { useNavigation } from '@react-navigation/native';

// Backend API endpoint to retrieve data from MongoDB
const BGColor = "#6a6acc"
const rgbaColor = 'rgba(106, 106, 204, 0.2)'

const Profile = ({ route }) => {
  const [editMode, setEditMode] = useState(false);
  const URL = SERVER_URL + `/user?email=${route.params.email}`;
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
    <View style={styles.infoC}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Name:</Text>
        <Text style={styles.infoValue}>{item.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>{item.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Phone:</Text>
        <Text style={styles.infoValue}>{item.phone}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>CNIC:</Text>
        <Text style={styles.infoValue}>{item.cnic}</Text>
      </View>
    </View>

  );


  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>User Profile</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage}
            source={require('../assets/fariya.jpeg')} />
        </View>
        <View style={styles.datadiv} >
          <View  >
            <FlatList
              data={data}// list of categories to filter by
              renderItem={renderDataItem}
              horizontal
            />
          </View>

          {editMode && (
            <View style={styles.editContainer} >
              <TouchableOpacity style={styles.editbtn} onPress={() => setEditMode(false)}>
                <Text style={styles.editText}>Save</Text>
              </TouchableOpacity>
            </View>
          )}
          {!editMode && (
            <View style={styles.editContainer}>
              <TouchableOpacity style={styles.editbtn} onPress={() => setEditMode(true)}>
                <Text style={styles.edittext}>Edit</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.editContainer}>
            <TouchableOpacity style={styles.editbtn}
              onPress={() => navigation.navigate('Welcome')}
            >
              <Text style={styles.edittext}>Logout</Text>
            </TouchableOpacity>

          </View>
        </View>

      </View>


    </>

  );
};

export default Profile
//  

//  


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    padding: 15,
    backgroundColor: BGColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'serif',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    resizeMode: 'cover',
    zIndex:10,
  },

  datadiv: {
    backgroundColor: rgbaColor,
    position: 'absolute',
    top: 170,
    alignSelf:'center',
    paddingLeft:25,
    paddingRight:25,
    borderRadius:10,
  },
  infoC: {
    marginTop: 100,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom:10,
  },
  
  infoLabel: {
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: 'black',
    fontSize: 16,
    padding: 5,
    width: 80,
  },
  infoValue: {
    fontSize: 16,
    fontFamily: 'serif',
    backgroundColor: rgbaColor,
    borderRadius: 10,
    padding: 10,
    flexWrap:'wrap',
    width: 250,
    color: "black",
    justifyContent:'center',
    alignContent:'center'
  },

  editContainer: {
    marginTop: 20
  },
  editbtn: {
    marginBottom: "3%",
    backgroundColor: '#6a6acc',
    height: 50,
    width: 160,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  edittext: {
    color: 'white',
    fontFamily: 'serif',
  }
})
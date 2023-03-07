import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, ScrollView, Image, SafeAreaView, TextInput } from 'react-native';
import styleDr from './styleDr';
import { SERVER_URL } from '../../constants';
import RecommendedDr from './RecommendedDoctor';
import ProfileHeader from '../screens/Header';
const BGColor = "#6a6acc"
const rgbaColor = 'rgba(106, 106, 204, 0.2)'

export default function FindDr({ navigation, route }) {
  const { email } = route.params;
  <ProfileHeader email={email}/>
  const URL = SERVER_URL + `/api/doctor/findDr`;
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]); // state variable to store the data
  const [filteredData, setFilteredData] = useState([]); // state variable to store the filtered data
  const [selectedCategories, setSelectedCategories] = useState([]); // state variable to store the selected categories

  //Fetch Data From Backend
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };
  //------------Search Dieases-------------------
  const specialties = {
    'Medicine': ['fever', 'cold', 'flu', 'cough'],
    'ENT': ['ear infection', 'sore throat', 'sinusitis', 'allergies'],
    'Breast Sugery': ['heart disease', 'hypertension', 'angina', 'arrhythmia'],
    'Cardiologist': ['heart disease', 'high cholesterol', 'hypertension'],
    'Dermatology': ['acne', 'eczema', 'psoriasis', 'skin cancer'],
    'Gastroenterologist': ['acid reflux', 'constipation', 'irritable bowel syndrome', 'ulcerative colitis'],
    'Neurologist': ['headache', 'migraine', 'Parkinson disease', 'stroke'],
    'Ophthalmologist': ['cataracts', 'glaucoma', 'macular degeneration', 'refractive errors'],
    'Orthopedist': ['arthritis', 'back pain', 'osteoporosis', 'sports injuries'],
    'Pediatrician': ['ADHD', 'asthma', 'ear infections', 'vaccinations'],
    'Psychiatrist': ['anxiety', 'depression', 'obsessive-compulsive disorder', 'schizophrenia'],
    'Urologist': ['bladder infections', 'erectile dysfunction', 'kidney stones', 'prostate cancer']
  };
  useEffect(() => {
    const filteredDoctors = data.filter((item) => {
      if (!item.Speciality) {
        return false;
      }
      const diseases = specialties[item.Speciality];
      if (!diseases) {
        return false;
      }
      return diseases.some((disease) => {
        return disease.toLowerCase().includes(searchText.toLowerCase());
      });
    });
    setFilteredData(filteredDoctors);
  },
    [searchText, data]);

  //---- FilterBy Category-------------
  const handleCategorySelect = (category) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);

    // Filter the data based on the selected categories
    const newFilteredData = data.filter((item) =>
      newSelectedCategories.every((c) => item.Speciality
        .includes(c))
    );
    setFilteredData(newFilteredData);
  };

  //-------------Category btn ------------
  const renderCategoryItem = ({ item }) => (
    <View style={styleDr.catdiv}>
      <TouchableOpacity style={styleDr.catbtn} onPress={() => handleCategorySelect(item)}>
        <Text style={styleDr.cattext}>{item}</Text>
      </TouchableOpacity>
    </View>

  );
  //------------- Nearby  doctors--------
  const renderDataItem1 = ({ item }) => (
    <>
      <ScrollView vertical={true}>
        <View style={styleDr.docdiv} key={item._id}>
          <View style={styleDr.subdiv1}>
            <View style={styleDr.namediv}>
              <Image style={styleDr.drimg}
                source={require('../assets/doc.png')} />
              <View>
                <Text style={styleDr.nametext}>{item.Name} </Text>
              </View>
            </View>

            <View>
              <TouchableOpacity style={styleDr.Btn}
                onPress={() => { navigation.navigate('DrDetails', { paramKey: item._id }); }}>
                <Text style={styleDr.btntext} >Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styleDr.subdiv2}>
            <View style={styleDr.linediv}>
              <Image style={styleDr.line}
                source={require('../assets/line.png')} />
            </View>

            <View style={styleDr.infodiv}>
              <View style={styleDr.info}>
                <Image style={styleDr.infoimg}
                  source={require('../assets/address.png')} />
                <Text style={styleDr.infoF}>
                  <Text style={styleDr.infoH}>Field: </Text>
                  {item.Field}
                </Text>
              </View>
              <View style={styleDr.info}>
                <Image style={styleDr.infoimg}
                  source={require('../assets/phone.png')} />
                <Text style={styleDr.infoF}>
                  <Text style={styleDr.infoH}>Consultancy Fees: </Text>
                  {item.ConsultancyFees}
                </Text>
              </View>
              <View style={styleDr.info}>
                <Image
                  style={styleDr.infoimg}
                  source={require('../assets/phone.png')} />
                <Text style={styleDr.infoF}>
                  <Text style={styleDr.infoH}>Speciality: </Text>
                  {item.Speciality}
                </Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </>
    // ------   Near by end ----------

  );
  //----------------------Price Filter---------------------
  const [selectedValue, setSelectedValue] = useState(null);
  const values = ['Low to High', 'High to Low'];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  function handleValueSelect(value) {
    setSelectedValue(value);
    setIsDropdownOpen(false);
    if (value === values[0]) {
      L2H();
    } else if (value === values[1]) {
      H2L();
    }
  }
  const L2H = () => {
    data.sort((a, b) => a.ConsultancyFees - b.ConsultancyFees);
    console.log(data);
    setData([...data]);
  };
  const H2L = () => {
    data.sort((a, b) => b.ConsultancyFees - a.ConsultancyFees);
    console.log(data);
    setData([...data]);
  };
  return (
    <>
      {/* ---------------------------- Header ------------------------- */}
      <View style={styleDr.s1}>
      <ProfileHeader email={email}/>

        {/* ---------------- Search bar---------------- */}
        <View style={styleDr.sbar}>
          <View style={styleDr.search}>
            <TextInput style={styleDr.inputsearch}
              placeholder="Search Disease"
              onChangeText={(text) => setSearchText(text)} />
          </View>
          <View style={styleDr.searchimgdiv}>
            <TouchableOpacity style={styleDr.search}>
              <Image style={styleDr.simg}
                source={require('../assets/sicon.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/*---------------- Filter Price----------------- */}
      <View style={styleDr.filterdiv} >
        <View style={styleDr.all}>
          <TouchableOpacity
            onPress={() => navigation.navigate('FindDr')}>
            <Text style={styleDr.alltext}>All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styleDr.filter}
            onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Text style={styleDr.filtertext} >{selectedValue || 'Sort By Price'}</Text>
            <Text style={styleDr.filtercaret} >{isDropdownOpen ? '▲' : '▼'}</Text>
          </TouchableOpacity>

          {isDropdownOpen && (
            <View >
              {values.map((value) => (
                <TouchableOpacity style={{
                  backgroundColor: selectedValue === value ? rgbaColor : 'white',
                  borderWidth: 1,
                  borderRadius: 4,
                  padding: 4,
                  color: 'black',
                }}
                  key={value}
                  onPress={() => handleValueSelect(value)}>
                  <Text style={styleDr.filtertext}>{value}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
      {/*------------- Rander Categories--------------- */}
      <View style={styleDr.container}>
        <Text style={styleDr.h1}>Categories</Text>
        <FlatList
          data={['Medicine', 'Rheumatology', 'Oncology', 'Nephrology', 'Urology', 'Cardiology', 'Dermatology', 'Pulmonology', 'Opthalmology', 'Nuero Surgery', 'ENT', 'Gastrology']} // list of categories to filter by
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item}
          horizontal showsHorizontalScrollIndicator={false} />
      </View>

      {/*------------------ Render Recommended Doctor-----------------*/}
      <View style={styleDr.container}>
        <RecommendedDr />
      </View>

      {/* ----------------- Filtered by categories dr result -------------------*/}
      <ScrollView>
        <SafeAreaView vertical={true}>
          <View style={styleDr.container}>
            <Text style={styleDr.h1}>Doctors</Text>
          </View>
          <View style={styleDr.container}>
            <FlatList
              data={filteredData}// list of categories to filter by
              renderItem={renderDataItem1} />
          </View>
        </SafeAreaView>
      </ScrollView>
    </>

  );
};

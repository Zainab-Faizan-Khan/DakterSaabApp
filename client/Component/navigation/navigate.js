import * as React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import Welcome from '../auth/Welcome';
import LogIn from '../auth/Login';
import Register from '../auth/Register';
import Verification from '../auth/Verification';

import HomeScreen from '../screens/Home';
import Profile from '../screens/profile';

import FindDr from '../DoctorComp/FindDr.js';
import DrDetails from '../DoctorComp/DrDetails';
import AppointmentConfirmation from '../DoctorComp/AppointmentConfirmation';
import Confirmed from '../DoctorComp/Confirmed';

import Blood from "../BloodBankComp/Blood"
import BloodBank from "../BloodBankComp/BloodBank"
import BbDetails from '../BloodBankComp/BbDetails';
import Donate from '../BloodBankComp/donateBloodForm';
import BloodDonar from '../BloodBankComp/BloodDonar';
import DonarDetails from '../BloodBankComp/DonarDetails';

import OPDdr from '../TokenComp/OPDHospital';
import OPDHospitalDetails from '../TokenComp/OPDHospitalDetails'
import OPDdrDetail from '../TokenComp/OPDdrDetails';
import TokenFetch from '../TokenComp/TokenFetch';

import Pharmacy from '../screens/Pharmacy';
const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator >
          {/* <Stack.Screen name="Componenet" component={Component} options={{ headerShown: false }} /> */}
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="login" component={LogIn} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="verification" component={Verification} options={{ headerShown: false }} />

          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

          <Stack.Screen name="FindDr" component={FindDr} options={{ headerShown: false }} />
          <Stack.Screen name="DrDetails" component={DrDetails} options={{ headerShown: false }} />
          <Stack.Screen name="AppointmentConfirmation" component={AppointmentConfirmation} options={{ headerShown: false }} />
          <Stack.Screen name="Confirmed" component={Confirmed} options={{ headerShown: false }} />

          <Stack.Screen name="Blood" component={Blood} options={{ headerShown: false }} />
          <Stack.Screen name="BloodBank" component={BloodBank} options={{ headerShown: false }} />
          <Stack.Screen name="Donate" component={Donate} options={{ headerShown: false }} />
          <Stack.Screen name="BloodDonar" component={BloodDonar} options={{ headerShown: false }} />
          <Stack.Screen name="DonarDetails" component={DonarDetails} options={{ headerShown: false }} />
          <Stack.Screen name="BbDetails" component={BbDetails} options={{ headerShown: false }} />

          <Stack.Screen name="OPDHospital" component={OPDdr} options={{ headerShown: false }} />
          <Stack.Screen name="OPDHospitalDetails" component={OPDHospitalDetails} options={{ headerShown: false }} />
          <Stack.Screen name="OPDdrDetail" component={OPDdrDetail} options={{ headerShown: false }} />
          <Stack.Screen name="TokenFetch" component={TokenFetch} options={{ headerShown: false }} />

          <Stack.Screen name="Pharmacy" component={Pharmacy} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default RootNavigation
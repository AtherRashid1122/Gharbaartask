import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import DrawerContent from './Content';
import Splash from '../../Screens/Splash/Splash';
import Login from '../../Screens/Login/Login';
import Home from '../../Screens/Home/Home';
import {ImageBackground} from 'react-native';
const Drawer = createDrawerNavigator();

const DrawerNavigator = ({isLoggedIn}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      // initialRouteName={!isLoggedIn ? 'Home' : 'Dashboard'}>
      initialRouteName={'Login'}>
      {/* {isLoggedIn && <Drawer.Screen name="Dashboard" component={Dashboard} />} */}
      {/* <Drawer.Screen name="Splash" component={Splash} /> */}

      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
    </Drawer.Navigator>
  );
};
// const mapStateToProps = state => {
//   const {isLoggedIn} = state.auth;
//   return {isLoggedIn};
// };
export default DrawerNavigator;

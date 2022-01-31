

import React from 'react';
import { Text, View } from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Projectupdate from '../Projectupdate/Projectupdate';
import DashBoard from '../DashBoard/DashBoard';
import bottom1 from '../../Utils/Icons/bottom1.png'
import Group7 from '../../Utils/Icons/svgs/Group7.svg'
import Post1 from '../../Utils/Icons/svgs/post1.svg'
import Group8 from '../../Utils/Icons/svgs/Group8.svg'

import Login from '../Login/Login';
const componentName = ({ params }) => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Tab.Navigator
        initialRouteName="Login"
        activeColor="#075595"

        barStyle={{ backgroundColor: 'white' }}
      >
        <Tab.Screen
          name="DashBoard"
          component={DashBoard}
          options={{
            tabBarLabel: 'Overview',
            tabBarIcon: ({ color }) => (
              <Group7 color={'blue'} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Projectupdate"
          component={Projectupdate}
          options={{
            tabBarLabel: 'Project Updates',
            tabBarIcon: ({ color }) => (
              <Post1 color={'blue'} size={26} />
            ),
          }}
        />


        <Tab.Screen
          name="crer"
          component={Projectupdate}
          options={{
            tabBarLabel: 'My Unit Details',
            tabBarIcon: ({ color }) => (
              <Group8 color={'blue'} size={26} />
            ),
          }}
        />


  

      </Tab.Navigator>
    </View>
  );
};

export default componentName;

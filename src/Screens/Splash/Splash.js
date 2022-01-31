import React from 'react';
import {Text, View, Image, ImageBackground, StatusBar} from 'react-native';
import SplashImage from '../../Utils/Icons/splash.svg';
import {hp} from '../../Constants/responsive';

import Projectupdate from '../Projectupdate/Projectupdate';
import styles from './Styles';
const Splash = ({route, navigation}) => {
  window.setTimeout(async () => {
    // navigation.navigate('Root');
    navigation.navigate('Root');

  }, 2120);

  return (

<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

<Image style={{height:200,width:'50%'}} source={require('../../Utils/Icons/drawericon.png')} >

</Image>
</View>


    // <Image
    //   source={require('../../Utils/Icons/logo.png')}
    //   style={{
    //     flex: 1,
    //     width: null,
    //     height: null,
    //   }}
    //   resizeMode="stretch">
    //   {/* <StatusBar hidden={true} /> */}
    //   <View style={{flex: 1}}></View>
    // </Image>
  );
};

export default Splash;

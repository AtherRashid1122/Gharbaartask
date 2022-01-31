import React from 'react';
import { Text, View, Image,StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import drawericon from '../Utils/Icons/drawericon.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../Screens/Login/Styles';
const CustomHeader = ({ params }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{justifyContent:'center',alignItems:'center',alignContent:'center',}}>
      <Header
        backgroundColor="transparent"
        leftComponent={
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  height={20} width={20} source={require('../Utils/Icons/drawericon.png')} />
          </TouchableOpacity>
        }

        rightComponent={

          <View style={{ flexDirection: 'row', width: 140, justifyContent: 'space-around', alignContent: 'center', alignItems: 'center', }}>
            <TouchableOpacity style={{ flexDirection: 'row' }}>

              <Image height={20} width={20} source={require('../Utils/Icons/bellicon.png')} />
              <View style={{ height: 20, width: 20, borderRadius: 100, backgroundColor: '#C80000', marginLeft: -10,justifyContent:'center',alignItems:'center' }}>
                <Text style={{fontSize:10,color:'white',justifyContent:'center'}}>
                  12
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image height={20} width={20} source={require('../Utils/Icons/headerman.png')} />
            </TouchableOpacity>
          </View>
        }
      />

    </SafeAreaView>
  );



};





export default CustomHeader;

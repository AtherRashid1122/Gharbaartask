import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import MenuBg from '../../Utils/Icons/drawermenuimg.svg';
import {Drawer} from 'react-native-paper';
import {BackgroundImage} from 'react-native-elements/dist/config';
import {hp, wp} from '../../Constants/responsive';
const DrawerContent = ({
  props,
  navigation,
  balance,
  getUserBalance,
  user,
  logoutUser,
  isLoggedIn,
  updateCart,
}) => {
  // useFocusEffect(
  //   React.useCallback(() => {
  //     const unsubscribe = getData();
  //     return () => {
  //       unsubscribe;
  //     };
  //   }, []),
  // );

  const handleLogout = async () => {
    try {
      await logoutUser();
      await updateCart();
      navigation.push('Login');
    } catch (err) {}
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: hp(20),
          justifyContent: 'center',
          paddingTop: hp(8),
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            style={{
              height: hp(8),
              width: hp(8),
              resizeMode: 'cover',
              borderRadius: hp(4),
              alignSelf: 'center',
              marginHorizontal: hp(3),
            }}
            source={require('../../Utils/Icons/afridi.jpeg')}
          />

          <Text
            style={{
              fontSize: 18,
              alignSelfL: 'center',
              textAlignVertical: 'center',
              alignContent: 'center',
            }}>
            Ather
          </Text>
        </View>
      </View>
      <ImageBackground
        resizeMode={'stretch'} // or cover
        style={{flex: 1}}
        // must be passed from the parent, the number may vary depending upon your screen size
        source={require('../../Utils/Icons/drawermenuimg.png')}>
        <DrawerContentScrollView {...props} style={{marginTop: 60}}>
          <Drawer.Section>
            {/* <DrawerItem
            style={styles.drawerItem}
            label="Login"
            labelStyle={styles.labelStyle}
            onPress={() => {
              navigation.navigate('Splash');
            }}
          /> */}
            <DrawerItem
              icon={({focused, color, size}) => (
                <Image
                  source={require('../../Utils/Icons/home.png')}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
              )}
              style={styles.drawerItem}
              label="Home"
              labelStyle={styles.labelStyle}
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
           
      
            <DrawerItem
              icon={({focused, color, size}) => (
                <Image
                  source={require('../../Utils/Icons/Logout.png')}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
              )}
              style={styles.drawerItem}
              label="Logout"
              labelStyle={styles.labelStyle}
              onPress={() => {
                navigation.navigate('Splash');
              }}
            />
          </Drawer.Section>
        </DrawerContentScrollView>
      </ImageBackground>
    </View>
  );
};
const mapStateToProps = state => {
  const {balance} = state.competitionuser;
  const {user, isLoggedIn} = state.auth;

  return {balance, user, isLoggedIn};
};
export default DrawerContent;
// export default connect(mapStateToProps, {
//   getUserBalance,
//   logoutUser,
//   updateCart,
// })(DrawerContent);

const styles = StyleSheet.create({
  upperContainer: {
    paddingVertical: 40,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  mainText: {
    fontSize: 20,
  },
  mainTextSm: {
    fontSize: 13,
  },
  labelStyle: {
    fontSize: 12,
    color: 'white',
  },
  largeText: {
    fontSize: 17,
    marginTop: 10,
    color: 'white',
    marginLeft: 8,
    alignSelf: 'center',
  },
  drawerItemStyle: {
    width: '100%',
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  drawerItem: {
    marginTop: 0,
    marginBottom: 0,
    paddingHorizontal: 15,
    color: 'white',
    // paddingVertical: 5,
    // paddingLeft: 30,

    justifyContent: 'center',
  },
  sectionStyle: {
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
  },
  listStyle: {
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    paddingLeft: 40,
    justifyContent: 'center',
  },
  itemStyle: {
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    paddingLeft: 55,
    justifyContent: 'center',
  },
  blurView: {
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

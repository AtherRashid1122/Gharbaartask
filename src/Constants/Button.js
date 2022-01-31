import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Individual from '../Utils/Icons/Individual_icon.svg';
import Company from '../Utils/Icons/company_icon.svg';
import {hp} from './responsive';
const CustomButton = ({
  title,
  borderradius,
  backgroundcolor,
  textcolor,
  style,
  onpress,
  fontsize,
  width,
  padding,
  marginvertical,
  alignSelf,
  textalign,
  alighitems,
  Icon,
  flexdirection,
}) => (
  <View
    style={{
      borderRadius: borderradius,
      backgroundColor: backgroundcolor,
      marginVertical: marginvertical,
      width: width,
      alignSelf,
      alignItems: alighitems,
    }}>
    <TouchableOpacity onPress={onpress}>
      <View
        style={{
          flexDirection: flexdirection,
          alignItems: alighitems,
          alignSelf: alignSelf,
          marginHorizontal: hp(5),
        }}>
        {Icon}
        <Text
          style={{
            color: textcolor,
            fontSize: fontsize,
            width: width,
            padding: padding,
            textAlign: textalign,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default CustomButton;

import React from 'react';
import {Text, View} from 'react-native';

const CustomText = ({
  title,
  style,
  textcolor,
  fontsize,
  marginhorizontal,
  marginvertical,
  aligntext,
  onpress,
  marginbottom,
}) => (
  <View>
    <Text
      onPress={onpress}
      style={{
        color: textcolor,
        fontSize: fontsize,
        marginHorizontal: marginhorizontal,
        textAlign: aligntext,
        marginBottom: marginbottom,
      }}>
      {title}
    </Text>
  </View>
);

export default CustomText;

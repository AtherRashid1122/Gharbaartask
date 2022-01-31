
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image, FlatList, ImageBackground } from 'react-native';
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
import Entypo from 'react-native-vector-icons/Entypo'


import CustomHeader from '../../Constants/header'
const Projectupdate = () => {
  const [index, setindex] = useState(1)
  const dataflatlist = [
    {
      id: 0,
      image: require('../../Utils/Icons/Ellipse.png'),
      name: 'Sarah Ismail',
      date: 'September 20,2021',
      mainimage: require('../../Utils/Icons/secondcup.png')
    },
    {
      id: 1,
      image: require('../../Utils/Icons/Ellipse.png'),
      name: 'Sarah Ismail',
      date: 'September 20,2021',
      mainimage: require('../../Utils/Icons/secondcup.png')
    },
    {
      id: 2,
      image: require('../../Utils/Icons/Ellipse.png'),
      name: 'Sarah Ismail',
      date: 'September 20,2021',
      mainimage: require('../../Utils/Icons/secondcup.png')
    }
  ]


  const renderItem = ({ item, index }) => {
    return (

      <View style={styles.updatescreen}>
        <View style={styles.header}>
          <View style={{ width: '18%', justifyContent: 'center', marginLeft: 10 }}>
            <Image height={30} width={30} source={item.image} />
          </View>
          <View style={{ width: '60%', justifyContent: 'center' }}>
            <Text style={styles.textindex}>
              {item.name}
            </Text>
            <Text style={styles.textgrey}>
             {item.date}
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignContent: 'center', width: '22%', alignItems: 'center' }}>
            <Entypo name='dots-three-horizontal' size={24} />
          </View>
        </View>
        <View style={{backgroundColor:'green',height:height/4,marginLeft:20,marginRight:20}}>

        <ImageBackground resizeMode='cover' style={{height:height/4,}}   source={item.mainimage} />

        </View>
 
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => setindex(1)}
          style={{
            backgroundColor: index == 1 ? 'white' : '#E5E5E5',
            width: 105,
            height: height / 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5
          }}>
          {index == 1 ? <Text style={{ color: 'black' }}>
            Updates
          </Text> : <Text style={{ color: 'grey' }}>
            Updates
          </Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setindex(2)}
          style={{
            backgroundColor: index == 2 ? 'white' : '#E5E5E5',
            width: 100,
            height: height / 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5
          }}>
          {index == 2 ? <Text style={{ color: 'black' }}>
            Members
          </Text> : <Text style={{ color: 'grey' }}>
            Members
          </Text>}
        </TouchableOpacity>
      </View>


      {index == 1 ? <ScrollView style={{  height: height }}>


        <FlatList data={dataflatlist} renderItem={renderItem} />



      </ScrollView> : <ScrollView style={{ backgroundColor: 'yellow', height: height }}>
        <Text>Members Screen</Text>
      </ScrollView>}


    </View>
  );
};
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'

  },
  topbar: {
    // backgroundColor: 'red',
    // height: height / 20,
    width: '50%',
    flexDirection: 'row',
    // borderWidth: 0.5,
    borderColor: 'grey',
    margin: 10,
    // borderRadius:5



  },
  textindex: {
    color: '#221F1F',
    fontSize: 18,
    fontWeight: '500'
  },
  textgrey: {
    color: '#969BA0',
    fontSize: 12,
    // fontWeight: '500'
  },
  topbarinside: {
    // backgroundColor: 'red',
    width: 100,
    height: height / 20,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 0.5,
    borderRadius: 5


  },
  topbarinsidemembers: {
    backgroundColor: 'blue',
    width: 100,
    height: height / 14,
    justifyContent: 'center',
    alignItems: 'center'

  },
  updatescreen: {
    height: height / 1.7,
    backgroundColor: 'white',
    margin: 10
  },
  header: {
    height: height / 12,
    margin: 10,
    flexDirection: 'row',
    alignContent: 'center',

  }
})

export default Projectupdate;

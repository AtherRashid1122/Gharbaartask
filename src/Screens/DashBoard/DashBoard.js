import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, FlatList, Image, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../Constants/header';
import * as Progress from 'react-native-progress';

import {
  BarChart,

} from "react-native-chart-kit";

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


const DashBoard = ({ props, navigation }) => {
  // const navigation = useNavigation();

  const data = {
    labels: ["0CT 18", "NOV 18", "DEC 18", "JAN 19", "FEB 19",],
    datasets: [
      {
        data: [90, 20, 80, 70, 99]
      }
    ]
  };


  const dataflatlist = [
    {
      id: 0,
      image: require('../../Utils/Icons/block.png'),
      title: 'June 10, 2021'
    },
    {
      id: 1,
      image: require('../../Utils/Icons/block.png'),
      title: 'June 10, 2021'
    },
    {
      id: 1,
      image: require('../../Utils/Icons/block.png'),
      title: 'June 10, 2021'
    }
  ]

  const chartConfig = {
    // backgroundGradientFrom: "white",
    // backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    // backgroundGradientToOpacity: 0.5,
    backgroundColor: 'red',
    color: (opacity = 1) => `rgba(67, 255, 100, 0.85)`,
    ImageBackground: 'red',
    strokeWidth: 2, // optional, default 3
    // barPercentage: 0.5,
    // useShadowColorFromDataset: false // optional
  };

  const renderItem = ({ item, index }) => {
    return (
      <View >
        {/* <Text>
          {item.title}
        </Text> */}
        {/* <ImageBackground  style={{flex:1}}  source={item.image}/> */}

        <View style={styles.imagebackground}>

          <View style={styles.imagebackground1}>
            <ImageBackground resizeMode='stretch' style={styles.insideimagebackground} source={item.image} >
              <View style={{ height: 30, backgroundColor: 'black', width: 100, marginTop: 10, marginLeft: 6, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 12 }}>
                  {item.title}
                </Text>
              </View>
            </ImageBackground>

          </View>
        </View>
      </View>
    )
  }



  const renderItemproject = ({ item, index }) => {
    return (
      <View >
        {/* <Text>
          {item.title}
        </Text> */}
        {/* <ImageBackground  style={{flex:1}}  source={item.image}/> */}

        <View style={styles.imagebackground}>

          <View style={styles.imagebackground1}>
            <ImageBackground resizeMode='stretch' style={styles.insideimagebackground} source={item.image} >
            </ImageBackground>

          </View>
        </View>
      </View>
    )
  }
  // console.log("image",image)

  return (
    <View style={styles.container}>
      <CustomHeader />
      <ScrollView  style={styles.scrollview} showsVerticalScrollIndicator={false}>
        <View style={styles.projectindex}>

          <View style={styles.priceindex}>
            <Text style={styles.textindex}>
              Price index
            </Text>
            <View style={styles.viewfood}>
              <Text style={styles.foodtextcolor}>
                41 Food Court Units
              </Text>
              <Text style={styles.textunitindex}>
                - 4 Units Left
              </Text>
            </View>
          </View>
          <View>
            <BarChart
              data={data}
              width={width - 20}
              height={320}
              chartConfig={chartConfig}
            />
          </View>
        </View>


        <View style={styles.construction}>

          <Text style={styles.textindex}>
            Construction Progress
          </Text>

        </View>
        <View style={styles.flatlist}>
          <FlatList horizontal data={dataflatlist} renderItem={renderItem} />
        </View>



        <View style={styles.progress}>

          <Text style={styles.textprogressbar}>
            1-23
          </Text>
          <View style={{ marginLeft: 5 }}>

          <Progress.Bar color='#075595' style={{borderRadius:0,borderWidth:0.5,borderColor:'#E5E5E5'}} unfilledColor='lightgrey' progress={0.3} height={8} width={350} />
          </View>
        </View>

        <View style={styles.construction}>

          <Text style={styles.textindex}>
            Project Picture
          </Text>

        </View>
        <View style={styles.flatlist}>
          <FlatList horizontal data={dataflatlist} renderItem={renderItemproject} />
        </View>
        <View style={styles.progress}>

          <Text style={styles.textprogressbar}>
            1-23
          </Text>
          <View style={{ marginLeft: 5 }}>

            <Progress.Bar color='#075595' style={{borderRadius:0,borderWidth:0.5,borderColor:'#E5E5E5'}} unfilledColor='lightgrey' progress={0.3} height={8} width={350} />
          </View>
        </View>

      </ScrollView>




    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1
  },
  projectindex: {
    height: height / 2,
    backgroundColor: 'white',
    margin: 10
  },
  priceindex: {
    height: height / 12,
    // backgroundColor:'red',
    margin: 15
  },
  textindex: {
    color: '#221F1F',
    fontSize: 18,
    fontWeight: '500'
  },
  foodtextcolor: { color: '#969BA0', fontSize: 12, fontWeight: '500' },
  textunitindex: {
    color: '#221F1F',
    fontSize: 12,
    fontWeight: '500'
  },
  viewfood: { flexDirection: 'row', marginTop: 5 },
  construction: {
    // backgroundColor: 'red',
    height: height / 13,
    marginLeft: 10,
    justifyContent: 'center'
  },
  flatlist: {
    // marginLeft: 10,
    height: height / 4,
    // justifyContent:'center',alignContent:'center',alignItems:'center'
    marginBottom: 20

  },
  imagebackground: {
    height: height / 4,
    backgroundColor: 'white',
    width: width / 1.23,
    padding: 5,
    marginLeft: 10,

    // justifyContent:'center',alignContent:'center',alignItems:'center'
  },
  imagebackground1: {
    height: '100%',
    // backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },

  insideimagebackground: {
    // flex: 1,
    height: '100%',
    width: '100%',
    marginTop: 10
  },
  progress: {

    height: 10,
    // marginLeft: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textprogressbar: {
    fontSize: 12,
    marginTop: -5,
    color: '#221F1F',
    fontWeight: '500'
  },
  scrollview:{
    marginBottom:10
  }

})
export default DashBoard;
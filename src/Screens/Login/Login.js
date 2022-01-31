
import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image,ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
const Login = ({ props, }) => {
  const navigation = useNavigation();
  return (
    <ScrollView  scrollEnabled={true} contentContainerStyle={styles.container}>
 

      <TouchableOpacity style={styles.backicon} onPress={() => navigation.goBack()}>
        <Ionicons size={28} color={'white'} name="chevron-back" />
      </TouchableOpacity>
    
        <View style={styles.hederlogin}>
          <Text style={styles.textcolor}>
            Hey There,
          </Text>
          <Text style={styles.welcomecolor}>
            Welcome Back
          </Text>
        </View>

        
  <View style={styles.loginbackground} >
        
        <ImageBackground ScrollView={true} style={styles.loginbackground} source={require('../../Utils/Icons/backcircle.png')}>


          <View style={styles.imageperson}>
            <Image style={styles.imageadjust} resizeMode='cover' source={require('../../Utils/Icons/person.png')} />
          </View>
    


            {/* <View style={styles.orsection}>
<View style={styles.viewline}>

</View>

<Text style={styles.ortext}>
  Or
</Text>

<View style={styles.viewline}>

</View>
            </View> */}


{/* <View style={styles.signin}>

<View style={styles.authbutton} >
  <TouchableOpacity>
  <Image style={{height:50,width:50,}} source={require('../../Utils/Icons/google.png')}/>
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height:50,width:50,}} source={require('../../Utils/Icons/facebook.png')}/>
  </TouchableOpacity>

</View>
</View> */}

{/* <View style={styles.bottomsection}>
  <Text style={styles.textcolor}>
    Dont have an Account Yet ?
  </Text>
  <TouchableOpacity>
  <Text style={{color:'#4087EA'}}>
    {' '}Register
  </Text>
  </TouchableOpacity>
</View> */}

    


        </ImageBackground>
        <View style={styles.loginview}>
            <TouchableOpacity onPress={()=>navigation.navigate('LoginFileds')} style={styles.loginbutton}>
              <View style={styles.loginbuttonview} >

                <ImageBackground resizeMode='stretch' style={styles.imagelogin} source={require('../../Utils/Icons/loginbackground.png')}>
                  <View style={{height:30,}}>
                  <Text style={styles.logincolor}>
                    Login
                  </Text>
                  </View>
                </ImageBackground>

              </View>

            </TouchableOpacity>


            <View style={styles.orsection}>
<View style={styles.viewline}>

</View>

<Text style={styles.ortext}>
  Or
</Text>

<View style={styles.viewline}>

</View>
            </View>


<View style={styles.signin}>

<View style={styles.authbutton} >
  <TouchableOpacity>
  <Image style={{height:50,width:50,}} source={require('../../Utils/Icons/google.png')}/>
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height:50,width:50,}} source={require('../../Utils/Icons/facebook.png')}/>
  </TouchableOpacity>

</View>
</View>

<View style={styles.bottomsection}>
  <Text style={styles.textcolor}>
    Dont have an Account Yet ?
  </Text>
  <TouchableOpacity>
  <Text style={{color:'#4087EA'}}>
    {' '}Register
  </Text>
  </TouchableOpacity>
</View>



          </View>

      </View>
    

    </ScrollView>
  );
};

export default Login;


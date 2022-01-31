import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image,ScrollView ,TextInput} from 'react-native';
import { Header } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import styles from './stylesloginfiled';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
const LoginFiled = ({ props, }) => {
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>

      <TouchableOpacity style={styles.backicon} onPress={() => navigation.goBack()}>
        <Ionicons size={28} color={'white'} name="chevron-back" />
      </TouchableOpacity>
      <View style={styles.loginbackground} >
        <View style={styles.hederlogin}>
          <Text style={styles.textcolor}>
            Hey There,
          </Text>
          <Text style={styles.welcomecolor}>
            Welcome Back
          </Text>
        </View>
        <ImageBackground style={styles.loginbackground} source={require('../../Utils/Icons/backcircle.png')}>
          {/* <ImageBackground  style={{backgroundColor:'red',height:550}}   source={require('../../Utils/Icons/person.png')} >
</ImageBackground> */}

         
            <ImageBackground style={styles.imageadjust} resizeMode='cover' source={require('../../Utils/Icons/person.png')} >

                <View style={styles.outer}>
                <View style={styles.inside}> 
<Fontisto style={styles.iconstyle}  name="email" size={18}/>
<TextInput  placeholderTextColor={"#7B6F72"} placeholder='Email' style={{width:'80%'}}>

</TextInput>
</View>  

<View style={styles.password}> 
<Fontisto style={styles.iconstyle}  name="locked" size={18}/>
<TextInput   placeholderTextColor={"#7B6F72"} placeholder='Password' style={{width:'80%'}}/>


<TouchableOpacity>
<Entypo style={styles.iconstyle}  name="eye" size={18}/>
</TouchableOpacity>
</View>  
<TouchableOpacity>
<Text style={{marginTop:20,color:'#4087EA'}}>
    Forget Password ?
</Text>
</TouchableOpacity>
                </View>
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
  <Text style={{color:'#0050B7'}}>
    {' '}Register
  </Text>
  </TouchableOpacity>
</View>

          </View>


        </ImageBackground>


      </View>
    
    </View>
  );
};

export default LoginFiled;

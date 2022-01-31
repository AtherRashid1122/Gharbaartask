import { StyleSheet ,Dimensions} from "react-native";
const height=Dimensions.get('window').height
const styles = StyleSheet.create({
container: {

   
     
    backgroundColor:'#4087EA',
    flex: 1, 
    shadowOpacity:0.6,
    
    
    
    
     
},
 imagesize: { 
     height: 60, 
     width: '40%' 
    },
    backicon:{
        margin:20
    },
    loginbackground:{
        height:height/1.55,
        // backgroundColor:'#3E95D6'
    backgroundColor:'#4087EA',

    },
    hederlogin:{
        height:height/12,
        // backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    },
    textcolor:{
        fontSize:15,
        color:'white'
    },
    welcomecolor:{
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    },
    imageperson:
        {justifyContent:'center',alignItems:'center',alignSelf:'center',marginRight:20,
    },
    personbackground:{
        height:height/1.8,
        // backgroundColor:'red',
        // justifyContent:'center',
        // alignContent:'center',
        // alignItems:'center',
        // alignSelf:'center',
        borderWidth:1,
        width:'90%',
               
    },
    imageadjust:{height:height/1.56,marginTop:-80,justifyContent:'center',alignContent:'center',alignItems:'center'},
    loginview:{
        height:height,  
        color:'#FFFFFF',
        marginTop:-10
    },
    loginbutton:{width:'100%',height:height/15,justifyContent:'center',alignContent:'center',alignItems:'center'},
    logintext:{
        height:height/15,width:'80%',backgroundColor:'#4087AE',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:5
    },
    loginbackgroundd:{height:height/15,borderRadius:5,},

    loginbuttonview:{width:'78%',height:height/15,borderRadius:10,marginTop:5},
    imagelogin:{height:height/12,borderRadius:10,justifyContent:'center',alignItems:'center',alignContent:'center'},
    viewline:{height:1,width:'40%',backgroundColor:'white'},
    ortext:{margin:10,color:'white',fontWeight:'bold'},
    orsection:{flexDirection:'row',height:height/14,justifyContent:'center',alignContent:'center',alignItems:'center',marginTop:20},
    logincolor:{
        fontSize:15,
        color:'white',
        fontWeight:'bold'
    },
    signin:{flexDirection:'row',height:height/14,justifyContent:'center',alignContent:'center',alignItems:'center',width:'100%'},
    bottomsection:{flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center',height:40,},
    authbutton:{flexDirection:'row',width:'40%',justifyContent:'center',justifyContent:'space-around'},
    outer:{height:200,width:'80%',marginTop:200,alignItems:'center',alignContent:'center'},
    inside:{flexDirection:'row',backgroundColor:'white',alignContent:'center',alignItems:'center',width:'90%',borderRadius:5},
    iconstyle:{marginLeft:10,color:'#7B6F72',marginRight:5},
    password:{flexDirection:'row',backgroundColor:'white',alignContent:'center',alignItems:'center',width:'90%',marginTop:20,borderRadius:5}

    })

export default styles;

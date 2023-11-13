import { View, Text, ImageBackground, TextInput, Image, Button, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './LoginStyleSheet'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../../../Redux/UserAuthentication/UserAuthenticationActions';

function Login({navigation}){

  const [password , setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const dispatch=useDispatch();
  const {userDetails,loading,error} = useSelector((store)=>store.userAuthentication)

  const handleSignUp = ()=>{
      dispatch(login({username,password}));
  }

  useEffect(()=>{
    if(userDetails?.token){
      navigation.navigate("Home")
    }
  },[userDetails])

  return (
    <View style ={styles.container}>
      <ImageBackground source={require('./images/background-login.png')} style={[styles.background_image,styles.container]} >
        <View style={styles.header_group}>
          <Text style={styles.header}>Audio</Text>
          <Text style={styles.subheader}>It's modular and designed to last</Text>
        </View>
         

        <View style={styles.input_group}>
          <View style={styles.input}>
            <Image source={require("./images/mail.png")} style={styles.image}></Image>
            <TextInput placeholder='Email' style={styles.input_text} onChangeText={(text)=>setUsername(text)}></TextInput>
          </View>

          <View style={styles.input}>
            <Image source={require("./images/lock.png")} style={styles.image}></Image>
            <TextInput placeholder='Password' style={styles.input_text} onChangeText={(text)=>setPassword(text)}></TextInput>
          </View>

          {error!= null  && <Text style={{color:"red"}}>{error}</Text>}

          <Text style={{color:"white"}}>Forget Password?</Text>
          <TouchableOpacity style={styles.button} onPress={()=>handleSignUp()}>
            <Text style={styles}>Sign Up</Text>
          </TouchableOpacity>
          
          <View style={styles.register}>
            <Text style={styles.question}>
              Didn’t have any account? 
            </Text>
            <Text style={styles.create_account}>
              Sign Up here
            </Text>
            
            
          </View>
        </View>

        
      </ImageBackground>

    </View>
  )
}



export default Login
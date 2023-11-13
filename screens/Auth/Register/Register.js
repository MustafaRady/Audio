import { View, Text } from 'react-native'
import { ImageBackground,TouchableOpacity,Image,TextInput } from 'react-native'
import React from 'react'
import { styles } from './RegisterStyleSheet'

const Register = () => {
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
            <TextInput placeholder='Email' style={styles.input_text}></TextInput>
          </View>

          <View style={styles.input}>
            <Image source={require("./images/lock.png")} style={styles.image}></Image>
            <TextInput placeholder='Password' style={styles.input_text}></TextInput>
          </View>

          <Text style={{color:"white"}}>Forget Password</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.socialMediaGroup}>
            <View style={styles.socialMediaItem}>
                <Image source={require("./images/facebook.png")} ></Image>
            </View>
            <View style={styles.socialMediaItem}>
                <Image source={require("./images/apple-seeklogo.com.png")} ></Image>
            </View>
            <View style={styles.socialMediaItem}>
                <Image source={require("./images/facebook.png")} ></Image>
            </View>
          </View>
          
          <View style={styles.login}>
            <Text style={styles.question}>
            If you have an account?
            </Text>
            <Text style={styles.create_account}>
            Sign In here
            </Text>
          </View>
        </View>

        
      </ImageBackground>

    </View>
  )
}

export default Register
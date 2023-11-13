/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { View, Text ,Image, ScrollView , TouchableOpacity} from 'react-native'
import React from 'react'
import { styles } from './HomeStyleSheet'
import PhonesToRender from '../PhonesToRender/PhonesToRender'
import { useState } from 'react'
import { useSelector } from 'react-redux'



const Home = ({navigation}) => {
  
    const {userDetails } = useSelector((store)=>store.userAuthentication)
    
    const [isSearchButtonTouched,setIsSearchButtonTouched] = useState(false);

    const handleOnPressIn = ()=>{
        
        navigation.navigate("Search")
    }

    const handleOnPressProfile =()=>{
      navigation.navigate("Profile")
    }


    

  return (
    
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.navbar_group}>
            <Image source={require("./images/menu-variant.jpg")}></Image>
            
            <View style={styles.logo_group}>
              <Image source={require("./images/Logo.png")} style={styles.logo}>
              </Image>
                
                <Text style={{fontSize:19.048}}>Audio</Text>
            </View>
            
            <TouchableOpacity onPress={()=>handleOnPressProfile()} style={styles.image_container}>
              <Image style={styles.image} source={{uri:userDetails.image}} ></Image>
            </TouchableOpacity>
      </View>

      <View style={styles.header_group}>
        <Text style={styles.header}>Hi, {userDetails.firstName}</Text>
        <Text style={styles.subHeader}>What are you looking for today?</Text>
      </View>
      
    <TouchableOpacity  onPressIn={()=>{
            handleOnPressIn()
        }}
        onBlur={()=>setIsSearchButtonTouched(false)}
        style={styles.search_box}>
            <Image source={require('./images/search.png')} />
            <Text style={{color:"#BABABA"}}>Search Smartphones</Text>    
    </TouchableOpacity>
      {!isSearchButtonTouched &&<PhonesToRender navigation={navigation}/>}
    </View>
    </ScrollView>
    
  )
}

export default Home
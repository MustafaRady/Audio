import { View, Text ,Image, TextInput, ScrollView} from 'react-native'
import React from 'react'
import { styles } from './HomeStyleSheet'
import Phones from '../phones/Phones'
import { useState } from 'react'

const Testing = ({setCurrentPage}) => {
    const [isSearchButtonTouched,setIsSearchButtonTouched] = useState(false);

    const handleOnPressIn = ()=>{
        setIsSearchButtonTouched(true )
        if(typeof setCurrentPage === "function"){
            console.log("Changed ")
            setCurrentPage("SEARCH")
        }
    }

  return (
    
    <>
    <ScrollView style={styles.container}>
      <View style={styles.navbar_group}>
            <Image source={require("./images/Vector.png")} ></Image>
            
            <View style={styles.logo_group}>
                <Image source={require("./images/Logo.png")} style={styles.logo}>
                </Image>
                <Text style={{fontSize:22}}>Audio</Text>
            </View>
            <Image source={require("./images/profile.png")}></Image>
      </View>

      <View style={styles.header_group}>
        <Text style={styles.header}>Hi, Andrea</Text>
        <Text style={styles.subHeader}>What are you looking for today?</Text>
      </View>
      

      <View style={styles.search_box}>
        <Image source={require('./images/search.png')} />
        <TextInput placeholder='Search phone' onPressIn={()=>{
            handleOnPressIn()
        }}
        onBlur={()=>setIsSearchButtonTouched(false)}></TextInput>
      </View>

      {!isSearchButtonTouched &&<Phones/>}
    </ScrollView>
    
    
    </>
    
  )
}

export default Testing
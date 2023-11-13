import { View, Text, Image } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {styles} from './XaiomiStyleSheet';
import { ScrollView } from 'react-native';

const Xaiomi = () => {
    const [setOfXaiomis,setSetOfXaiomis]=useState([]);

    const getAllXaiomis = async()=>{
        try{

            const response = await axios.get("https://dummyjson.com/products");
            
            var count = 0 ; 
            var arrayOfXaiomis = [];
            for(let i = 0 ; i<response.data.products.length;i++){
                if(response.data.products[i].brand=="Xaiomi"){
                    arrayOfXaiomis.push(response.data.products[i]);
                }
            }

            setSetOfXaiomis(arrayOfXaiomis)
            
            
            

        }catch(q){
            console.log(q);
        }
    }

    useEffect(()=>{
        getAllXaiomis();
    },[])

  return (
    <View style={styles.iphones_group}>
      <View >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {setOfXaiomis.map((item,index)=>{
                    return <View key={index} style={styles.phoneCard_Top}>
                        <View style={styles.main}>
                            <Text>{item.title}</Text>
                            <Image source={{uri:""+item.images[0]}} style={{width:100,height:100}}></Image>
                        </View>
                        <View style={styles.shopNow_group}>
                            <Text style={styles.shopNow_Text}>Shop Now</Text>
                            <Image source={require("../images/arrow-right.jpg")}></Image>
                        </View>
                        
                    </View>
                })}
            </ScrollView>
      </View>

      <View style={styles.header_group}>
        <Text style={styles.featured}>Featured</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      <View  >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {setOfXaiomis.length ==0 && <Text style={{textAlign:"center" , width:"100%", fontSize:20}}>No products Found </Text>}
                {setOfXaiomis.map((item,index)=>{
                    return <TouchableOpacity key={index} style={styles.phoneCard} onPress={()=>navigation.navigate("ItemOverview",{item:item})}>
                    <Image source={{uri:""+item.images[0]}} style={{width:100,height:100}}></Image>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                </TouchableOpacity>
                })}
            </ScrollView>
      </View>
    </View>
  )
}

export default Xaiomi
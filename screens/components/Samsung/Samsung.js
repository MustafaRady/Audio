import { View, Text, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {styles} from './SamsungStyleSheet';
import { ScrollView } from 'react-native';

const Samsung = ({navigation}) => {
    const [setOfSamsungs,setSetOfSamsungs]=useState([]);

    const getAllSamsungs = async()=>{
        try{

            const response = await axios.get("https://dummyjson.com/products");
            var arrayOfSamsungs = [];
            for(let i = 0 ; i<response.data.products.length;i++){
                if(response.data.products[i].brand=="Samsung"){
                    arrayOfSamsungs.push(response.data.products[i]);
                }
            }
            setSetOfSamsungs(arrayOfSamsungs)

        }catch(q){
            console.log(q);
        }
    }

    useEffect(()=>{
        getAllSamsungs();
    },[])

  return (
    <View style={styles.iphones_group}>
      <View >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {setOfSamsungs.map((item,index)=>{
                    return <View key={index} style={styles.phoneCard_Top}>
                        <View style={styles.main}>
                            <View style={styles.text_container}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                            <Image source={{uri:""+item.images[0]}} style={{width:100,height:100,}}></Image>
                        </View>
                        <View style={styles.shopNow_group}>
                            <TouchableOpacity onPress={()=>navigation.navigate("ItemOverview",{item:item})}>
                                <Text style={styles.shopNow_Text}>Shop Now</Text>
                            </TouchableOpacity>
                            
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

      <View >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {setOfSamsungs.map((item,index)=>{
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

export default Samsung
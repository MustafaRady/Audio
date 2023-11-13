import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {styles} from './IphoneStyleSheet';
import { ScrollView } from 'react-native';

const Iphone = ({navigation}) => {
    const [setOfPhones,setSetOfPhones]=useState([]);

    const getAllPhones = async()=>{
        try{

            const response = await axios.get("https://dummyjson.com/products");
             
            var arrayOfPhones = [];
            for(let i = 0 ; i<response.data.products.length;i++){
                if(response.data.products[i].brand=="Apple"){
                    arrayOfPhones.push(response.data.products[i]);
                }
            }

            setSetOfPhones(arrayOfPhones)
            
            
            

        }catch(q){
            console.log(q);
        }
    }

    useEffect(()=>{
        getAllPhones();
    },[])

  return (
    <View style={styles.iphones_group}>
      

      <View >
            <FlatList 
            horizontal={true} showsHorizontalScrollIndicator={false}
            data={setOfPhones}
            renderItem={({item})=>(
                <View style={styles.phoneCard_Top} >
                        <View style={styles.main}>
                            <Text>{item.title}</Text>
                            <Image source={{uri:""+item.images[0]}} style={{width:100,height:100}}></Image>
                        </View>
                        <View style={styles.shopNow_group}>
                            <TouchableOpacity onPress={()=>navigation.navigate("ItemOverview",{item:item})}>
                                <Text style={styles.shopNow_Text}>Shop Now</Text>
                            </TouchableOpacity>
                            
                            <Image source={require("../images/arrow-right.jpg")}></Image>
                        </View>
                        
                </View>
            )}

            >
                
            </FlatList>
      </View>

      <View style={styles.header_group}>
        <Text style={styles.featured}>Featured</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      <View >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {setOfPhones.map((item,index)=>{
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

export default Iphone
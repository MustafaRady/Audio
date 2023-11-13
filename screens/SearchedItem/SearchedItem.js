import { View, Text, ScrollView, FlatList,Image, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import React from 'react'
import { showResultStyles, styles } from './SearchedItemStyleSheet'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPhones, getPhoneByCategory } from '../../Redux/SearchedItem/SearchedItemActions';

function SearchedItem ({route}) {
  
  const {title,brand}=route.params.item;
  const _optionsToChoose=[
    'Filter',
    'Popularity',
    'Newest',
    'Discount',
    'Price: Low to High',
  ]

  const dispatch= useDispatch();

  const {searchedItems} = useSelector((state)=>state.searchedItems)
 
  useEffect(()=>{
    dispatch(getPhoneByCategory(brand));
  },[])



  const ShowResult = ()=>{

    const PairOfItems = [];
    for (let i = 0 ; i < searchedItems.length ; i+=2 ){
      if(searchedItems[i+1])
        PairOfItems.push([searchedItems[i],searchedItems[i+1]]);
      else
        PairOfItems.push([searchedItems[i]]);
    }
    return(
      <View style={showResultStyles.container}>
        {PairOfItems.map(([item1,item2],index)=>{
          return <View key={index} style={[showResultStyles.group]}>
            <TouchableOpacity style={[showResultStyles.card]} onPress={()=>route.params.navigation.navigate("ItemOverview",{item:item1})}>
              <Image source={{uri:item1.images[0]}} height={150} width={150}></Image>
              <Text>
                {item1.title}
              </Text><Text>
                USD {item1.price}
              </Text> 
              
              <View style={showResultStyles.ratingAndReviewGroup}>
                <View style={showResultStyles.ratingGroup}>
                  <Image source={require("../Search/image/star-filled.png")}></Image>
                  <Text>
                    {item1.rating}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {item2 && <TouchableOpacity style={[showResultStyles.card]} onPress={()=>route.params.navigation.navigate("ItemOverview",{item:item2})}>
              <Image source={{uri:item2.images[0]}} height={150} width={150}></Image>
              <Text>
                {item2.title}
              </Text>
              <Text>
                USD {item2.price}
              </Text>
              <View style={showResultStyles.ratingAndReviewGroup}>
                <View style={showResultStyles.ratingGroup}>
                  <Image source={require("../Search/image/star-filled.png")}></Image>
                  <Text>
                    {item2.rating}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            }
            
          </View>
        })}
      </View>
    )
  }
  

  
  return (
    <View style={styles.container}>
      <Text>Smartphones</Text>
      <Text style={styles.ItemTitle}>{title}</Text>

      <FlatList 
      style={{ marginTop: 20 }}
      data={_optionsToChoose}
      horizontal={true}
      renderItem={({item})=>{
        return (
          <Text
            style={{
              marginLeft: 10,
              borderRadius: 10,
              height: 50,
              borderWidth: 1,
              padding: 11,
            }}
          >
            {item}
          </Text>
        )}}
      >
      </FlatList>
      <ShowResult ></ShowResult>

     

    </View>
  )
}

export default SearchedItem
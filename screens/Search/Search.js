import { View, Text,Image, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import {styles} from './SearchStyleSheet'
import ListOfSuggestedValues from './ListOfSuggestedPhones';


 

function Search({navigation}){

    const [latestSearch,setLatestSearch] = useState("");
    const [suggestedPhones, setSuggestedPhones] = useState([
        "iPhone 9",
        "iPhone X",
        "Samsung Universe 9",
        "OPPOF19",
        "Huawei P30",
        "MacBook Pro",
        "Samsung Galaxy Book",
        "Microsoft Surface Laptop 4",
        "Infinix INBOOK",
        "HP Pavilion 15-DK1056WM",
    ]);
    const [popularProducts,setPopularProducts] = useState([]);
    async function getPopularProducts(){
        try{
            const response = await axios.get("https://dummyjson.com/products");
            let arrayOfPopularProducts = [];
            for(var i = 0 ; i < response.data.products.length; i++){

                if(response.data.products[i].rating > 4.5 &&
                     response.data.products[i].category =="smartphones" ||
                     response.data.products[i].category =="laptops"){
                    arrayOfPopularProducts.push(response.data.products[i]);
                }
            }

            setPopularProducts(arrayOfPopularProducts);

        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getPopularProducts();
    },[suggestedPhones])

    const filteredSuggestions = popularProducts.filter((item) =>
    item.title.toLowerCase().startsWith(latestSearch?.toLowerCase())
    );

    const Item = ({item}) => (
        <TouchableOpacity onPress={()=>console.log(navigation.navigate('ItemOverview',{item:item , navigation:navigation}))}>
            <View style={styles.popularProductCard} >
        <Image style={styles.popularProductImage} source={{uri:""+item.images[0]}}>

        </Image>
        <View style={styles.popularProductGroup_3}>
            <Text style={styles.popularProductTitle}>
                {item.title} 
            </Text>
            <Text style={styles.popularProductPrice}>
                USD {item.price}
            </Text>
            <View style={styles.popularProductGroup_4}>
                <View style={styles.popularProductRatingGroup}>
                    <Image style={styles.popularProductRatingImage} source={require('./image/star-filled.png')}>

                    </Image>
                    <Text style={styles.popularProductRating}>
                        {item.rating}
                    </Text>

                    <View>
                        <Text style={styles.popularProductReview}> {item.discountPercentage}% OFF</Text>
                    </View>
                </View>
                <Image source={require('./image/more-vertical.png')} style={styles.popularProductSetting}>

                </Image>
                
            </View>
        </View>
        
        </View>
        </TouchableOpacity>
        
      );
return (
    <>
        <View style={styles.container}>
            <View style={styles.searchGroup}>
                <View id='searchInput' style={styles.textInput} >
                    <Image source={require('./image/search.png')}></Image>
                    <TextInput 
                            style={styles.textInput_1} 
                            placeholder='Search Phone'
                            onChangeText={(text)=>setLatestSearch(text)}
                            ></TextInput>
                
                </View>

                {latestSearch.length > 0 && <View id='latestSearch' style={styles.latestSearchContainer}>
                    {filteredSuggestions.length != 0  && <ListOfSuggestedValues filteredSuggestions={filteredSuggestions} navigation={navigation}/>}
                </View>}
            </View>
            

            <View id='popularProducts' style={styles.popularProductGroup}>
                <Text style={styles.popularProductTitle}>Popular products</Text>
                
            </View>
        </View>
        <View style={{flex:1}}>
            <FlatList
                    data={popularProducts}
                    renderItem={({item}) =>
                   {
                    let _item = item ; 
                    return <Item item={_item}/>
                   }
                }
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                />
        </View>
        
    </>
  )
}

export default Search
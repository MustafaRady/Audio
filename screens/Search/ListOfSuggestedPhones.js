import { View, Text, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './SearchStyleSheet'

const Item = ({item,navigation})=>{
    return <TouchableOpacity style={styles.listOfSuggestedItems}  onPress={()=>console.log(navigation.navigate('SearchedItem',{item:item , navigation:navigation}))} >
    <Text >{item.title}</Text>
    </TouchableOpacity>
}


function ListOfSuggestedValues({filteredSuggestions, navigation }){
    return ( 
        <>
        <FlatList
        data={filteredSuggestions}
        renderItem={({item})=>{ return <Item item={item} navigation={navigation}></Item>
        }}
        >

        </FlatList>
        </>
    )
}

export default ListOfSuggestedValues
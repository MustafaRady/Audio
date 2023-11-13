import { View, Text, StyleSheet , Image ,TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../Redux/ShoppingCart/ShoppingCartActions';

const Featured = ({item}) => {
    
    const title = item.title;
    const detail = item.description;
    const dispatch=useDispatch();
    const {cart} = useSelector((state)=>state.shoppingCart);


    const handleAddToCart=()=>{
        dispatch(addToCart(cart,item))
    }


  return (
    <View style={styles.container}>
      <Text style={styles.title} >{title}</Text>
      <Text style={styles.details}>{detail}</Text>
      <View style = {styles.group}>
        <Image source = {{uri:item.images[0]}} style={styles.image}></Image>
        <Text style={styles.detail}>{detail}</Text>
      </View>
      <View style = {styles.group}>
        <Image source = {{uri:item.images[0]}} style={styles.image}></Image>
        <Text style={styles.detail}>{detail}</Text>
      </View>
      <TouchableOpacity  style={styles.addToCartButton} onPress={()=>handleAddToCart()}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{

        marginTop:30,
        flex:1,
        backgroundColor:"white",
    },
    title:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
        fontSize:20,
    },
    details:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
    },
    detail:{
        padding: 20,
        flex: 1,
    },
    group:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
    },
    image:{
        width: 100, // Set the width to your desired value
        height: 100, // Set the height to your desired value
        marginRight: 10, // Add some margin for spacing
    }
    ,addToCartButton: {
        backgroundColor: "#0ACF83",
        padding: 10,
        borderRadius: 5,
        margin: 20,
        alignItems: "center",
    },
    addToCartButtonText: {
        color: "white",
        fontSize: 18,
    },
    
})

export default Featured
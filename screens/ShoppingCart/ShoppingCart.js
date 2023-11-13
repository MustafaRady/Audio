import { View, Text,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { StyleSheet } from 'react-native'
import { removeFromCart,incrementItemInCart, decrementItemInCart } from '../../Redux/ShoppingCart/ShoppingCartActions'

const ShoppingCart = () => {

    const dispatch =useDispatch();
    const {cart,totalPrice,totalQuantity} = useSelector((state)=>state.shoppingCart);
    
   

    
    const handleOnAdd = (id) => {
        dispatch(incrementItemInCart(cart,id))
      };
      const handleOnSub = (id) => {
        dispatch(decrementItemInCart(cart,id))
      };
      const handleOnDelete = (id) => {
        dispatch(removeFromCart(cart,id))
    };
    
  return (
    <>
        <ScrollView style={styles.container}>
            {cart.length==0 && <Text 
                                style={
                                    {
                                        flex:1,
                                        alignItems:"center",
                                        justifyContent:"center",
                                        textAlign:"center",
                                        fontSize:20,
                                    }
                                }
                                >No Items found </Text>}
            {cart.map((item)=>{
                return <>
                <View style={styles.itemGroup}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: item.item.images[0],
                            }}
                            >
                        </Image>
                        <View style={styles.textGroup}>
                            <Text>
                                {item.item.title}
                            </Text>
                            <Text>
                                USD {item.item.price}
                            </Text>

                            <View style={styles.buttonsGroup}>
                            <TouchableOpacity onPress={()=>handleOnSub(item.item.id)}>
                                <View style={styles.buttonContainer}>
                                    <Image
                                        style={styles.icon}
                                        source={require("./images/minus.png")}
                                    ></Image>
                                </View>
                                
                            </TouchableOpacity>
                            <Text>
                                {item.quantity}
                            </Text>
                            <TouchableOpacity onPress={()=>handleOnAdd(item.item.id)}>
                                <View style={styles.buttonContainer}>
                                    <Image
                                        style={styles.icon}
                                        source={require("./images/plus.jpg")}
                                    ></Image>
                                </View>
                                
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={()=>handleOnDelete(item.item.id)}>
                                <View style={styles.deleteContainer}>
                                    <Image
                                        style={styles.icon_2}
                                        source={require("./images/trash-2.jpg")}
                                    ></Image>
                                </View>
                                
                            </TouchableOpacity>
                        </View>
                        </View>
                        
                </View>
                </>
            })}
            
        </ScrollView>

        <View style={styles.footer}>
                <View style={styles.totalPriceAndQuantity}>
                    <View style={styles.totalInfo}>
                        <Text>Total of {totalQuantity} items</Text>
                        <Text>USD {totalPrice}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.checkoutButton}
                    onPress={() => {
                    // Handle checkout button press
                    }}
                >
                    <View style={styles.buttonGroup}>
                        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
                        
                        <Image source={require("./images/chevron-right.png")}></Image>
                        
                    </View>
                </TouchableOpacity>
        </View>
    </>
    
  )
}

const styles=StyleSheet.create({
    container:{
        flex:2,
        flexDirection:"column",
        padding:10,
        backgroundColor:"white",
    },
    itemGroup:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20,
        gap:20
    },
    buttonGroup:{
        padding:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    }
    ,
    itemText:{
        fontSize:18,
        fontWeight:"bold",
    },
    image:{
        width:100,
        height:100,
        borderRadius:10,
    },
    textGroup:{
        gap:10,
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"space-between",
    },
    buttonsGroup:{
        flexDirection:"row",
        alignItems:"center",
        gap:20,
        justifyContent:"space-between",
    },
    buttonContainer:{
        padding:4,
        borderWidth:2,
        borderRadius: 10,
    }
    ,
    deleteContainer:{
        padding:4,
        paddingLeft:30,
    },
    icon_2:{
        width:30,
        height:30,
    },
    totalPriceAndQuantity: {
      },
    
      totalInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    
      checkoutButton: {
        backgroundColor: "#0ACF83",
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 10, // Adjust the margin based on your design
      },
    
      checkoutButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      footer:{
        backgroundColor:"white",
        padding:10,
        flex:0.5,
        justifyContent:"flex-end",
      }
})

export default ShoppingCart
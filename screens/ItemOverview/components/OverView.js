/* eslint-disable react/jsx-key */
import { View, Text,Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnotherProducts } from '../../../Redux/AnotherProduct/AnotherProductActions'
import Spinner from 'react-native-loading-spinner-overlay'
import { StyleSheet } from "react-native";
import { getComments } from '../../../Redux/Comments/CommentsActions'
import { addToCart } from '../../../Redux/ShoppingCart/ShoppingCartActions'

const OverView =({item , navigation})=>{
    const dispatch = useDispatch();
    const {anotherProducts,loading} = useSelector((store)=>store.anotherProducts)
    const {comments} = useSelector((store)=>store.comments)
    const [_comments,setComments]=useState([])
    const {cart} = useSelector((store)=>store.shoppingCart)


    const handleAddToCart=()=>{
      dispatch(addToCart(cart,item))
  }

    useEffect(()=>{
        dispatch(getAnotherProducts(item.brand));
        dispatch(getComments())
    },[dispatch,loading])

    useEffect(()=>{
      setComments(comments)
    },[comments])

    return(
      <>
        <View style={
            styles.card_group
        }>
            <View style={styles.card}>
                <Image source={{uri:item.images[0]}} width={200} height={200}></Image> 
            </View>
        </View>

      <View style={styles.commentsContainer}>
        <Text>Review ({comments.length})</Text>
      {_comments.length>0 ? (
        <ScrollView>
          {_comments.map((comment, index) => (
            <View style={styles.reviewGroup} key={index}>
              {/* Left side with the user image */}
              <View style={styles.imageContainer}>
                <Image source={{ uri: comment.image }} style={styles.userImage} />
              </View>

              {/* Right side with user details */}
              <View style={styles.detailsContainer}>
                <View>
                  <View style={styles.nameAndMonth}>
                    <Text style={styles.userName}>{comment.user}</Text>
                    {comment.Month === 1 && <Text style={styles.Month}>{comment.Month} Month ago</Text>}
                    {comment.Month > 1 && <Text style={styles.Month}>{comment.Month} Months ago </Text>}
                  </View>
                  <View style={styles.starsContainer}>
                    {Array.from({ length: comment.rate }).map((_, starIndex) => (
                      <Image
                        key={starIndex}
                        source={require('./images/star-filled.png')} // Replace with the path to your star icon
                        style={styles.starIcon}
                      />
                    ))}
                  </View>
                </View>
                <Text style={styles.commentText}>{comment.comment}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Spinner
            color='white'
            size={50}
            visible={true}
            textContent={'Loading...'}
        />
      )}
      <Text style={styles.SeeAllReviews}>See All Reviews </Text>
    </View>


        <View style={styles.anotherProductHeaderContainer}>
            <View  style={styles.anotherProductHeader}>
                <Text>
                    Another Products 
                </Text>
                <Text style={
                    {
                        color:"#7F7F7F"
                    }
                }>
                    See All
                </Text>
            </View>
            
            <View style={styles.AP_cardGroup}>
                <ScrollView horizontal={true}>
                    {anotherProducts.map((item,index)=>{
                        return (
                            <TouchableOpacity key={index} style={styles.AP_card} onPress={()=>navigation.navigate("ItemOverview",{item:item})}>
                                <Image source={{uri: item.images[0]}} width={100} height={100}></Image>
                                <Text>{item.title}</Text>
                                <Text>USD {item.price}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
                
             </View>
        </View>
        
        <TouchableOpacity  style={styles.addToCartButton} onPress={()=>handleAddToCart()}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </>
    );
  }


  const styles = StyleSheet.create({
    card_group:{
        marginTop:30,
        padding:20,
    },
    card:{
        backgroundColor:"#F6F6F6",
        alignItems:"center",
        borderRadius:10,
        padding:20,
    },
    anotherProductHeader:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    anotherProductHeaderContainer:{
        backgroundColor:"#F6F6F6",
        padding:20,
    },
    AP_cardGroup:{
        flexDirection:"column",
        gap:2,
    },
    AP_card:{
        flexDirection:"column",
        backgroundColor:"white",
        alignItems:"center",
        borderRadius:10,
        gap:20,
        padding:20,
        margin:10,
    },

    commentsContainer: {
        padding: 10,
      },
      reviewGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        borderRadius: 8,
      },
      imageContainer: {
        marginRight: 10,
        borderRadius: 35, // Half of the image width/height for a circular shape
        overflow: 'hidden', // Ensure the image stays within the rounded border
      },
      userImage: {
        width: 70,
        height: 70,
      },
      detailsContainer: {
        flex: 1,
        gap:10
      },
      nameAndRateGroup:{
        flexDirection:"column"
      },
      nameAndMonth:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
      },

      userName: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      ratingText: {
        fontSize: 14,
        marginBottom: 5,
      },
      commentText: {
        fontSize: 14,
      },
      starsContainer:{
        flexDirection:"row",
      },
      Month:{
        fontSize: 10,
      }
    ,
    SeeAllReviews:{
      textAlign:"center" ,
      color:"#7F7F7F",
      paddingTop:20,
      fontSize:14,
      fontFamily:"DM Sans",
    },addToCartButton: {
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

export default OverView
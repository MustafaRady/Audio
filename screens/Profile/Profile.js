import { View, Text ,StyleSheet, ScrollView, Image, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../Redux/UserAuthentication/UserAuthenticationActions'

const Profile = ({navigation}) => {
    const dispatch= useDispatch();
    const {userDetails,loading,error} = useSelector((store)=>store.userAuthentication)
    
    const handleOnPress = (item)=>{
        switch(item){
            case "Logout":
                dispatch(logout())
                navigation.navigate("Login")
                break
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.PicAndName}>
                    <View style={styles.image_container}>
                        <Image style={styles.image} source={{uri:userDetails.image}}></Image>
                    </View>
                    <View style={styles.Name_Email_Group}>
                        <Text style={{fontSize:16}}>{userDetails.firstName}</Text>
                        <Text style={{fontSize:16}}>{userDetails.email}</Text>
                    </View>
                </View>
            </View>
            <View style={{
                    height:3,
                    backgroundColor:"#E5E5E5",
                }}>

            </View>
            <View style={styles.container_2}>
                <Text style={styles.header}>General</Text>
                <FlatList
                
                    data={['Edit Profile ','Notifications' , 'WishList']}
                    renderItem={({item})=>{
                       return  <Text style={
                        {
                            fontSize:16,
                            padding:10,
                            borderBottomWidth:1,
                            borderBottomColor:"#E5E5E5",
                            color:"#4F4F4F",
                        }
                       }>{item}</Text>
                    }}
                >

                </FlatList>
            </View>

            <View style={styles.container_2}>
                <Text style={styles.header}>Legal </Text>
                <FlatList
                
                    data={['Terms of Use ','Notifications' , 'Privacy Policy']}
                    renderItem={({item})=>{
                       return <TouchableOpacity onPress={()=>handleOnPress(item)}>
                        <Text style={
                            {
                                fontSize:16,
                                padding:10,
                                borderBottomWidth:1,
                                borderBottomColor:"#E5E5E5",
                                color:"#4F4F4F",
                            }
                            }>{item}</Text>
                       </TouchableOpacity>
                       
                       
                    }}
                >

                </FlatList>
            </View>

            <View style={styles.container_2}>
                <Text style={styles.header}>Personal </Text>
                <FlatList
                
                    data={['Report a Bug ','Logout' ]}
                    renderItem={({item})=>{
                       return <TouchableOpacity onPress={()=>handleOnPress(item)}>
                        <Text style={
                            {
                                fontSize:16,
                                padding:10,
                                borderBottomWidth:1,
                                borderBottomColor:"#E5E5E5",
                                color:"#4F4F4F",
                            }
                            }>{item}</Text>
                       </TouchableOpacity>
                    }}
                >

                </FlatList>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        paddingTop:90,
        backgroundColor:"white",
    },
    header:{
        fontSize:20,
        color:"#7F7F7F",
    }
    ,
    container_2:{
        flex:1,
        padding:20,
        gap:20,
        backgroundColor:"white",
    },
    PicAndName: {
        flexDirection:"row",
        justifyContent:"flex-start",
        padding:20,
        fontSize:20,
        gap:20,
    },
    image:{
        width:"100%",
        height:"100%",
       
    },
    Name_Email_Group:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"flex-start",
        gap:10,
    }
    ,
    image_container:{
        width:100,
        height:100,
        borderRadius:100,
        padding:16,
        backgroundColor:"#E5E5E5",
    }
})

export default Profile
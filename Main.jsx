import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home/Home';
import Search from './screens/Search/Search';
import { TouchableOpacity,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import SearchedItem from './screens/SearchedItem/SearchedItem';
import ItemOverview from './screens/ItemOverview/ItemOverview';
import Profile from './screens/Profile/Profile';
import Login from './screens/Auth/Login/Login';
import ShoppingCart from './screens/ShoppingCart/ShoppingCart';

const Main = () => {


  
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} options={{headerShown : false}} />
            <Stack.Screen 
            name="Search" 
            component={Search} 
            options={({navigation})=>({
               title:" Search ", 
                headerTitleStyle:{
                    paddingLeft:100,
                    fontSize:20,
                    color:'black'
                },
                headerRight: () => (
                    <TouchableOpacity style={{paddingRight:20}} onPress={()=>navigation.navigate("ShoppingCart")}>
                        <Image source={require("./icons/shopping-cart.jpg")} width={10} height={30}  />
                        
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <TouchableOpacity style={{paddingLeft:20}} onPress={()=>{
                        navigation.navigate('Home')
                    }}>
                        <Image source={require("./icons/chevron-left.jpg")} width={10} height={30}/>
                    </TouchableOpacity>
                ),
                
                
                    })}
                 />
            <Stack.Screen 
            name="SearchedItem" 
            component={SearchedItem} 
            initialParams={{item:null}}
            options={({navigation})=>({
               title:"  ", 
                headerTitleStyle:{
                    fontWeight:'bold',
                    paddingLeft:80,
                    fontSize:20,
                    color:'black'
                },
                headerRight: () => (
                    <TouchableOpacity style={{paddingRight:20}}>
                        <AntDesign name="shoppingcart" size={24} color="black" onPress={()=>navigation.navigate("ShoppingCart")} />
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <TouchableOpacity style={{paddingLeft:20}} onPress={()=>{
                        navigation.goBack()
                    }}>
                        <AntDesign name="back" size={24} color="black" />
                    </TouchableOpacity>
                ),
                
                
                    })}
                 />
            <Stack.Screen 
            name="ItemOverview" 
            component={ItemOverview} 
            initialParams={{item:null}}
            options={({navigation})=>({
               title:"  ", 
                headerTitleStyle:{
                    fontWeight:'bold',
                    paddingLeft:80,
                    fontSize:20,
                    color:'black'
                },
                headerRight: () => (
                    <TouchableOpacity style={{paddingRight:20}} onPress={()=>navigation.navigate("ShoppingCart")}>
                        <Image source={require("./icons/shopping-cart.jpg")} width={10} height={30}/>
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <TouchableOpacity style={{paddingLeft:20}} onPress={()=>{
                        navigation.goBack()
                    }}>
                       <Image source={require("./icons/chevron-left.jpg")} width={10} height={30}/>
                    </TouchableOpacity>
                ),
                
                
                    })}
                 />

            <Stack.Screen 
            name="Profile" 
            component={Profile} 
            initialParams={{item:null}}
            options={({navigation})=>({
               title:"  ", 
                headerTitleStyle:{
                    fontWeight:'bold',
                    paddingLeft:80,
                    fontSize:20,
                    color:'black'
                },
                headerRight: () => (
                    <TouchableOpacity style={{paddingRight:20}} onPress={()=>navigation.navigate("ShoppingCart")}>
                        <Image source={require("./icons/shopping-cart.jpg")} width={10} height={30}/>
                        
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <TouchableOpacity style={{paddingLeft:20}} onPress={()=>{
                        navigation.goBack()
                    }}>
                        <Image source={require("./icons/chevron-left.jpg")} width={10} height={30}/>
                    </TouchableOpacity>
                ),
                
                
                    })}
                 />
            <Stack.Screen 
            name="Home" 
                    component={Home} 
            options={{headerShown : false}}
                 />

            <Stack.Screen 
            name="ShoppingCart" 
            component={ShoppingCart} 
            initialParams={{item:null}}
            options={({navigation})=>({
               title:" ShoppingCart ", 
                headerTitleStyle:{
                    fontWeight:'bold',
                    paddingLeft:80,
                    fontSize:20,
                    color:'black'
                },
                headerLeft: () => (
                    <TouchableOpacity style={{paddingLeft:20}} onPress={()=>{
                        navigation.goBack()
                    }}>
                        <Image source={require("./icons/chevron-left.jpg")} width={120} height={130}/>
                    </TouchableOpacity>
                ),
                
                
                    })}
                 />
        </Stack.Navigator>
        
    </NavigationContainer>

  )
}

export default Main
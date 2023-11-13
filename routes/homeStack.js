import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home/Home";
import Search from "../screens/Search/Search";

const screens={
    Home:{
        screen:Home
    },
    Search:{
        screen:Search
    }
}

const HomeStack =createStackNavigator(screens);

export const Navigator =  createAppContainer(HomeStack);
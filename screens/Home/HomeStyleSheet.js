import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        backgroundColor:"white",
        alignItems:"center",
        gap:50,
        marginTop:30,
    },
    navbar_group:{
        width:"90%",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
    }
    ,
    nav_item:{
        width:"40%",
        height:"40%",
    }
    ,
    logo_group:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:10,
        height:"100%",
    }
    ,
    image:{
        width:"100%",
        height:"100%",
       
    },
    image_container:{
        width:45,
        height:45,
        borderRadius:50,
        padding:10,
    }
    ,
    logo:{
        width:20.238,
        height: 20.238,
    }
    ,
    header_group:{
        width:"94%",
    },
    header:{
        fontSize: 15,
        color:"black",
        textAlign:"left",
        fontFamily:"sans-serif-condensed",
    },
    subHeader:{
        color:"#000000",
        textAlign:"left",
        fontSize:27,
        fontStyle:"normal",
        fontWeight:"700",
        letterSpacing:0.2

    },

    search_box:{
        width:"90%",
        flexDirection:"row",
        borderWidth:2,
        borderRadius:10,
        alignContent:"center",
        alignItems:"center",
        borderColor:"#BABABA",
        gap:20,
        padding:10,
    }
});
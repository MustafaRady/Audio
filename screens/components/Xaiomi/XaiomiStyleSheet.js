import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    iphones_group:{
        minHeight:400,
        marginTop:20,
        flexDirection:"column",
        gap:20,
    }
    ,header_group:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
    ,featured:{
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 20, /* 125% */
        letterSpacing: 0.2,
    },
    seeAll:{
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 20, /* 125% */
        letterSpacing: 0.2,
        color:"#7F7F7F"
    },
    phoneCard:{
        flexDirection:"column",
        alignItems:"center",
        gap:40,
        backgroundColor:"white",
        marginRight:20,
        width:200,
        padding:10,
        paddingTop:20,
        borderRadius:20,
    },
    phoneCard_Top:{
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"white",
        marginRight:20,
        padding:30,
        gap:10,
        borderRadius:20,
    }
    ,main:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"white",
        marginRight:20,
        gap:40,
        borderRadius:20,
    },
    shopNow_group:{
        width:"100%",
        color:"#0ACF83",
        flexDirection:"row",
        alignItems:"center",
        gap:10,
    },
    shopNow_Text:{
        color:"#0ACF83",
        fontSize:14
    }
})


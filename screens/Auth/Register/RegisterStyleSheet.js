import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",
        gap:100,
    }
    ,
    background_image:{
        width:"100%",
        height:"100%",
    }
    ,
    header_group:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20,
    }
    ,
    header:{
        fontSize: 50,
        color:"white",
        textAlign:"center",
        fontFamily:"sans-serif-condensed",
    },
    subheader:{
        color:"#FFFFFF",
        textAlign:"center",
        fontFamily:"DM Sans",
        fontSize:14,
        fontStyle:"normal",
        fontWeight:"700",
        letterSpacing:0.2
    },
    input:{
        alignItems:"center",
        padding:8,
        gap:10,
        flexDirection:"row",
        width:"100%",
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        fontSize:14
    },
    input_text:{
        width:"90%",
        fontSize:14
    },

    image:{
        width:"8%",
        height:"100%",
    },
    input_group:{
        width:"85%",
        gap:20,
        alignItems:"center",
        flexDirection:"column",
    },
    button:{
        width:"100%",
        backgroundColor:"#0ACF83",
        borderRadius:10,
        alignItems:"center",
        fontSize:14,
        color:"black",
        padding:10,
    }
    ,
    button_text:{
        fontFamily: "DM Sans",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "900",
        letterSpacing: 0.2,
    },
    question:{
        color:"white",
        fontSize:14,
        fontFamily:"DM Sans",
        fontStyle:"normal",
        fontWeight:"normal",
        letterSpacing:0.2
    },
    create_account:{
        color:"#0ACF83",
        fontSize:14,
        fontFamily:"DM Sans",
        fontStyle:"normal",
        fontWeight:"normal",
        letterSpacing:0.2,
        textDecorationLine:"underline"
    },
    login:{
        flexDirection:"row",
        gap:5,
        alignItems:"center",
        justifyContent:"center",
        width:"100%"
    },
    register:{
            flexDirection:"row",
            gap:5,
            alignItems:"center",
            justifyContent:"center",
            width:"100%"
    },
    socialMediaGroup:{
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        justifyContent:"center",
        width:"100%"
    },
    socialMediaItem:{
        width:60,
        height:60,
        backgroundColor:"#FFFFFF",
        alignItems:"center",
        justifyContent:"center",
    },
    

})
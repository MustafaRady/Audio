import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        
        flexDirection:"column",
        justifyContent:"flex-start",
        backgroundColor:"white",
        gap:10,
        padding:20,
    },
    ItemTitle:{
        fontSize: 20,
        fontStyle:"normal",
        fontWeight: "900",
        lineHeight: 20, /* 125% */
        letterSpacing: 0.2,
        
    },
    
})


export const showResultStyles= StyleSheet.create({
    container:{
        marginTop:20,
        gap:20,
    },
    group:{
        flexDirection:"row",
        gap:20,
    }
    ,
    card:{
        backgroundColor:"white",
        padding:10,
        minHeight:250,
        borderRadius:20,
        flexDirection:"column",
        gap:10
    },
    ratingAndReviewGroup:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    ratingGroup:{
        flexDirection:"row",
        alignItems:"center",
        gap:5,
    },
    reviewGroup:{
        flexDirection:"row",
        alignItems:"center",
        gap:5,
    },
    
})
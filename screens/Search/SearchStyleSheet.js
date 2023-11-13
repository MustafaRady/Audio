import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        
        flex:0.5, // Take the entire available space
        alignItems: "center", // Center horizontally
        flexDirection: "column", // Arrange children vertically
        gap: 10, // Add a gap between children
        paddingTop:20,
        width:"100%",
    },
    navBar: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    navBarText:{
        textAlign:"center",
        fontSize:16,
        fontWeight:"700",
        lineHeight:20,
        letterSpacing:0.2,
    },
    textInput:{
        padding:10,
        gap:10,
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor:"#BABABA",
        borderWidth:3,
        borderRadius:10,
        
    },
    textInput_1:{
        width:"100%",
    },
    latestSearchContainer:{
        height:100,
        width:"90%",
        justifyContent:"center",
        gap:20,
    },
    latestSearchText:{
    },
    latestSearchResult:{
        marginLeft:'10%',
        width:"80%",
    },
    popularProductTitle:{

        width:"100%",
        fontSize:16,
        fontWeight:"700",
        letterSpacing:0.2,
        alignItems:"center",
        
    }
    ,
    popularProductGroup:{
        width:"94%",
        alignItems:"center",
        gap:10,
        
    },
    popularProductGroup_2:{
        width:"100%",
        alignItems:"center",
        gap:10,
        padding:10,
        
    }
    ,popularProductCard:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:20,
        gap:20,
        padding:10,
    },
    popularProductImage:{
        width:"30%",
        height:"100%",
    },
    popularProductGroup_3:{
        flexDirection:"column",
        gap:5,
        width:"65%",
    },

    popularProductPrice:{
        fontSize:14,
        fontWeight:"700",
        lineHeight:20,
        letterSpacing:0.2,
    },
    popularProductGroup_4:{
        flexDirection:"row",
        gap:10,
        justifyContent:"space-between",
    }
    ,
    popularProductRatingGroup:{
        flexDirection:"row",
        alignItems:"center",
        gap:5,
    },
    popularProductRating:{
        fontSize:14,
        fontWeight:"700",
        lineHeight:20,
        letterSpacing:0.2,
    },
    popularProductRatingImage:{
        width:20,
        height:20,
    },
    popularProductSetting:{
        width:30,
        height:30,
    },
    popularProductReview:{
        fontSize:14,
        fontWeight:"700",
        lineHeight:20,
        letterSpacing:0.2,
    },
    listOfSuggestedItems:{
        flexDirection:"column",
        gap:20,
        padding:10,
        backgroundColor:"white",
    }
    ,searchGroup:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        width:"90%",
        
    }
});

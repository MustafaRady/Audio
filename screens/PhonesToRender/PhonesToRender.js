import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import React from 'react'
import { styles } from './PhonesStyleSheet'
import Samsung  from '../components/Samsung/Samsung'
import Iphone  from '../components/Iphone/Iphone'
import Xiaomi  from "../components/Xaiomi/Xaiomi"




const PhonesToRender = ({navigation}) => {
    const [currentSetPhones, setCurrentSetPhones] = useState("Iphone");
    const PHONES={
        Samsung:<Samsung navigation={navigation}/>,
        Iphone:<Iphone navigation={navigation}/>,
        Xaiomi:<Xiaomi navigation={navigation}/>
    }

    

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
            {currentSetPhones==="Samsung" && <TouchableOpacity style={[styles.scrollView_item,styles.active]} onPress={()=>setCurrentSetPhones("Samsung")}>
                   <Text style={[styles.scrollView_itemText , styles.white]} >Samsung</Text>
                    
                </TouchableOpacity>
            }
            {currentSetPhones!=="Samsung" && <TouchableOpacity style={[styles.scrollView_item]} onPress={()=>setCurrentSetPhones("Samsung")}>
                   <Text style={[styles.scrollView_itemText]} >Samsung</Text>
                    
                </TouchableOpacity>
            }

            {currentSetPhones==="Iphone" && <TouchableOpacity style={[styles.scrollView_item,styles.active]} onPress={()=>setCurrentSetPhones("Iphone")}>
                   <Text style={[styles.scrollView_itemText ,styles.white]} >Iphone</Text>
                    
                </TouchableOpacity>
            }
            {currentSetPhones!=="Iphone" && <TouchableOpacity style={[styles.scrollView_item]} onPress={()=>setCurrentSetPhones("Iphone")}>
                   <Text style={[styles.scrollView_itemText ]} >Iphone</Text>
                    
                </TouchableOpacity>
            }

            {currentSetPhones==="Xaiomi" && <TouchableOpacity style={[styles.scrollView_item,styles.active]} onPress={()=>setCurrentSetPhones("Xaiomi")}>
                   <Text style={[styles.scrollView_itemText ,styles.white]} >Xaiomi</Text>
                    
                </TouchableOpacity>
            }
            {currentSetPhones!=="Xaiomi" && <TouchableOpacity style={[styles.scrollView_item]} onPress={()=>setCurrentSetPhones("Xaiomi")}>
                   <Text style={[styles.scrollView_itemText]} >Xaiomi</Text>
                    
                </TouchableOpacity>
            }
                
            </ScrollView>

            {PHONES[currentSetPhones]}
        </View>
  )
}

export default PhonesToRender
import React from "react"
import {View,Text,Dimensions} from "react-native"
const CommonGenericCard = ({data}) =>
(
    <View style={{paddingTop:"5%",height:100 ,}}>
          <View style={{width:"90%",borderRadius:5,height:"100%",backgroundColor:"orange",alignSelf:"center"}}>
              <Text style={{fontSize:22,color:"white"}}>{data.name}</Text>
          </View>
    </View>
)
export default CommonGenericCard  

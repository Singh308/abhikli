// import React from "react";
// import{View,TextInput,Text} from "react-native" 
// import Styles from "./CustomTextInputStyle"; 
//  const CustomTextInput =({placeholder="", onChange =()=>{},value ="",Style={},label="",editable=true, ShowInputText=true})=>(
//     <>
//     {
//     label
//     ?
//     <View style={Styles.labelView}><Text style={Styles.lableStyle}>{label}</Text></View>
//     :
//     []
//     }
//       <TextInput
//       onChangeText={event=>onChange(event)}
//       value={String(value||'')}
//       editable={editable}
//       placeholder={placeholder}
//       style={Styles.inputContainer}
//      />    

//  </>
//  )
//  export default CustomTextInput
import React from 'react'
import { View,TextInput,Text } from "react-native";
import Styles from './CustomTextInputStyle'
const CustomTextInput =({placeholder="",onChange=()=>{},value ="",Style={},label="",editable=true,ShowInputText=true,keyboardType='numeric'})=>(
  <>
  {
    label
    ?
    <View style={Styles.labelView}><Text style={Styles.lableStyle}>{label}</Text></View>
    :
    []
       
  
  }
     <TextInput
     onChangeText={event =>onChange(event)}
     value={String(value||'')}
     editable={editable}
     placeholder={placeholder}
     style={Styles.inputContainer}
     keyboardType={keyboardType}
     />
  
  </>
)
export default CustomTextInput







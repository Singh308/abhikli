

import React,{useState} from 'react';
import {View,Text,StatusBar,ScrollView,Image,TouchableOpacity} from 'react-native'
import Style from "./HomeStyle";
import CustomTextInput from "../../Component/CustomTextInput/CustomTextInput";
import  LinearGradient from "react-native-linear-gradient";
 
 

const Home = ({navigation}) => {
   
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  console.log(username)
  console.log(password)
  const onSubmit = () =>{
    if(username=='') alert('Enter username')
    else if(password=='') alert('Enter password')
    else {
      var user={
           nameName:username,
           password:password
      }
     navigation.navigate('Dasboard')

      console.log(user)

    }
    }
  
  
    return(
         <LinearGradient colors={["#666699", "#ff99cc",]} style={Style.Contailer}>
              <StatusBar translucent = {true} backgroundColor="transparent"/>
                 <View style={{alignItems:"center",paddingTop:"55%",}}>
                   <CustomTextInput label={'Username'}  onChange={(value)=>setUsername(value)} value={username} placeholder={'Enter username'}/>  
                 </View>
                <View style={{alignItems:"center",paddingTop:"5%",}}>
                   <CustomTextInput label={'Password'} onChange={(value)=>setPassword(value)} value={password}  placeholder={'Enter password'} />  
                </View>
                <View style={{alignItems:"center",paddingTop:"10%",elevation:2}}>
                   <LinearGradient colors={["#ff99cc","#666699"]}  style={{width:"90%",height:35,backgroundColor:"white",borderRadius:40,alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity onPress={()=>onSubmit()} style  ={{width:"90%",height:35,borderRadius:40,alignItems:"center",justifyContent:"center"}}>
                     <Text>{'SAVE'}</Text>
                    </TouchableOpacity>
                   </LinearGradient>  
                </View>
                

        </LinearGradient>
    )
}
export default Home
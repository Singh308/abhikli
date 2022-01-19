import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect,useState } from 'react'
import { View,Image, StatusBar } from 'react-native'
 

 
const Splash = ({navigation}) =>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Home')
        },1000)
    })
  return(
    <View style={{flex:1}}>
  <StatusBar translucent = {true} backgroundColor={'transparent'}/> 
   {/* <Image style={{width:'100%',height:'100%'}}source={{uri:"https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}}/>  
    */}
<Image style={{width:'100%',height:'100%'}}source={require('../../Assets/Images/abhi.jpg')}/>  
   

    </View>
 

  )
}
export default Splash
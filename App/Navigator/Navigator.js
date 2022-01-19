import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import Splash from '../Containers/Splash/Splash'
import Home  from '../Containers/Home/Home';
import Dasboard from '../Containers/Dasboard/Dasboard';
import ShowCardInformation from '../Containers/ShowCardInformation/ShowCardInformation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default Navigator = () =>{
    const Stack = createNativeStackNavigator()
    return(
         < NavigationContainer>
       <Stack.Navigator initialRouteName='Splash'screenOptions={{headerShown:false}}>
           <Stack.Screen name="Splash" component = {Splash }/>
           <Stack.Screen name="Home" component = {Home }/>
           <Stack.Screen name="Dasboard" component={Dasboard}/>
           <Stack.Screen name="ShowCardInformation" component={ShowCardInformation}/>
         
       </Stack.Navigator>
       </NavigationContainer> 
    )
}
 
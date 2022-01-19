/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 
 import {SafeAreaView,ScrollView, StatusBar,StyleSheet,Text,View,}
  from 'react-native';
  import Navigator from './App/Navigator/Navigator';
 
 const App = () => {
    return (
        <View  style={{flex:1, }}>
            
     <Navigator/>
       
 
 
         
        </View>
   );
 };
 
export default App
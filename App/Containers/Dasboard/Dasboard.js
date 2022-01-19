import React, { useState } from 'react';
import {View,Text,StatusBar,ScrollView,Image,TouchableOpacity, FlatList}from 'react-native'
// import Icons from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/AntDesign'
const Dasboard=({navigation})=>{
   const[isAll,isSetAll]=useState('')
   const[isFacebook,isSetFacebook]=useState('')
   const[isInstagram,isSetInstagram]=useState('')
   const[dataSource,SetDataSource]=useState(
     [
       {id:0,name:'kaliabhi',url:require("../../Assets/Images/kali.jpg")},
       {id:1,name:'sapnaamit',url:require("../../Assets/Images/sagar.png")},
       {id:2,name:'diwatillu',url:require("../../Assets/Images/sapna.jpg")}
      ]
     )
    let visibleNode = []

    let  onSelectShowCard = (props) =>{
       console.log("props---->",props)
       console.log("Image---Props---->",props.url)

       navigation.navigate('ShowCardInformation',{data:props})
    }
    
  let showCard = (params) => 
   (
     <TouchableOpacity style={{flexDirection:'row',justifyContent:"center",width:'90%',backgroundColor:'#F7C6EB',elevation:1,alignSelf:'center',borderRadius:10,borderWidth:1,borderColor:'#F7C6EB',}}onPress={()=>onSelectShowCard(params)}>
        <Image style={{width:'30%',height:'80%',marginLeft:10,borderRadius:10,marginTop:8}} source={params.url}/>
        <View style={{width:'60%',height:'20%',marginLeft:15,marginTop:15}}>
            <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>{'Acapella FextiVista-Speaking with night pulse'}</Text>
            <Text style={{fontSize:15,fontWeight:'bold',}}>{'jan 1,2021'}</Text>
         <View style={{flexDirection:'row',marginTop:20}}>
           <View>
             <Text>{'33,454'}</Text>
           </View>
           <View> 
             <Text>{'4000'}</Text>
           </View>
           <View>
             <Text>{params.id}</Text>
           </View>
         </View>
        </View>
     </TouchableOpacity>
       )


     visibleNode = (
       <FlatList 
       data={dataSource}
       renderItem={({item})=>showCard(item)}  
  
       />
     )
       const [tabA,setTabA]=useState('All')
       const[tabB,setTabB]=useState('')
       const[tabC,setTabC]=useState('')
     const onChangeTab=(props)=>{
       console.log('props---------------->',props)
       
        if(props=='All'){
          setTabA(props)
          setTabB('')
          setTabC('')
        }
        else if(props=='Facebook'){
           setTabB(props)
           setTabA('')
           setTabC('')
        }
      else if(props=='Instagram'){
        setTabC(props)
        setTabA('')
        setTabB('')
      }
 
}
   let tabBCard = (
     <View style={{width:'90%',height:'60%',backgroundColor:'white',borderRadius:10,elevation:1,alignSelf:'center'}}>
       <Image style={{width:'100%',height:'70%',marginTop:0,marginLeft:0,borderRadius:15 }} source={require('../../Assets/Images/tiger.jpg')}/>
     </View>
   )
   let tabCcard = (
     <View style={{width:'90%',height:'60%',backgroundColor:'green',borderRadius:10,elevation:1,alignSelf:'center'}}></View>
   )
   
      return(
        <View style={{flex:1,backgroundColor:'white',}}>
            
         <View style={{alignItems:'center',paddingTop:'25%',paddingRight:'25%'}}>
             <Text style={{fontWeight:'bold',fontSize:20,}}>{''}</Text>
               </View>
                 <View style={{paddingLeft:'10%',paddingTop:'10%'}}>
                   <Text style={{fontWeight:'bold',fontSize:30,color:'black',}}>Most Recent Post</Text>
                    <Text style={{color:'#9B9A9A'}}>{'Check the update from the platforms'}</Text>
                     </View>
                     <View style={{flexDirection:'row',}}>
                      <TouchableOpacity onPress={()=>onChangeTab('All')} style={{marginLeft:'5%',marginTop:'5%',alignItems:'center',width:'15%',height:'30%',backgroundColor:tabA=='All'?'#FA1212':"#F0E3E3",borderRadius:7,justifyContent:'center',elevation:2}}>
                        <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>{'All'}</Text>
                         </TouchableOpacity>
                          <TouchableOpacity onPress={()=>onChangeTab('Facebook')} style={{justifyContent:'center',alignItems:'center',marginLeft:'5%',marginTop:'5%',width:'30%',height:'30%',backgroundColor:tabB=='Facebook'?"#FA1212": '#F0E3E3',borderRadius:7,borderWidth:1,borderColor:'#F0E3E3',elevation:.5}}>
                            <Text style={{fontWeight:'bold',fontSize:18,color:'#C2BEBE'}}>{'Facebook'}</Text>
                             </TouchableOpacity>
                              <TouchableOpacity onPress={()=>onChangeTab('Instagram')} style={{justifyContent:'center',alignItems:'center',width:'30%',height:'30%',backgroundColor:tabC=='Instagram'?"#FA1212":'#F0E3E3',borderRadius:7,marginTop:'5%',marginLeft:'5%',borderWidth:1,borderColor:'#F0E3E3',elevation:.5,}}>
                                  <Text style={{fontWeight:'bold',fontSize:18,color:'#C2BEBE'}}>{'Instagram'}</Text>
                                 </TouchableOpacity>
                                  </View>
                                <View style={{flex:1,marginTop:"-13%"}}>

                                {tabA=='All'? visibleNode:[]}
                                {tabB=='Facebook'? tabBCard:[]}
                                {tabC=='Instagram'? tabCcard:[]}
                                </View>
                                 
                      
                                  
                                   
        {/* <View style={{flexDirection:'row',marginTop:12,justifyContent:'center',width:'90%',height:'25%',backgroundColor:'#F7C6EB',elevation:1,alignSelf:'center',borderRadius:10,borderWidth:1,borderColor:'#F7C6EB'}}>
          <Image style={{width:'30%',height:'80%',marginLeft:10,borderRadius:10,marginLeft:10,marginTop:8}} source={require('../../Assets/Images/sapna.jpg')}/>
           <View style={{width:'60%',height:'20%',marginTop:15,marginLeft:15}}>
             <Text style={{fontWeight:'bold',fontSize:15,color:'black',}}>{'Beerlan Night Pulse-Event team planet'}</Text>
              <Text style={{}}>{'jan 26,2021'}</Text>
           </View>
          
          
          </View>                                          
                                       
                                     */}
                                   


       {/* <Icon  name='home' style={{fontSize:40}} color='black'  /> */}    
          {/* <Image style={{width:'30%',height:'30%',}={require('../.}source./Assets/Images/kali.jpg')}/> */}
          
 
        </View>
    )





}
export default Dasboard;
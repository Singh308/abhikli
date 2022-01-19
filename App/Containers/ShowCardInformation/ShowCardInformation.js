// import React from 'react';
// import {View,Text}from 'react-native'
// import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

// const ShowCardInformation = ({route}) =>{

//    let {data} = route.params
//    console.log('data--------route>',data)

//    return(
//    <View>
//       <Text>hjkkkkkhgbbnhhhh</Text>
//    </View>
// );
//    }

//    export default ShowCardInformation





//    import React from 'react';
// import {View,Text,Image,TouchableOpacity}from 'react-native'
// import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
// class ShowCardInformation extends React.Component{
//      constructor(){
//         super()
//      }
//      state = {

//      }
   
//    render(){
//       const {route, navigation } = this.props;
          
//       let {data} = route.params
// return(
//    <View>
//         <TouchableOpacity style={{flexDirection:'row',justifyContent:"center",width:'90%',backgroundColor:'#F7C6EB',elevation:1,alignSelf:'center',borderRadius:10,borderWidth:1,borderColor:'#F7C6EB',}}>
//         <Image style={{width:'30%',height:'80%',marginLeft:10,borderRadius:10,marginTop:8}} source={data.url}/>
//         <View style={{width:'60%',height:'20%',marginLeft:15,marginTop:15}}>
//             <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>{'Acapella FextiVista-Speaking with night pulse'}</Text>
//             <Text style={{fontSize:15,fontWeight:'bold',}}>{'jan 1,2021'}</Text>
//          <View style={{flexDirection:'row',marginTop:20}}>
//            <View>
//              <Text>{'33,454'}</Text>
//            </View>
//            <View> 
//              <Text>{'4000'}</Text>
//            </View>
//            <View>
//              <Text>{data.id}</Text>
//            </View>
//          </View>
//         </View>
//      </TouchableOpacity>
//    </View>

// );
//    }
//  };
//    export default ShowCardInformation




//  import React, { useState } from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList ,ScrollView} from "react-native";
// const Linear = ({navigation}) => {
//   const [isAll, isSetAll] = useState('')
//   const [isFacebook, isSetFacebook] = useState('')
//   const [isInstagram, isSetInstagram] = useState('')
//   const [dataSource, SetDataSource] = useState(
//     [
//       { id: 1, name: 'Acapella FestiVista -Speaking With night pulse', image: require('../assets/images/music.jpeg'), Date: 'Jan 1, 2021' ,url:require('../assets/images/view.png')},
//       { id: 2, name: 'Acapella FestiVista -Speaking With night pulse', image: require('../assets/images/music.jpeg'), Date: 'Jan 1, 2021' ,url:require('../assets/images/view.png')},
//       { id: 3, name: 'Acapella FestiVista -Speaking With night pulse', image: require('../assets/images/music.jpeg'), Date: 'Jan 1, 2021',url:require('../assets/images/view.png') },
//       { id: 4, name: 'Acapella FestiVista -Speaking With night pulse', image: require('../assets/images/music.jpeg'), Date: 'Jan 1, 2021',url:require('../assets/images/view.png' )},

//     ]
//   )
//   let onSelectShowCard =(props)=>{


//     navigation.navigate('ShowCardInformation',{data:props})
//   }
// const ItemView = ({item}) => 
//     (
//       <View>
//       <TouchableOpacity style={{
//         backgroundColor: 'white',
//         shadowColor: '#171717',
//         shadowOffset: { width: 2, height: 4 },
//         shadowOpacity: 0.2,
//         shadowRadius: 3, elevation: 5, borderRadius: 20, marginLeft: '5%',flexDirection:'row',
//         width:'90%',height:150,marginBottom:30,
//      }}onPress ={()=>navigation.navigate('ShowCardInformation')}>
//         <Image source={item.image} style={{ width: '30%', height: '80%', borderRadius: 10, marginLeft: 10, marginTop: 10, }} />
  
//         <View style={{ marginLeft: '3%' }}>
//           <View style={{ width: '82%', marginTop: 13 }}>
//             <Text style={{ fontSize: 14, fontWeight: '600', color: 'black' }}>{item.name}</Text>
//           </View>
//           <View style={{marginTop:10,opacity:0.4}}>
//              <Text>{item.Date}</Text>
//           </View>
          
//           <View style={{flexDirection:'row',}}>
//             <View style={{width:'35%',height:'3%',}}>
//                 <Image source={item.url}  style={{width:'100%',height:'100%',}}/>
//            </View>
//            <View style={{}}>
//               <Text style={{}}>{'33,454'}</Text>
//             </View>
//           </View>
//             <View style={{flexDirection:'row', }}>
//             <View style={{width:'25%',height:'30%',}}>
//              <Image source={item.url}  style={{width:'100%',height:'100%',}}/>
//             </View>
//             <View style={{}}>
//               <Text style={{}}>{'33,454'}</Text>
//             </View>
//           </View>
          
           
           
           
          
        
        
//         </View>
        
       
//       </TouchableOpacity>
//       </View>
      
//     );
//   };
//   const[tabA,setTabA]=useState('All')   //Hooks using for facebook tab
//   const[tabB,setTabB]=useState(' ')
//   const[tabC,setTabC]=useState(' ')
// const onChangetab=(props)=>{
// console.log('props----->',props)
// if(props=='All'){
//   setTabA(props)
//   setTabB('')
//   setTabC(' ')
// }
// else if(props=='Facebook'){
//   setTabB(props)
//   setTabA(' ')
//   setTabC(' ')
// }
// else if(props=='Instagram'){
//   setTabC(props)
//   setTabB(' ')
//   setTabA(' ')
// }


// let selectCard = (params) =>(
//  <TouchableOpacity style={{width:"90%",height:"20%",borderRadius:10,backgroundColor:"gray"}}>

//  </TouchableOpacity>
// )

// let visibleNode = []
// visibleNode = (
//   <FlatList
//   data = {dataSource}
//   renderItem={({item})=>selectCard(item)}
//   />
// )

//   return (
//     <View style={{ flex: 1, }}>
//       <View style={{ width: '90%', flexDirection: 'row', marginTop: '16%', marginLeft: '5%', }}>
//         <TouchableOpacity style={{ borderRadius: 50, width: '10%', height: '20%', backgroundColor: '#e5e4e2', borderWidth: 1, borderColor: '#dcdcdc', justifyContent: 'center', alignItems: 'center', }}
//           onPress={() => navigation.goBack()}>
//           <Image source={require('../assets/images/arrow.png')} style={{ height: '100%', width: '100%', }} />
//         </TouchableOpacity>
//         <Text style={{ marginTop: 5, marginLeft: 10, color: '#000C66', fontWeight: 'bold', fontSize: 16, }}>{'Back'}</Text>
//       </View>
//       <View style={{ marginTop: '-27%', marginLeft: '5%', }}>
//         <View>
//           <Text style={{ fontWeight: '600', color: '#003366', fontSize: 25, }}>Most Recent Post</Text>
//         </View>
//         <View style={{ marginTop: 5, opacity: 0.3 }}>
//           <Text style={{ fontWeight: '600', }}>Check the update from the platfroms</Text>
//         </View>
//       </View>

//       <TouchableOpacity style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '5%', marginTop: 20, }}onPress={()=>onChangetab('All')}>
//         <TouchableOpacity style={{ width: '20%', height: '35%', backgroundColor:tabA=='All'?'red':'white', alignItems: 'center', justifyContent: 'center', borderRadius: 10, }}>
//           <Text style={{}}>{'All'}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={{ width: '30%', height: '35%', backgroundColor:tabB=='Facebook'?'red':'white', alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderRadius: 10, borderWidth: 2, borderColor: 'grey' }}onPress={()=>onChangetab('Facebook')}>
//           <Text>{'Facebook'}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={{ width: '30%', height: '35%', backgroundColor:tabC=='Instagram'?'red':'white', alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderWidth: 2, borderColor: 'grey' }}onPress={()=>onChangetab('Instagram')}>
//           <Text>{'Instagram'}</Text>
//         </TouchableOpacity>

//       </TouchableOpacity>
    
    
      
//       </View>

    

//   );

// };

// }

// export default Linear









import React ,{useState} from 'react';
import {Text,View,FlatList,TouchableOpacity} from 'react-native';
import CommonGenericCard from '../../Component/CommonGenericCard/CommonGenericCard';

const ShowCardInformation =({navigation})=>{

    const [isAll, isSetAll] = useState('')
  const [isFacebook, isSetFacebook] = useState('')
  const [isInstagram, isSetInstagram] = useState('')
 
  
const[tabA,setTabA]=useState('All')   //Hooks using for facebook tab
const[tabB,setTabB]=useState('')
const[tabC,setTabC]=useState('') 
const onChangetab=(props)=>{
console.log('props----->',props)
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
  setTabB('')
  setTabA('')
}

}

 
const [dataSource, SetDataSource] = useState(
  [
    {id:1,name:"Abhishek"},
    {id:2,name:"Amit"},
    {id:3,name:"Sapna"},
    {id:4,name:"kli"},

  ]
)
 
 let visibleNode = []
visibleNode = (
  <FlatList
  data={dataSource}
  renderItem={({item})=><CommonGenericCard data={item}/>}
  />   
)
   return(
     <View style={{flex:1,width:"100%",height:"100%"}}>
       {visibleNode}
   
    </View>
 
     
   
     )}
export default ShowCardInformation;
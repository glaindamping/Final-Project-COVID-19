import React, { Component } from 'react';
import {Text,View,Image} from 'react-native';

class Header2 extends Component {
  render() {
     return(
      <View style={{paddingVertical: 1, alignItems:"center"}}>
         <View style={{ paddingVertical: 5}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize:18, color: '#fff' }}>Data</Text> 
        </View>
         <Image
          source={{uri: 'https://i.ibb.co/B6bD5j6/covid19.png'}}
          style={{width:250, height:50,}}/> 
          <Text style ={{fontWeight: 'bold', color: '#fff'}}>_____________</Text>       
    </View>
    )
  }
};

export default Header2;

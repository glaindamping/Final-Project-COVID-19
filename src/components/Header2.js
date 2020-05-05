import React, { Component } from 'react';
import {Text,View,Image} from 'react-native';

class Header2 extends Component {
  render() {
     return(
      <View style={{paddingVertical: 1, alignItems:"center"}}>
         <View style={{ paddingVertical: 5}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize:18, color: '#fff' }}>Indonesia</Text> 
    </View>
    </View>
    )
  }
};

export default Header2;

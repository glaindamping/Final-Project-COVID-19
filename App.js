import React, { Component } from 'react';
import {View} from 'react-native';
import Header1 from "./src/components/Header1";
import Card from './src/components/Card';
import Layout2 from './src/components/Layout2';
import Header2 from "./src/components/Header2";



class App extends Component {

  render() {
     return(
      <View style={{backgroundColor: "#071e3d"}}>
        <Header1/>
        <Layout2/>
        <Header2/>
        <Card/>
      </View>
     
    )
  }
};

export default App;

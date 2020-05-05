import React, {Component} from 'react';
import {  View, Text, StyleSheet, FlatList } from 'react-native';

class Layout2 extends Component {
    constructor(){
      super();
      this.state = {
        positif: [],
        sembuh: [],
        meninggal: [],
        refreshing: false
      }
    }

    render() {
        return(
         <View>
            
           <FlatList
               data={[this.state.positif], [this.state.sembuh], [this.state.meninggal]}
               keyExtractor={item => item.toString()}
               renderItem={this.renderItem}
               refreshing={this.state.refreshing}
               onRefresh={this.onRefresh}/>

            <Text style={{fontWeight:"bold", fontSize: 18, textAlign:"center", padding:9, color: '#fff'}}>Global</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{
            height: 70,
            padding:10,
            width: '25%',
            shadowColor: '#000',
            shadowOpacity:0.2,
            shadowRadius:1,
            backgroundColor:'#1f4287',
            borderRadius:10,
            justifyContent: "center"
            }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff'}}>Positif</Text>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff'}}>{this.state.positif}</Text>
            
            </View>


            <View style={{
            height: 70,
            padding:10,
            marginLeft: '5%',
            width: '25%',
            shadowColor: '#000',
            shadowOpacity:0.2,
            shadowRadius:1,
            backgroundColor:'#278ea5',
            borderRadius:10,
            justifyContent: "center"
            }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff'}}>Sembuh</Text>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff'}}>{this.state.sembuh}</Text>
            </View>

            <View style={{ 
            height: 70,
            padding:10,
            marginBottom:0,
            marginLeft: '5%',
            width: '25%',
            shadowColor: '#000',
            shadowOpacity:0.2,
            shadowRadius:1,
            backgroundColor:'#e14594',
            borderRadius:10,
            justifyContent: "center"
            }}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff'}}>Meninggal</Text>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff'}}>{this.state.meninggal}</Text></View>
           </View>
         </View> 
       )
       
     }
    
     renderItem = ({ item }) => (
            <View>
              <Text>{item.positif}</Text>
            </View>
        )
    

    onRefresh = () => {
        this.getDataApi
      }
    
      componentDidMount = () => {
        this.getDataApi();
      }
      
      getDataApi = async () => {
        this.setState({ refreshing: true })
        const response1 = await fetch ('https://covid19.mathdro.id/api')
        const json = await response1.json()
        this.setState({ 
          positif: json.confirmed.value ,
          sembuh: json.recovered.value ,
          meninggal: json.deaths.value , refreshing: false})
      } 

};

export default Layout2;
import React, { Component } from 'react';
import {
  FlatList,
  Text,
  StatusBar,
  View,
  ScrollView,
  StyleSheet,
  ListView,

} from 'react-native';

class Card extends Component {
  constructor(){
    super();
    this.state = {
      provinsi: [],
      refreshing: false
    }
  }

  render() {
    return(
    
       <View style={{paddingBottom: 550}}>
       <FlatList
           data={this.state.provinsi}
           renderItem={this.renderItem}
           keyExtractor={item => item.fid.toString()}
           refreshing={this.state.refreshing}
           onRefresh={this.onRefresh}/>
        </View>
   )

 }
  renderItem = ({ item }) => (
    <View style={{marginbBotton: 20,padding: 10, borderColor: "#000",borderWidth: 1, backgroundColor: '#BCCDDF', borderRadius:13, flexDirection: "row", justifyContent: "space-between"}}>
      <Text style={{fontWeight: 'bold'}}>{item.provinsi}</Text>    
      <View style={{flexDirection:"row"}}>
      <View style={{ 
        fontWeight: 'bold',
        padding:1,
        height:25,
        width:50,
        backgroundColor:'#1f4287',
        borderRadius:10,
        flexDirection: 'row',
        justifyContent: "center",
        }}>
        
      <Text style ={{color: '#EEEAE9'}}>{item.kasusPosi}</Text>
      </View>

      <View style={{ 
        fontWeight: 'bold',
        padding:1,
        height:25,
        width:50,
        backgroundColor:'#278ea5',
        borderRadius:10,
        flexDirection: 'row',
        justifyContent: 'center',
        }}>
      <Text style ={{color: '#EEEAE9'}}>{item.kasusSemb}</Text>
      </View>

      <View style={{ 
        fontWeight: 'bold',
        padding:1,
        height:25,
        width:50,
        backgroundColor:'#e14594',
        borderRadius:10,
        flexDirection: 'row',
        justifyContent: 'center',
        }}>
      <Text style ={{color: '#EEEAE9'}}>{item.kasusMeni}</Text>
      </View>
    </View>
    </View>
  )
 
  onRefresh = () => {
    this.getDataApi
  }

  componentDidMount = () => {
    this.getDataApi();
    StatusBar.setHidden(true);
  }
  
  getDataApi = async () => {
    this.setState({ refreshing: true })
    const response = await fetch ( 'https://indonesia-covid-19.mathdro.id/api/provinsi');
    const json = await response.json();
    this.setState({ provinsi: json.data,refreshing: false})

  } 

  
};

export default Card;





import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { Header,Image } from 'react-native-elements';

//import LinearGradient from 'react-native-linear-gradient';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Aryan Agarwal',
      place: 'INDIA/UP/MATHURA',
      noOfSoftToies: 50
     };
  }
   render(){
    return (
     <View>
      <Header containerStyle={{backgroundColor: 'black', height: 70,}}
      centerComponent={{ text: 'CUSTO', style: { color: '#fff', fontSize: 30, fontWeight: 'bold' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
     
    />
    <View style={styles.container}>
    
    </View>
    <ScrollView>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttontext}>
        MAKE TRANSACTION
      </Text>
    </TouchableOpacity>
    

  
    <Image source={require('../assets/6.jpeg')}
  style={styles.Image} 
  
/>
<Text style={{marginLeft: '12%'}} >profile pic</Text>
<View style={styles.textContainer}>
<Text style={styles.text} >{'NAME = ' + this.state.name}</Text>
<Text style={styles.text} >{'PLACE = ' + this.state.place}</Text>
<Text style={styles.text} >{'NO. OF STORIES = ' + this.state.noOfSoftToies}</Text>
</View>



</ScrollView>
    </View> 
  );
}}
//tab for posts and publishes
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignCItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItem: 'center',
    width: 150,
    height: 50,
    padding: 10,
    marginTop: 50,
    marginLeft: '80%',
  borderRadius: 40 ,

  },
  buttontext: {
    justifyContent: 'center',
    alignItem: 'center',
    textAlign: 'center'
  },
  Image:{
    justifyContent: 'center',
    alignItem: 'center',
    width: 200,
    height: 200,
    marginTop: 30,
    marginLeft: 100,
    borderRadius: 150 ,
  },
  text:{
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  },
  textContainer: {
     marginLeft: '30%',
     marginTop: '-10%',
  },
});
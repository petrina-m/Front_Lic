import React , {useState} from 'react';
import {Text, View,TextInput, Button,StyleSheet} from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

function Home(props){
    const [ name,setName]=useState('')
    return(
    <View style={styles.general}>
      <Text style={{fontSize:25}}>Where do you want to travel? Let us plan your holiday!</Text>
      <TextInput  style={{backgroundColor:'beige',margin:9}}
        placeholder="Where do you want to go?"   
      />
      <Button style={{backgroundColor:'#67ba1e'}} title="Let's plan the holiday" onPress={()=>props.navigation.navigate('PlannedTrip')}/>
    </View>
    )
}
const styles = StyleSheet.create({
    general: {
      padding:15,
      margin:15,
    },
  })
export default Home
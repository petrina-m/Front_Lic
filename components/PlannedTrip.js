import React , {useState} from 'react';
import {Text, View,TextInput, Button,StyleSheet} from 'react-native';

function PlannedTrip(){
    const [ name,setName]=useState('')
    return(
    <View style={styles.general}>
      <Text>sth</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    general: {
      padding:15,
      margin:15,
    },
  })
export default PlannedTrip
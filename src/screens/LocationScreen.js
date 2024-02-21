import { View, Text, Pressable } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
const LocationScreen = () => {
 const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft:()=><Pressable style={{flexDirection:"row",alignItems:'center',gap:4}}>
                <Ionicons name="arrow-back" size={24} color="black" onPress={()=>navigation.goBack()} />
                <Text style={{fontSize:16,letterSpacing:1}}>CHANGE LOCATION</Text>
            </Pressable>
        })
    })
  return (
    <View>
      <Text>LocationScreen</Text>
    </View>
  )
}

export default LocationScreen
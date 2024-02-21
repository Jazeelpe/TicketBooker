import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Text style={{ fontSize: 13, fontWeight: "500" }}>
          Hello Jazeel Ahamed
        </Text>
      ),
      headerStyle: {
        backgroundColor: "#F5F5F5",
        shadowColor: "transparent",
        shadowOpacity: 0.3,
      },
      headerRight: () => (
        <Pressable style={{ flexDirection: "row", gap: 5,alignItems:"center" }}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons name="location-outline" size={24} color="black" onPress={()=>navigation.navigate('LocationScreen')} />
          <Pressable onPress={()=>navigation.navigate('LocationScreen')}>
            <Text>Bangalore</Text>
          </Pressable>
        </Pressable>
      ),
    });
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

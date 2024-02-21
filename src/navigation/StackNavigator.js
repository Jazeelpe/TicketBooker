import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import LocationScreen from "../screens/LocationScreen";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator  screenOptions={{headerTitle:""}}>
      <HomeStack.Screen name="Home"  component={HomeScreen} />
      <HomeStack.Screen name="LocationScreen" component={LocationScreen}/>
    </HomeStack.Navigator>
  );
};

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="HomeScreen"
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#000", fontSize: 13 },
         
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Ionicons name="home-sharp" size={24} color="black" />
              ) : (
                <Ionicons name="home-outline" size={24} color="black" />
              );
            },
          }}
          component={HomeStackScreen}
        />
        <Tab.Screen
          name="ProfileScreen"
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "black", fontSize: 13 },
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Ionicons name="person" size={24} color="black" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              );
            },
          }}
          component={ProfileStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

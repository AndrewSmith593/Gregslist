import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";
import AppNavigator from "./app/navigation/AppNavigator";
import AccountNavigator from "./app/navigation/AccountNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
// import * as ImagePicker from "expo-image-picker";
// import Screen from "./app/components/Screen";
// import * as Permissions from "expo-permissions";
// import { Image, Button } from "react-native";
// import ImageInputList from "./app/components/ImageInputList";
// import ListingEditScreen from "./app/screens/ListingEditScreen";
// const Link = () => {
//   const navigation = useNavigation();

//   return (
//     );
//   };

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="ClickIt"
      onPress={() => navigation.navigate("TweetDetails", { id: 12 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "skyblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
        // headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>AccountDang</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "lightgreen",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen name="FeedPoop" component={FeedNavigator} />
    <Tab.Screen name="PeepeeAccount" component={AccountNavigator} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

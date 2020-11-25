import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, Platform, Button } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';

export default function App() {

  return (
    <View
    style={{
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100,
    }}
    >
      <Card 
      title="Red jacket for sale"
      subTitle="$100"
      image={require("./app/assets/chair.jpg")}
      /> 
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Courier",
    fontStyle: "italic",
    fontWeight: "600",
    color: "tomato",
    textTransform: "capitalize",
    textDecorationLine: "line-through",
    lineHeight: 30,
  }
})
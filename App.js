import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, Platform, Button } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from './app/components/Button';


export default function App() {

  return (
    <View style={styles.container}>
      <AppButton title="Login" onPress={}/>
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
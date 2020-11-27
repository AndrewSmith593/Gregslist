import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet, Text, Platform, Button, Switch } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
    <AppPicker icon="apps" placeholder="Category" />
    <AppTextInput icon="email" placeholder="Emailz" />
    </Screen>
  );
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
  },
});

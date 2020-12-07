import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Screen from "./app/components/Screen";
import * as Permissions from "expo-permissions";
import { Image, Button } from "react-native";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />
}

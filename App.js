import { StatusBar } from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import AppButton from "./app/componenets/AppButton";
import Card from "./app/componenets/Card";
import Listing from "./app/screens/Listing";
import MessageScreen from "./app/screens/MessageScreen";
import ViewImage from "./app/screens/ViewImage";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <MessageScreen />
  );
}
const styles = StyleSheet.create({
 
});

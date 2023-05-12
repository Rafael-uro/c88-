import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile1.js";
import { FlatList } from "react-native-gesture-handler";
import StackNavigator from "./StackNavigator";
import Logout from "../screens/Logout";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tela Inicial" component={StackNavigator} />
      <Drawer.Screen name="Perfil" component={Profile} />
      <Drawer.Screen name="logout" component={Logout} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;

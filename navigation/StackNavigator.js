import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator()

const StackNavigator = () =>{
    return (
        <Stack.Navigator>
        
            <Stack.Screen name = "tela Inicial" component={TabNavigator}/>
            <Stack.Screen name = "Tela de Posts" component={PostScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator;
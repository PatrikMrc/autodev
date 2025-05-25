import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Feather } from "@expo/vector-icons";

import Home from "../src/screens/Home/Home";
import Perfil from "../src/screens/Profile/Profile";
import Propostas from "../src/screens/Proposals/Proposals";
import Anuncios from "../src/screens/MyAds/MyAds";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Propostas",
          tabBarIcon: ({ color, size }) => (
            <Feather name="clipboard" color={color} size={size} />
          ),
        }}
        name="Proposals"
        component={Propostas}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Anúncios",
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" color={color} size={size} />
          ),
        }}
        name="Ads"
        component={Anuncios}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Conta",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Perfil}
      />
    </Tab.Navigator>
  );
}

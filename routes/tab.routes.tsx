import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import Home from "../src/screens/Home/Home";
import Profile from "../src/screens/Profile/Profile";
import Proposals from "../src/screens/Proposals/Proposals";
import Ads from "../src/screens/Ads/Ads";
import Login from "@/src/screens/Login/Login";
import Register from "@/src/screens/Register/Register";
import Choice from "@/src/screens/Choice/Choice";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
      <Tab.Screen name="Choice" component={Choice} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Proposals" component={Proposals} />
      <Tab.Screen name="Ads" component={Ads} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

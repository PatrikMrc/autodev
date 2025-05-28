import { StatusBar } from "react-native";
import {
  NavigationIndependentTree,
  useNavigationIndependentTree,
} from "@react-navigation/native";

import StackRoutes from "../routes/stack.routes";

import React from "react";

export default function App() {
  return (
    <NavigationIndependentTree>
      <StatusBar barStyle="dark-content" backgroundColor="" />
      <StackRoutes />
    </NavigationIndependentTree>
  );
}

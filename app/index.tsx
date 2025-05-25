import { StatusBar } from "react-native";
import {
  NavigationIndependentTree,
  useNavigationIndependentTree,
} from "@react-navigation/native";

import TabRoutes from "../routes/tab.routes";
import StackRoutes from "../routes/stack.routes";

import React from "react";

export default function App() {
  return (
    <NavigationIndependentTree>
      <StatusBar barStyle="light-content" backgroundColor="" />
      <StackRoutes />
    </NavigationIndependentTree>
  );
}

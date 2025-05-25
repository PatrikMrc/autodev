import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Choice from "../src/screens/Choice/Choice";
import Login from "../src/screens/Login/Login";
import Register from "../src/screens/Register/Register";
import Splash from "../src/screens/Splash/Splash";
import Home from "../src/screens/Home/Home";

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Choice"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Choice" component={Choice} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

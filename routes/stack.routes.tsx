import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Choice from "../src/screens/Choice/Choice";
import Login from "../src/screens/Login/Login";
import Register from "../src/screens/Register/Register";
import Splash from "../src/screens/Splash/Splash";
import TabRoutes from "./tab.routes";
import AdsMoto from "@/src/screens/AdsMoto/AdsMoto";
import AdsCar from "@/src/screens/AdsCar/AdsCar";
import Despachant from "@/src/screens/Despachant/Despachant";
import Mecanic from "@/src/screens/Mecanic/Mecanic";

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Choice"
    >
      <Stack.Screen name="Home" component={TabRoutes} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Choice" component={Choice} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="AdsMoto" component={AdsMoto} />
      <Stack.Screen name="AdsCar" component={AdsCar} />
      <Stack.Screen name="Despachant" component={Despachant} />
      <Stack.Screen name="Mecanic" component={Mecanic} />
    </Stack.Navigator>
  );
}

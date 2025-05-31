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
import AdsDetailsMoto from "@/src/screens/AdsDetails/AdsDetailsMoto";
import AdsDetailsCar from "@/src/screens/AdsDetails/AdsDetailsCar";
import MecanicDetails from "@/src/screens/Mecanic/MecanicDetails";
import DespachantDetails from "@/src/screens/Despachant/DespachantDetails";

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Choice">
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={TabRoutes}
      />
      <Stack.Screen
        name="Splash"
        options={{ headerShown: false }}
        component={Splash}
      />
      <Stack.Screen
        name="Choice"
        options={{ headerShown: false }}
        component={Choice}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
        component={Register}
      />
      <Stack.Screen
        name="AdsMoto"
        options={{
          headerTitleStyle: { fontSize: 16 },
          title: "",
        }}
        component={AdsMoto}
      />
      <Stack.Screen
        name="AdsCar"
        options={{
          headerTitleStyle: { fontSize: 16 },
          title: "",
        }}
        component={AdsCar}
      />
      <Stack.Screen
        name="Despachant"
        options={{
          headerTitleStyle: { fontSize: 16 },
          title: "",
        }}
        component={Despachant}
      />
      <Stack.Screen
        name="Mecanic"
        options={{
          headerTitleStyle: { fontSize: 16 },
          title: "",
        }}
        component={Mecanic}
      />
      <Stack.Screen
        name="AdsDetailsMoto"
        options={{
          headerTitleStyle: { fontSize: 16 },
          title: "",
        }}
        component={AdsDetailsMoto}
      />
      <Stack.Screen
        name="AdsDetailsCar"
        options={{
          headerTitleStyle: { fontSize: 16 },
          title: "",
        }}
        component={AdsDetailsCar}
      />
      <Stack.Screen
        name="DespachantDetails"
        options={{
          headerTitleStyle: { fontSize: 16 },
          title: "",
        }}
        component={DespachantDetails}
      />
      <Stack.Screen
        name="MecanicDetails"
        options={{
          headerTitleStyle: { fontSize: 16 },
          title: "",
        }}
        component={MecanicDetails}
      />
    </Stack.Navigator>
  );
}

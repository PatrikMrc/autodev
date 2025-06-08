import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync("token");

      if (token) {
        // Usuário já está logado
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      } else {
        // Redireciona para tela de login
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      }
    };

    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/Splash.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F41BB",
  },
});

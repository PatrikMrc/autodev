import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Choice() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/background.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.containerbuttons}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.button1}
          >
            <Text style={styles.buttonText1}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.button2}
          >
            <Text style={styles.buttonText2}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  containerbuttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    top: "80%",
  },
  button1: {
    backgroundColor: "#1F41BB",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "40%",
    alignItems: "center",
  },
  button2: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "40%",
    alignItems: "center",
  },
  buttonText1: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

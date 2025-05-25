import { StyleSheet, Image, View } from "react-native";
import React from "react";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/Splash.svg")} />
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

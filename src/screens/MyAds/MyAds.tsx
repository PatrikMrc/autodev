import { StyleSheet, Text, View } from "react-native";

export default function MyAds() {
  return (
    <View style={styles.container}>
      <Text>Ads</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

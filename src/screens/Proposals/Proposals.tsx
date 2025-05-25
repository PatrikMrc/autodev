import { StyleSheet, Text, View } from "react-native";

export default function Proposals() {
  return (
    <View style={styles.container}>
      <Text>Proposals</Text>
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

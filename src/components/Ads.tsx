import { useNavigation } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Ads({ data, onPress }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image style={styles.image} source={data.image} />
        <Text style={styles.textValue}>R${data.value}</Text>
        <Text style={styles.textName}>{data.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {},
  image: {
    borderRadius: 15,
    width: 300,
    height: 200,
  },
  textValue: {
    alignItems: "flex-start",
    fontSize: 20,
    fontWeight: 600,
    color: "#1F41BB",
  },
  textName: {
    fontSize: 15,
    fontWeight: 500,
  },
});

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Ads(props: {
  image: number;
  name: string;
  value: string;
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image style={styles.image} source={props.image} />
        <Text style={styles.textValue}>R${props.value}</Text>
        <Text style={styles.textName}>{props.name}</Text>
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

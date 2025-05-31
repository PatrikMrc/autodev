import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ListPersonals({ data, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.image} source={data.image} />
        </View>
        <View>
          <Text>
            {data.name}, {data.age} anos
          </Text>
          <Text>
            Avaliação <Image source={data.star} />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  button: {
    flex: 1,
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
});

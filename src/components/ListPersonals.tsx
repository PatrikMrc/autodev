import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ListPersonals(props: {
  image: number;
  name: string;
  age: number;
  star: number;
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.image} source={props.image} />
        </View>
        <View>
          <Text>
            {props.name}, {props.age} anos
          </Text>
          <Text>
            Avaliação <Image source={props.star} />
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

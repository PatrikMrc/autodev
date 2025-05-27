import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import ListPersonals from "../../components/ListPersonals";

export default function Despachant() {
  const personalDespachant = [
    {
      name: "Tayara Andreza",
      image: require("../../../assets/images/despachant1.png"),
      age: 35,
      star: require("../../../assets/images/5Star.png"),
    },
    {
      name: "Roberto Carlos",
      image: require("../../../assets/images/despachant2.png"),
      age: 100,
      star: require("../../../assets/images/1Star.png"),
    },
    {
      name: "Zezo Potiguar",
      image: require("../../../assets/images/despachant3.png"),
      age: 50,
      star: require("../../../assets/images/5Star.png"),
    },
    {
      name: "Rafaela Santos",
      image: require("../../../assets/images/despachant4.png"),
      age: 23,
      star: require("../../../assets/images/3Star.png"),
    },
    {
      name: "Zé Ramalho",
      image: require("../../../assets/images/despachant5.png"),
      age: 76,
      star: require("../../../assets/images/2Star.png"),
    },
    {
      name: "Michael Jackson",
      image: require("../../../assets/images/despachant6.png"),
      age: 34,
      star: require("../../../assets/images/4Star.png"),
    },
    {
      name: "Vicente Nery",
      image: require("../../../assets/images/despachant7.png"),
      age: 40,
      star: require("../../../assets/images/5Star.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Despachantes</Text>

      {personalDespachant.map((pessoa, index) => (
        <ListPersonals
          key={index}
          name={pessoa.name}
          image={pessoa.image}
          age={pessoa.age}
          star={pessoa.star}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});

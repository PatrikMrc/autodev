import { View, StyleSheet, Text } from "react-native";
import ListPersonals from "../../components/ListPersonals";

export default function Mecanic() {
  const personalMecanic = [
    {
      name: "Amaral Fonseca",
      image: require("../../../assets/images/mecanic1.png"),
      age: 27,
      star: require("../../../assets/images/5Star.png"),
    },
    {
      name: "Patrik Teves",
      image: require("../../../assets/images/mecanic2.png"),
      age: 12,
      star: require("../../../assets/images/1Star.png"),
    },
    {
      name: "Gabriel Ribeiro",
      image: require("../../../assets/images/mecanic3.png"),
      age: 50,
      star: require("../../../assets/images/5Star.png"),
    },
    {
      name: "Marcão",
      image: require("../../../assets/images/mecanic4.png"),
      age: 43,
      star: require("../../../assets/images/3Star.png"),
    },
    {
      name: "Antônio Carlos",
      image: require("../../../assets/images/mecanic5.png"),
      age: 36,
      star: require("../../../assets/images/2Star.png"),
    },
    {
      name: "José Victor",
      image: require("../../../assets/images/mecanic6.png"),
      age: 25,
      star: require("../../../assets/images/4Star.png"),
    },
    {
      name: "Elivelton Marques",
      image: require("../../../assets/images/mecanic7.png"),
      age: 20,
      star: require("../../../assets/images/4Star.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mecânicos</Text>

      {personalMecanic.map((pessoa, index) => (
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

import { View, StyleSheet, Text } from "react-native";
import ListPersonals from "../../components/ListProfissionals";
import { useNavigation } from "expo-router";
export default function Mecanic() {
  const navigation = useNavigation();
  //BANCO LOCAL
  const personalMecanic = [
    {
      name: "Amaral Fonseca",
      image: require("../../../assets/images/mecanic1.png"),
      age: 27,
      star: require("../../../assets/images/4Star.png"),
      experience: "4",
      services: "459",
      number: "(81)9-6343-2123",
      email: "amaralcega@outlook.com",
    },
    {
      name: "Patrik Teves",
      image: require("../../../assets/images/mecanic2.png"),
      age: 20,
      star: require("../../../assets/images/1Star.png"),
      experience: "1",
      services: "20",
      number: "(81)9-8114-0127",
      email: "patrik@hotmail.com",
    },
    {
      name: "Gabriel Ribeiro",
      image: require("../../../assets/images/mecanic3.png"),
      age: 50,
      star: require("../../../assets/images/5Star.png"),
      experience: "25",
      services: "3567",
      number: "(81)9-5623-5321",
      email: "bielzin1337@hotmail.com",
    },
    {
      name: "Marcão",
      image: require("../../../assets/images/mecanic4.png"),
      age: 43,
      star: require("../../../assets/images/5Star.png"),
      experience: "20",
      services: "5000",
      number: "(81)9-2323-2561",
      email: "marquinhos@gmail.com",
    },
    {
      name: "Antônio Carlos",
      image: require("../../../assets/images/mecanic5.png"),
      age: 36,
      star: require("../../../assets/images/4Star.png"),
      experience: "13",
      services: "1354",
      number: "(81)9-9193-5856",
      email: "antonio@hotmail.com",
    },
    {
      name: "José Victor",
      image: require("../../../assets/images/mecanic6.png"),
      age: 25,
      star: require("../../../assets/images/2Star.png"),
      experience: "8",
      services: "220",
      number: "(81)9-71973-5426",
      email: "josevictor12@hotmail.com",
    },
    {
      name: "Elivelton Marques",
      image: require("../../../assets/images/mecanic7.png"),
      age: 20,
      star: require("../../../assets/images/1Star.png"),
      experience: "5",
      services: "423",
      number: "(81)9-9998-8674",
      email: "elivelton69@hotmail.com",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mecânicos</Text>

      {personalMecanic.map((pessoa, index) => (
        <ListPersonals
          key={index}
          data={pessoa}
          onPress={() =>
            navigation.navigate("MecanicDetails", { data: pessoa })
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

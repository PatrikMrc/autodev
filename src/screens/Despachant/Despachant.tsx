import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import ListPersonals from "../../components/ListProfissionals";
import { useNavigation } from "expo-router";
export default function Despachant() {
  const navigation = useNavigation();

  const personalDespachant = [
    {
      name: "Tayara Andreza",
      image: require("../../../assets/images/despachant1.png"),
      age: 35,
      star: require("../../../assets/images/5Star.png"),
      experience: "10",
      services: "328",
      number: "(81)9-8123-4221",
      email: "atayara@yahoo.com",
    },
    {
      name: "Roberto Carlos",
      image: require("../../../assets/images/despachant2.png"),
      age: 100,
      star: require("../../../assets/images/1Star.png"),
      experience: "5",
      services: "10",
      number: "(81)9-9223-4331",
      email: "carlosdead@orkut.com",
    },
    {
      name: "Zezo Potiguar",
      image: require("../../../assets/images/despachant3.png"),
      age: 50,
      star: require("../../../assets/images/5Star.png"),
      experience: "25",
      services: "1349",
      number: "(81)9-9993-4231",
      email: "ze157@outlook.com",
    },
    {
      name: "Rafaela Santos",
      image: require("../../../assets/images/despachant4.png"),
      age: 23,
      star: require("../../../assets/images/3Star.png"),
      experience: "3",
      services: "536",
      number: "(81)9-2323-2561",
      email: "rafaelinha@gmail.com",
    },
    {
      name: "Zé Ramalho",
      image: require("../../../assets/images/despachant5.png"),
      age: 76,
      star: require("../../../assets/images/2Star.png"),
      experience: "40",
      services: "324",
      number: "(81)9-9193-5856",
      email: "avohai@gmail.com",
    },
    {
      name: "Michael Jackson",
      image: require("../../../assets/images/despachant6.png"),
      age: 34,
      star: require("../../../assets/images/4Star.png"),
      experience: "12",
      services: "1200",
      number: "(81)9-71973-5426",
      email: "michaeldead@hotmail.com",
    },
    {
      name: "Vicente Nery",
      image: require("../../../assets/images/despachant7.png"),
      age: 40,
      star: require("../../../assets/images/5Star.png"),
      experience: "27",
      services: "5423",
      number: "(81)9-9998-8674",
      email: "vicentin@hotmail.com",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Despachantes</Text>

      {personalDespachant.map((pessoa, index) => (
        <ListPersonals
          key={index}
          data={pessoa}
          onPress={() =>
            navigation.navigate("DespachantDetails", { data: pessoa })
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
    backgroundColor: "white",
  },
});

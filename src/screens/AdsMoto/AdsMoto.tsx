import Ads from "@/src/components/Ads";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function AdsMoto() {
  const ListAdsMoto = [
    {
      name: "CbTwister 250",
      image: require("../../../assets/images/moto1.png"),
      value: "15,000",
    },
    {
      name: "Triumph Street Triple",
      image: require("../../../assets/images/moto2.png"),
      value: "56.100",
    },
    {
      name: "Cg Fan 150",
      image: require("../../../assets/images/moto3.png"),
      value: "10.000",
    },
    {
      name: "Hornet",
      image: require("../../../assets/images/moto4.png"),
      value: "32.500",
    },
    {
      name: "Hornet Carburada",
      image: require("../../../assets/images/moto5.png"),
      value: "27.000",
    },
    {
      name: "Harley Davidson 1200x",
      image: require("../../../assets/images/moto6.png"),
      value: "70.400",
    },
    {
      name: "Royal",
      image: require("../../../assets/images/moto7.png"),
      value: "35.000",
    },
    {
      name: "Bmw",
      image: require("../../../assets/images/moto8.png"),
      value: "60.350",
    },
    {
      name: "SuperCub",
      image: require("../../../assets/images/moto9.png"),
      value: "17.200",
    },
    {
      name: "Royal Enfield",
      image: require("../../../assets/images/moto10.png"),
      value: "26.400",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Pesquisar Modelo"
          style={styles.search}
          placeholderTextColor={"grey"}
        ></TextInput>
        <Feather name="search" size={20} color="#888" style={styles.icon} />
      </View>
      {ListAdsMoto.map((anuncio, index) => (
        <Ads
          key={index}
          image={anuncio.image}
          value={anuncio.value}
          name={anuncio.name}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
  },
  containerInput: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 15,
    width: "70%",
    padding: 10,
  },
  icon: {
    position: "absolute",
    width: "70%",
    left: 320,
  },
});

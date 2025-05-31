import Ads from "@/src/components/Ads";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
export default function AdsCar() {
  const navigation = useNavigation();

  const ListAdsCar = [
    {
      name: "Subaru",
      image: require("../../../assets/images/car1.png"),
      value: "600,100",
    },
    {
      name: "Porsche 911",
      image: require("../../../assets/images/car2.png"),
      value: "800,700",
    },
    {
      name: "Mustang",
      image: require("../../../assets/images/car3.png"),
      value: "450,000",
    },
    {
      name: "Porsche GT3",
      image: require("../../../assets/images/car4.png"),
      value: "1,200,000",
    },
    {
      name: "Seinao kkk",
      image: require("../../../assets/images/car5.png"),
      value: "7.000",
    },
    {
      name: "Alpine",
      image: require("../../../assets/images/car6.png"),
      value: "200,000",
    },
    {
      name: "Audi A4",
      image: require("../../../assets/images/car7.png"),
      value: "250,500",
    },
    {
      name: "BMW 320i",
      image: require("../../../assets/images/car8.png"),
      value: "150,300",
    },
    {
      name: "Skyline R35",
      image: require("../../../assets/images/car9.png"),
      value: "1,400,000",
    },
    {
      name: "Audi R8",
      image: require("../../../assets/images/car10.png"),
      value: "1,600,000",
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
      {ListAdsCar.map((anuncio, index) => (
        <Ads
          key={index}
          data={anuncio}
          onPress={() =>
            navigation.navigate("AdsDetailsCar", { data: anuncio })
          }
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

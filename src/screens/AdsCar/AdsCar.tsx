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
      model: "Subaru",
      location: "Recife-PE",
      year: 2023,
      km: "0",
      engine: "V6",
      document: "IPVA 2025 Pago",
      state: "Novo",
    },
    {
      name: "Porsche 911",
      image: require("../../../assets/images/car2.png"),
      value: "800,700",
      model: "Porsche 911",
      location: "Pesqueira-PE",
      year: 2024,
      km: "0",
      engine: "V8",
      document: "IPVA 2025 Pago",
      state: "Novo",
    },
    {
      name: "Mustang",
      image: require("../../../assets/images/car3.png"),
      value: "450,000",
      model: "Mustang HellCat",
      location: "Recife-PE",
      year: 2023,
      km: "9.000",
      engine: "V8",
      document: "IPVA 2025 Pago",
      state: "Usado",
    },
    {
      name: "Porsche GT3",
      image: require("../../../assets/images/car4.png"),
      value: "1,200,000",
      model: "Porsche GT3",
      location: "Caruaru-PE",
      year: 2021,
      km: "2.000",
      engine: "V10 Bi-Turbo",
      document: "IPVA 2025 Pago",
      state: "Usado",
    },
    {
      name: "Seinao kkk",
      image: require("../../../assets/images/car5.png"),
      value: "7.000",
      model: "naosei",
      location: "Recife-PE",
      year: 2023,
      km: "5.000",
      engine: "V8",
      document: "IPVA 2025 Pago",
      state: "Usado",
    },
    {
      name: "Alpine",
      image: require("../../../assets/images/car6.png"),
      value: "200,000",
      model: "Alpine",
      location: "Toritama-PE",
      year: 2018,
      km: "5.000",
      engine: "2.0",
      document: "IPVA 2025 Pago",
      state: "Usado",
    },
    {
      name: "Audi A4",
      image: require("../../../assets/images/car7.png"),
      value: "250,500",
      model: "Audi A4",
      location: "Batateira-PE",
      year: 2017,
      km: "20.000",
      engine: "V6",
      document: "IPVA 2025 Pago",
      state: "Usado",
    },
    {
      name: "BMW 320i",
      image: require("../../../assets/images/car8.png"),
      value: "150,300",
      model: "Bmw 320I",
      location: "Águas Pretas-PE",
      year: 2020,
      km: "0.000",
      engine: "4.0",
      document: "IPVA 2024 Pago",
      state: "Novo",
    },
    {
      name: "Skyline R35",
      image: require("../../../assets/images/car9.png"),
      value: "1,400,000",
      model: "Skyline GTR R35",
      location: "Caruaru-PE",
      year: 2015,
      km: "0.000",
      engine: "V10",
      document: "IPVA 2025 Pago",
      state: "Novo",
    },
    {
      name: "Audi R8",
      image: require("../../../assets/images/car10.png"),
      value: "1,600,000",
      model: "Audi R8",
      location: "Recife-PE",
      year: 2025,
      km: "0.000",
      engine: "V10",
      document: "IPVA 2025 Pago",
      state: "Novo",
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

import Ads from "@/src/components/Ads";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function AdsMoto() {
  const navigation = useNavigation();

  const ListAdsMoto = [
    {
      name: "CbTwister 250",
      image: require("../../../assets/images/moto1.png"),
      value: "15,000",
      model: "Honda CB TWISTER",
      location: "Caruaru-PE",
      year: 2018,
      km: "70.000",
      engine: "250",
      document: "IPVA 2025 Pago",
      state: "Conservada",
    },
    {
      name: "Triumph Street Triple",
      image: require("../../../assets/images/moto2.png"),
      value: "56.100",
      model: "Triumph Street Triple",
      location: "São Paulo",
      year: 2023,
      km: "20.000",
      engine: "765",
      document: "IPVA 2025 Pago",
      state: "Conservada",
    },
    {
      name: "Cg Fan 150",
      image: require("../../../assets/images/moto3.png"),
      value: "10.000",
      model: "Honda CG Fan 150",
      location: "Toritama-PE",
      year: 2013,
      km: "100.000",
      engine: "150",
      document: "IPVA 2024 Pago",
      state: "Conservada",
    },
    {
      name: "Hornet",
      image: require("../../../assets/images/moto4.png"),
      value: "32.500",
      model: "Honda Hornet",
      location: "Campina-Grande",
      year: 2011,
      km: "60.000",
      engine: "600",
      document: "IPVA 2025 Pago",
      state: "Conservada",
    },
    {
      name: "Hornet Carburada",
      image: require("../../../assets/images/moto5.png"),
      value: "27.000",
      model: "Honda Hornet",
      location: "João Pessoa-PB",
      year: 2007,
      km: "120.000",
      engine: "600",
      document: "IPVA 2025 Pago",
      state: "Conservada",
    },
    {
      name: "Harley Davidson 1200x",
      image: require("../../../assets/images/moto6.png"),
      value: "70.400",
      model: "Harley Davidson 1200x",
      location: "Caruaru-PE",
      year: 2020,
      km: "30.000",
      engine: "1200",
      document: "IPVA 2025 Pago",
      state: "Conservada",
    },
    {
      name: "Royal",
      image: require("../../../assets/images/moto7.png"),
      value: "35.000",
      model: "Royal Enfield",
      location: "Caruaru-PE",
      year: 2019,
      km: "100.000",
      engine: "250",
      document: "IPVA 2024 Pago",
      state: "Conservada",
    },
    {
      name: "Bmw",
      image: require("../../../assets/images/moto8.png"),
      value: "60.350",
      model: "BMW",
      location: "Pesqueira-PE",
      year: 2016,
      km: "1.000",
      engine: "650",
      document: "IPVA 2025 Pago",
      state: "Conservada",
    },
    {
      name: "SuperCub",
      image: require("../../../assets/images/moto9.png"),
      value: "17.200",
      model: "honda SuperCub",
      location: "Catende-PE",
      year: 1996,
      km: "3.000",
      engine: "100",
      document: "IPVA 2025 Pago",
      state: "Conservada",
    },
    {
      name: "Royal Enfield",
      image: require("../../../assets/images/moto10.png"),
      value: "26.400",
      model: "Royal Enfield GT",
      location: "Batateira-PE",
      year: 2024,
      km: "15.000",
      engine: "650",
      document: "IPVA 2024 Pago",
      state: "Conservada",
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
          data={anuncio}
          onPress={() => navigation.navigate("AdsDetails", { data: anuncio })}
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

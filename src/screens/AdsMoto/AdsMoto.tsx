import Ads from "@/src/components/Ads";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import axios from "axios";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function AdsMoto() {
  const navigation = useNavigation();
  const [allAds, setAllAds] = useState([]);
  const ListAdsMoto = [
    {
      name: "CbTwister 250",
      image: require("../../../assets/images/moto1.png"),
      amount: "15,000",
      model: "Honda CB TWISTER",
      location: "Caruaru-PE",
      year: 2018,
      km: "70.000",
      engine: "250",
      document: "IPVA 2025 Pago",
      condition: "Usado",
    },
    {
      name: "Triumph Street Triple",
      image: require("../../../assets/images/moto2.png"),
      amount: "56.100",
      model: "Triumph Street Triple",
      location: "São Paulo",
      year: 2023,
      km: "20.000",
      engine: "765",
      document: "IPVA 2025 Pago",
      condition: "Usado",
    },
    {
      name: "Cg Fan 150",
      image: require("../../../assets/images/moto3.png"),
      amount: "10.000",
      model: "Honda CG Fan 150",
      location: "Toritama-PE",
      year: 2013,
      km: "100.000",
      engine: "150",
      document: "IPVA 2024 Pago",
      condition: "Usado",
    },
    {
      name: "Hornet",
      image: require("../../../assets/images/moto4.png"),
      amount: "32.500",
      model: "Honda Hornet",
      location: "Campina-Grande",
      year: 2011,
      km: "60.000",
      engine: "600",
      document: "IPVA 2025 Pago",
      condition: "Usado",
    },
    {
      name: "Hornet Carburada",
      image: require("../../../assets/images/moto5.png"),
      amount: "27.000",
      model: "Honda Hornet",
      location: "João Pessoa-PB",
      year: 2007,
      km: "120.000",
      engine: "600",
      document: "IPVA 2025 Pago",
      condition: "Usado",
    },
    {
      name: "Harley Davidson 1200x",
      image: require("../../../assets/images/moto6.png"),
      amount: "70.400",
      model: "Harley Davidson 1200x",
      location: "Caruaru-PE",
      year: 2020,
      km: "30.000",
      engine: "1200",
      document: "IPVA 2025 Pago",
      condition: "Usado",
    },
    {
      name: "Royal",
      image: require("../../../assets/images/moto7.png"),
      amount: "35.000",
      model: "Royal Enfield",
      location: "Caruaru-PE",
      year: 2019,
      km: "100.000",
      engine: "250",
      document: "IPVA 2024 Pago",
      condition: "Usado",
    },
    {
      name: "Bmw",
      image: require("../../../assets/images/moto8.png"),
      amount: "60.350",
      model: "BMW",
      location: "Pesqueira-PE",
      year: 2016,
      km: "1.000",
      engine: "650",
      document: "IPVA 2025 Pago",
      condition: "Usado",
    },
    {
      name: "SuperCub",
      image: require("../../../assets/images/moto9.png"),
      amount: "17.200",
      model: "honda SuperCub",
      location: "Catende-PE",
      year: 1996,
      km: "3.000",
      engine: "100",
      document: "IPVA 2025 Pago",
      condition: "Usado",
    },
    {
      name: "Royal Enfield",
      image: require("../../../assets/images/moto10.png"),
      amount: "26.400",
      model: "Royal Enfield GT",
      location: "Batateira-PE",
      year: 2024,
      km: "15.000",
      engine: "650",
      document: "IPVA 2024 Pago",
      condition: "Usado",
    },
  ];

  useEffect(() => {
    const fetchUserAds = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        if (!token) {
          Alert.alert("Erro", "Usuário não autenticado");
          return;
        }

        const response = await axios.get(
          "http://127.0.0.1:8000/api/product/get?category_id=2",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const anunciosBackend = response.data.products.map((item) => ({
          name: item.name,
          amount: item.amount,
          mark: item.mark,
          location: item.location,
          type: item.type,
        }));

        setAllAds([...ListAdsMoto, ...anunciosBackend]);
      } catch (error) {
        console.error("Erro ao buscar anúncios do backend:", error);
        Alert.alert("Erro", "Não foi possível carregar seus anúncios.");
        setAllAds(ListAdsMoto);
      }
    };

    fetchUserAds();
  }, []);

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
      {allAds.map((anuncio, index) => (
        <Ads
          key={index}
          data={anuncio}
          onPress={() =>
            navigation.navigate("AdsDetailsMoto", { data: anuncio })
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
    left: 300,
  },
});

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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
export default function AdsCar() {
  const navigation = useNavigation();
  const [allAds, setAllAds] = useState([]);
  const ListAdsCar = [
    {
      id: 1,
      name: "Subaru",
      image: require("../../../assets/images/car1.png"),
      amount: "600,100",
      model: "Subaru",
      location: "Recife-PE",
      year: 2023,
      km: "0",
      engine: "V6",
      document: "IPVA 2025 Pago",
      condition: "Novo",
    },
    {
      id: 2,
      name: "Porsche 911",
      image: require("../../../assets/images/car2.png"),
      amount: "800,700",
      model: "Porsche 911",
      location: "Pesqueira-PE",
      year: 2024,
      km: "0",
      engine: "V8",
      document: "IPVA 2025 Pago",
      condition: "Novo",
    },
    {
      id: 3,
      name: "Mustang",
      image: require("../../../assets/images/car3.png"),
      amount: "450,000",
      model: "Mustang HellCat",
      location: "Recife-PE",
      year: 2023,
      km: "9.000",
      engine: "V8",
      document: "IPVA 2025 Pago",
      condition: "Usado",
    },
    {
      id: 4,
      name: "Porsche GT3",
      image: require("../../../assets/images/car4.png"),
      amount: "1,200,000",
      model: "Porsche GT3",
      location: "Caruaru-PE",
      year: 2021,
      km: "2.000",
      engine: "V10 Bi-Turbo",
      document: "IPVA 2025 Pago",
      condition: "Usado",
    },
    {
      id: 5,
      name: "Seinao kkk",
      image: require("../../../assets/images/car5.png"),
      amount: "7.000",
      model: "naosei",
      location: "Recife-PE",
      year: 2023,
      km: "5.000",
      engine: "V8",
      document: "IPVA 2025 Pago",
      condition: "Usado",
    },
    {
      id: 6,
      name: "Alpine",
      image: require("../../../assets/images/car6.png"),
      amount: "200,000",
      model: "Alpine",
      location: "Toritama-PE",
      year: 2018,
      km: "5.000",
      engine: "2.0",
      document: "IPVA 2025 Pago",
      condition: "Usado",
    },
    {
      id: 7,
      name: "Audi A4",
      image: require("../../../assets/images/car7.png"),
      amount: "250,500",
      model: "Audi A4",
      location: "Batateira-PE",
      year: 2017,
      km: "20.000",
      engine: "V6",
      document: "IPVA 2025 Pago",
      condition: "Usado",
    },
    {
      id: 8,
      name: "BMW 320i",
      image: require("../../../assets/images/car8.png"),
      amount: "150,300",
      model: "Bmw 320I",
      location: "Águas Pretas-PE",
      year: 2020,
      km: "0.000",
      engine: "4.0",
      document: "IPVA 2024 Pago",
      condition: "Novo",
    },
    {
      id: 9,
      name: "Skyline R35",
      image: require("../../../assets/images/car9.png"),
      amount: "1,400,000",
      model: "Skyline GTR R35",
      location: "Caruaru-PE",
      year: 2015,
      km: "0.000",
      engine: "V10",
      document: "IPVA 2025 Pago",
      condition: "Novo",
    },
    {
      id: 10,
      name: "Audi R8",
      image: require("../../../assets/images/car10.png"),
      amount: "1,600,000",
      model: "Audi R8",
      location: "Recife-PE",
      year: 2025,
      km: "0.000",
      engine: "V10",
      document: "IPVA 2025 Pago",
      condition: "Novo",
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
          "http://127.0.0.1:8000/api/product/get?category_id=1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const anunciosBackend = response.data.products.map((item) => ({
          id: item.id,
          name: item.name,
          amount: item.amount,
          mark: item.mark,
          location: item.location,
          year: item.year,
          km: item.km,
          engine: item.engine,
          type: item.type,
        }));

        setAllAds([...ListAdsCar, ...anunciosBackend]);
      } catch (error) {
        console.error("Erro ao buscar anúncios do backend:", error);
        Alert.alert("Erro", "Não foi possível carregar seus anúncios.");
        setAllAds(ListAdsCar);
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

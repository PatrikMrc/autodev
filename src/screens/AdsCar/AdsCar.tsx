import Ads from "@/src/components/Ads";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
//LIB ICON
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
export default function AdsCar() {
  //ROTAS
  const navigation = useNavigation();
  const [allAds, setAllAds] = useState([]);
  //BANCO LOCAL
  const ListAdsCar = [
    {
      id: 11,
      name: "Subaru",
      image: require("../../../assets/images/car1.png"),
      amount: "60010000",
      mark: "Subaru",
      location: "Recife-PE",
      year: 2023,
      km: "0",
      engine: "V6",
      type: "Novo",
    },
    {
      id: 12,
      name: "Porsche 911",
      image: require("../../../assets/images/car2.png"),
      amount: "80070000",
      mark: "Porsche",
      location: "Pesqueira-PE",
      year: 2024,
      km: "0",
      engine: "V8",
      type: "Novo",
    },
    {
      id: 13,
      name: "Mustang",
      image: require("../../../assets/images/car3.png"),
      amount: "45000000",
      mark: "Ford",
      location: "Recife-PE",
      year: 2023,
      km: "9.000",
      engine: "V8",
      type: "Usado",
    },
    {
      id: 14,
      name: "Porsche GT3",
      image: require("../../../assets/images/car4.png"),
      amount: "120000000",
      mark: "Porsche",
      location: "Caruaru-PE",
      year: 2021,
      km: "2.000",
      engine: "V10 Bi-Turbo",
      type: "Usado",
    },
    {
      id: 15,
      name: "Seinao kkk",
      image: require("../../../assets/images/car5.png"),
      amount: "700000",
      mark: "naosei",
      location: "Recife-PE",
      year: 2023,
      km: "5.000",
      engine: "V8",
      type: "Usado",
    },
    {
      id: 18,
      name: "Alpine",
      image: require("../../../assets/images/car6.png"),
      amount: "20000000",
      mark: "Alpine",
      location: "Toritama-PE",
      year: 2018,
      km: "5.000",
      engine: "2.0",
      type: "Usado",
    },
    {
      id: 26,
      name: "Audi A4",
      image: require("../../../assets/images/car7.png"),
      amount: "25050000",
      mark: "Audi",
      location: "Batateira-PE",
      year: 2017,
      km: "20.000",
      engine: "V6",
      type: "Usado",
    },
    {
      id: 25,
      name: "BMW 320i",
      image: require("../../../assets/images/car8.png"),
      amount: "15030000",
      mark: "Bmw",
      location: "Águas Pretas-PE",
      year: 2020,
      km: "0.000",
      engine: "4.0",
      type: "Novo",
    },
    {
      id: 22,
      name: "Skyline R35",
      image: require("../../../assets/images/car9.png"),
      amount: "140000000",
      mark: "Nissan",
      location: "Caruaru-PE",
      year: 2015,
      km: "0.000",
      engine: "V10",
      type: "Novo",
    },
    {
      id: 30,
      name: "Audi R8",
      image: require("../../../assets/images/car10.png"),
      amount: "160000000",
      mark: "Audi",
      location: "Recife-PE",
      year: 2025,
      km: "0.000",
      engine: "V10",
      type: "Novo",
    },
  ];
  //CARREGAMENTO
  useEffect(() => {
    const fetchUserAds = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        if (!token) {
          Alert.alert("Erro", "Usuário não autenticado");
          return;
        }
        //API REQUEST
        const response = await axios.get(
          "http://192.168.0.18:8000/api/product/get?category_id=1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        //FORMATACAO DE DADOS RECEBIDOS DO GET
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
        //PASSANDO OS DADOS DE 2 ARRAYS PARA UM STATE
        setAllAds([...ListAdsCar, ...anunciosBackend]);
      } catch (error) {
        setAllAds(ListAdsCar);
      }
    };

    fetchUserAds();
  }, []);
  //ESTRUTURA
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

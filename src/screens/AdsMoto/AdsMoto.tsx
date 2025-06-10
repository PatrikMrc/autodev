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
  //ROUTE
  const navigation = useNavigation();
  //STATE
  const [allAds, setAllAds] = useState([]);
  //BANCO LOCAL
  const ListAdsMoto = [
    {
      id: 80,
      name: "CbTwister 250",
      image: require("../../../assets/images/moto1.png"),
      amount: "1500000",
      mark: "Honda",
      location: "Caruaru-PE",
      year: 2018,
      km: "70.000",
      engine: "250",
      type: "Usado",
    },
    {
      id: 81,
      name: "Triumph Street Triple",
      image: require("../../../assets/images/moto2.png"),
      amount: "5610000",
      mark: "Triumph",
      location: "São Paulo",
      year: 2023,
      km: "20.000",
      engine: "765",
      type: "Usado",
    },
    {
      id: 82,
      name: "Cg Fan 150",
      image: require("../../../assets/images/moto3.png"),
      amount: "1000000",
      mark: "Honda",
      location: "Toritama-PE",
      year: 2013,
      km: "100.000",
      engine: "150",
      type: "Usado",
    },
    {
      id: 83,
      name: "Hornet",
      image: require("../../../assets/images/moto4.png"),
      amount: "3250000",
      mark: "Honda",
      location: "Campina-Grande",
      year: 2011,
      km: "60.000",
      engine: "600",
      type: "Usado",
    },
    {
      id: 84,
      name: "Hornet Carburada",
      image: require("../../../assets/images/moto5.png"),
      amount: "2700000",
      mark: "Honda",
      location: "João Pessoa-PB",
      year: 2007,
      km: "120.000",
      engine: "600",
      type: "Usado",
    },
    {
      id: 85,
      name: "Harley Davidson 1200x",
      image: require("../../../assets/images/moto6.png"),
      amount: "7040000",
      mark: "Harley Davidson",
      location: "Caruaru-PE",
      year: 2020,
      km: "30.000",
      engine: "1200",
      type: "Usado",
    },
    {
      id: 86,
      name: "Royal",
      image: require("../../../assets/images/moto7.png"),
      amount: "3500000",
      mark: "Royal Enfield",
      location: "Caruaru-PE",
      year: 2019,
      km: "100.000",
      engine: "250",
      type: "Usado",
    },
    {
      id: 87,
      name: "Bmw",
      image: require("../../../assets/images/moto8.png"),
      amount: "6035000",
      mark: "BMW",
      location: "Pesqueira-PE",
      year: 2016,
      km: "1.000",
      engine: "650",
      type: "Usado",
    },
    {
      id: 88,
      name: "SuperCub",
      image: require("../../../assets/images/moto9.png"),
      amount: "1720000",
      mark: "Honda",
      location: "Catende-PE",
      year: 1996,
      km: "3.000",
      engine: "100",
      type: "Usado",
    },
    {
      id: 89,
      name: "Royal Enfield",
      image: require("../../../assets/images/moto10.png"),
      amount: "2640000",
      mark: "Royal Enfield",
      location: "Batateira-PE",
      year: 2024,
      km: "15.000",
      engine: "650",
      type: "Usado",
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
          "http://192.168.0.18:8000/api/product/get?category_id=2",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        //FORMATACAO
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

        setAllAds([...ListAdsMoto, ...anunciosBackend]);
      } catch (error) {
        setAllAds(ListAdsMoto);
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

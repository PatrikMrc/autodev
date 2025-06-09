import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import MyAdsComponent from "@/src/components/MyAdsComponent";
import { useNavigation } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
export default function MyAds() {
  const navigation = useNavigation();

  const [listMyAds, setListMyAds] = useState([]);
  //metodo get
  const getMyAds = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        Alert.alert("Erro", "Usuário não autenticado");
        return;
      }
      const response = await axios.get(
        "http://127.0.0.1:8000/api/product/getMyProducts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      // tratamento de resposta da api
      if (response.status === 200) {
        const products = response.data.products || response.data || [];
        //adicionando formatacao
        const adsFormatados = products.map((p) => ({
          id: p.id,
          name: p.name,
          amount: p.amount,
          type: p.type,
          image: { uri: p.image_url },
        }));
        setListMyAds(adsFormatados);
      } else {
        Alert.alert("Erro", "Erro ao carregar anúncios");
      }
    } catch (error) {
      console.error(
        "Erro ao buscar anúncios:",
        error.response?.data || error.message
      );
      Alert.alert("Erro", "Erro ao carregar anúncios");
    }
  };
  //recarrega pagina e lista componentes novos
  useFocusEffect(
    useCallback(() => {
      getMyAds();
    }, [])
  );
  //excluir anuncio
  const excluirAnuncio = async (id) => {
    try {
      //verifica token
      const token = await AsyncStorage.getItem("token"); // ou o nome que você usou ao salvar

      if (!token) {
        Alert.alert("Erro", "Usuário não autenticado");
        return;
      }
      const response = await axios.post(
        "http://127.0.0.1:8000/api/product/destroy", //endereco
        { id },
        {
          //envia token pra api
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      //tratamento de retorno
      if (response.status === 200) {
        setListMyAds((prev) => prev.filter((item) => item.id !== id));
        Alert.alert("Sucesso", "Anúncio excluído com sucesso.");
      } else {
        Alert.alert("Erro", "Erro ao excluir o anúncio.");
      }
    } catch (error) {
      console.error("Erro ao excluir:", error.response?.data || error.message);
      Alert.alert("Erro", "Erro ao excluir o anúncio.");
    }
  };

  return (
    //corpo do app
    <ScrollView style={styles.container}>
      {listMyAds.map((myads, index) => (
        <MyAdsComponent key={index} myads={myads} onDelete={excluirAnuncio} />
      ))}
      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateAds")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontSize: 13, fontWeight: 500 }}>
            Criar Anuncio
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

//estilizacao da screen
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
  },
  containerButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
  },
});

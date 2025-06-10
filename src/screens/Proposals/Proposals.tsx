import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import MyProposalsComponent from "@/src/components/MyProposals";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
export default function Proposals() {
  const [myProposals, setMyProposals] = useState([]);
  useFocusEffect(
    useCallback(() => {
      const fetchProposals = async () => {
        try {
          const token = await AsyncStorage.getItem("token");

          if (!token) {
            Alert.alert("Erro", "Usuário não autenticado.");
            return;
          }

          const response = await axios.get(
            "http://192.168.0.18:8000/api/order/getMyOrders",
            {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
              },
            }
          );

          const proposalsArray = Array.isArray(response.data)
            ? response.data
            : response.data.orders || [];

          const proposals = proposalsArray.map((item) => ({
            amount: item.amount,
            name: item.product?.name ?? "Nome indisponível",
            type: item.product?.type ?? "Tipo indisponível",
          }));

          setMyProposals(proposals);
        } catch (error) {
          console.error("Erro ao buscar propostas:", error);
        }
      };

      fetchProposals();
    }, [])
  );
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
        Minhas Propostas
      </Text>
      {myProposals.map((proposal, index) => (
        <MyProposalsComponent key={index} myProposals={proposal} />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
  },
});

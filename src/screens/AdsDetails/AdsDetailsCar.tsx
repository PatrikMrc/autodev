import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Platform,
  Alert,
} from "react-native";
//para modal de agendamento
import DateTimePicker from "@react-native-community/datetimepicker";
//rotas
import { useNavigation } from "expo-router";
//dados
import { useState } from "react";
//token
import AsyncStorage from "@react-native-async-storage/async-storage";
//requisicao
import axios from "axios";
//mascara
import { MaskedTextInput } from "react-native-mask-text";
export default function AdsDetailsCar({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;
  const [amount, setAmount] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleConfirm = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const handleSchedule = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        Alert.alert("Erro", "Usuário não autenticado.");
        return;
      }
      // formatacao para back-end receber a data de forma correta e estruturada
      const formattedDate = date.toISOString().split("T")[0];

      const response = await axios.post(
        "http://127.0.0.1:8000/api/schedulling/store",
        {
          //tratamento dos dados a serem enviados
          product_id: data.id,
          date: formattedDate,
        },
        {
          //envio do token para auth
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      Alert.alert("Sucesso", "Test drive agendado com sucesso!");
      setModalVisible(false);
    } catch (error) {
      console.error("Erro ao agendar test drive:", error);
      Alert.alert("Erro", "Não foi possível agendar o test drive.");
    }
  };

  const handleProposta = async () => {
    if (!amount || isNaN(Number(amount))) {
      Alert.alert("Erro", "Digite um valor válido para a proposta.");
      return;
    }

    try {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        Alert.alert("Erro", "Usuário não autenticado.");
        return;
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/api/order/store", // endereco
        {
          //tratamento dos dados a serem enviados
          amount: Number(amount),
          product_id: data.id,
        },
        {
          //envio do token para api
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      Alert.alert("Sucesso", "Proposta enviada com sucesso!");
      setAmount("");
    } catch (error) {
      console.error("Erro ao enviar proposta:", error);
      Alert.alert("Erro", "Não foi possível enviar a proposta.");
    }
  };
  function formatarPreco(valor) {
    const valorComDecimal = valor / 100;
    return valorComDecimal.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={data.image} style={styles.image} />
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.value}>R$ {formatarPreco(data.amount)}</Text>

      <View style={styles.details}>
        <Text style={styles.label}>
          Marca: <Text style={styles.info}>{data.mark}</Text>
        </Text>
        <Text style={styles.label}>
          Localização: <Text style={styles.info}>{data.location}</Text>
        </Text>
        <Text style={styles.label}>
          Ano: <Text style={styles.info}>{data.year}</Text>
        </Text>
        <Text style={styles.label}>
          KM: <Text style={styles.info}>{data.km}</Text>
        </Text>
        <Text style={styles.label}>
          Motor: <Text style={styles.info}>{data.engine}</Text>
        </Text>
        <Text style={styles.label}>
          Estado: <Text style={styles.info}>{data.type}</Text>
        </Text>
      </View>

      <View style={styles.containerProposal}>
        <MaskedTextInput
          type="currency"
          options={{
            prefix: "R$ ",
            decimalSeparator: ",",
            groupSeparator: ".",
            precision: 2,
          }}
          value={amount}
          onChangeText={(text, rawValue) => {
            setAmount(rawValue);
          }}
          style={styles.input}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={handleProposta} style={styles.button1}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Agendar Test Drive</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione a Data</Text>

            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowPicker(true)}
            >
              <Text style={styles.dateButtonText}>
                {date.toLocaleDateString()}
              </Text>
            </TouchableOpacity>

            {showPicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleConfirm}
              />
            )}

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#ccc" }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: "#000" }}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#1F41BB" }]}
                onPress={handleSchedule}
              >
                <Text style={{ color: "#fff" }}>Agendar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  containerProposal: {
    marginTop: 30,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  value: {
    fontSize: 22,
    color: "green",
    marginBottom: 20,
  },
  details: {
    width: "100%",
  },
  label: {
    fontSize: 18,
    marginVertical: 4,
    fontWeight: "600",
  },
  info: {
    fontWeight: "normal",
    color: "#555",
  },
  button2: {
    marginTop: 40,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 15,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    backgroundColor: "#1F41BB",
    padding: 10,
    borderRadius: 15,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    width: "65%",
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "bold",
  },
  dateButton: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  dateButtonText: {
    fontSize: 16,
    color: "#333",
  },
  modalButtons: {
    flexDirection: "row",
    gap: 15,
  },
  modalButton: {
    padding: 10,
    borderRadius: 10,
    width: 100,
    alignItems: "center",
  },
});

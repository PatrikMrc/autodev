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
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "expo-router";
import { useState } from "react";
import axios from "axios";

export default function Detalhes({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;
  const [proposta, setProposta] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleConfirm = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const handleSchedule = () => {
    setModalVisible(false);
    Alert.alert(
      "Test Drive Agendado",
      `Veículo: ${data.name}\nData e Hora: ${date.toLocaleString()}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={data.image} style={styles.image} />
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.value}>R$ {data.value}</Text>

      <View style={styles.details}>
        <Text style={styles.label}>
          Modelo: <Text style={styles.info}>{data.model}</Text>
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
          Documento: <Text style={styles.info}>{data.document}</Text>
        </Text>
        <Text style={styles.label}>
          Estado: <Text style={styles.info}>{data.condition}</Text>
        </Text>
      </View>

      <View style={styles.containerProposal}>
        <TextInput
          style={styles.input}
          placeholderTextColor={"grey"}
          placeholder="Valor da Proposta"
          keyboardType="numeric"
          value={proposta}
          onChangeText={setProposta}
        />
        <TouchableOpacity onPress={enviarProposta} style={styles.button1}>
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
            <Text style={styles.modalTitle}>Selecione Data e Hora</Text>

            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowPicker(true)}
            >
              <Text style={styles.dateButtonText}>{date.toLocaleString()}</Text>
            </TouchableOpacity>

            {showPicker && (
              <DateTimePicker
                value={date}
                mode="datetime"
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

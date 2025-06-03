import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "expo-router";
export default function Detalhes({ route }) {
  const { data } = route.params;
  const navigation = useNavigation();
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
          Motor: <Text style={styles.info}>{data.engine}cc</Text>
        </Text>
        <Text style={styles.label}>
          Documento: <Text style={styles.info}>{data.document}</Text>
        </Text>
        <Text style={styles.label}>
          Estado: <Text style={styles.info}>{data.state}</Text>
        </Text>
      </View>
      <View style={styles.containerProposal}>
        <TextInput
          style={styles.input}
          placeholderTextColor={"grey"}
          placeholder="Valor da Proposta"
        ></TextInput>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText}>Agendar Test Drive</Text>
      </TouchableOpacity>
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
    fontWeight: 600,
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
});

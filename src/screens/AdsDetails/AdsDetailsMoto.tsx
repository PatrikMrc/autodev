import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Detalhes({ route }) {
  const { data } = route.params;

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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proposta</Text>
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
  button: {
    backgroundColor: "#1F41BB",
    padding: 15,
    borderRadius: 15,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
  },
});

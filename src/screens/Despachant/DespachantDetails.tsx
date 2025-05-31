import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function DespachantDetails({ route }) {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <Image style={styles.profileImage} source={data.image} />
      <View style={styles.containerData}>
        <View style={styles.containerText}>
          <Text style={styles.text}>Avaliacao</Text>
          <Image source={data.star} />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Experiência</Text>
          <Text>{data.experience} Anos</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Serviços Realizados</Text>
          <Text>{data.services} Serviços</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Email</Text>
          <Text>{data.email}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Telefone</Text>
          <Text>{data.number}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  containerButtons: {
    flexDirection: "row",
    gap: 30,
    top: 100,
  },
  containerData: {
    flexDirection: "column",
    gap: 30,
    width: "80%",
  },
  containerText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileImage: {
    height: 150,
    width: 150,
    bottom: 100,
    borderRadius: "40%",
  },
  text: {
    color: "black",
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    bottom: 190,
  },
  button1: {
    backgroundColor: "#000000",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 130,
  },
  button2: {
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 130,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

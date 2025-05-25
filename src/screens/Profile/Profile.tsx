import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Image
        style={styles.profileImage}
        source={require("@/assets/images/profile.png")}
      />
      <View style={styles.containerData}>
        <View style={styles.containerText}>
          <Text style={styles.text}>Nome</Text>
          <Text>************</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Email</Text>
          <Text>************</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Senha</Text>
          <Text>************</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Telefone</Text>
          <Text>************</Text>
        </View>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.textButton}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.textButton}>Sair Da Conta</Text>
        </TouchableOpacity>
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
    width: "90%",
  },
  containerText: {
    flexDirection: "row",
    justifyContent: "space-around",
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
    bottom: 120,
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

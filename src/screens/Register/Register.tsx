import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/AutoDev.png")}
        style={styles.logo}
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>Cadastre-se</Text>
        <Text style={styles.text}>Insira seus dados para se cadastrar.</Text>
      </View>
      <View style={styles.containerForm}>
        <TextInput placeholder="Nome" style={styles.textInput}></TextInput>
        <TextInput placeholder="E-mail" style={styles.textInput}></TextInput>
        <TextInput placeholder="Telefone" style={styles.textInput}></TextInput>
        <TextInput placeholder="Senha" style={styles.textInput}></TextInput>
        <TextInput
          placeholder="Confirmar Senha"
          style={styles.textInput}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      >
        <Text style={styles.textButton}>Proximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "white",
  },
  logo: {
    bottom: 100,
    width: 200,
    height: 100,
  },
  containerText: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    bottom: 100,
  },
  containerForm: {
    gap: 30,
    width: "80%",
    bottom: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
    color: "#454B60",
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    color: "#454B60",
    fontWeight: "bold",
  },
  textInput: {
    padding: 15,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 13,
    backgroundColor: "white",
  },
  button: {
    top: 50,
    backgroundColor: "#1F41BB",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: "50%",
    alignItems: "center",
    bottom: 50,
    borderWidth: 1,
    borderColor: "grey",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

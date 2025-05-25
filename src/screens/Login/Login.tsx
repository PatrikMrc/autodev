import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/Logo.svg")}
        style={styles.logo}
      />
      <View style={styles.divForm}>
        <View style={styles.containerForm}>
          <Text style={styles.text}>E-Mail</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        <View style={styles.containerForm}>
          <Text style={styles.text}>Senha</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button1}>
          <Text
            style={styles.textButton}
            onPress={() => navigation.navigate("Home")}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  containerForm: {
    width: "100%",
    gap: 10,
  },
  containerButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  divForm: {
    width: "80%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 30,
  },
  logo: {
    marginBottom: 20,
    marginTop: 50,
  },
  button1: {
    backgroundColor: "#1F41BB",
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
    width: "50%",
    alignItems: "center",
    bottom: 50,
    borderWidth: 1,
    borderColor: "grey",
  },
  textInput: {
    padding: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 13,
    backgroundColor: "white",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

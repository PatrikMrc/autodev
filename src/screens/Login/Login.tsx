import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        await AsyncStorage.setItem("token", token);
        Alert.alert("Sucesso", "Login realizado!");
        navigation.navigate("Home");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "E-mail ou senha inválidos.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/AutoDev.png")}
        style={styles.logo}
      />
      <View style={styles.divForm}>
        <View style={styles.containerForm}>
          <Text style={styles.text}>E-Mail</Text>
          <TextInput
            placeholderTextColor={"grey"}
            placeholder="usuario@gmail.com"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={styles.containerForm}>
          <Text style={styles.text}>Senha</Text>
          <TextInput
            placeholderTextColor={"grey"}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
          ></TextInput>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={handleLogin} style={styles.button1}>
          <Text style={styles.textButton}>Entrar</Text>
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
    width: "100%",
    height: 100,
    marginBottom: 20,
    marginTop: 100,
  },
  textLogin: {
    fontSize: 30,
    fontWeight: 600,
    color: "grey",
    marginTop: 120,
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
    padding: 15,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 13,
    backgroundColor: "white",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: 500,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

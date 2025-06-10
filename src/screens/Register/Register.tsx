import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
//sistema de mascaras para celular, cpf, cartao e etc
import { MaskedTextInput } from "react-native-mask-text";
export default function Cadastro() {
  const navigation = useNavigation();
  //armazenamento de dados em states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  //verificacao se todos os campos foram preenchidos
  const handleCadastro = async () => {
    if (!name || !email || !phone || !password || !password_confirmation) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }
    //verifica se os 2 campos de senha tem os mesmos values
    if (password !== password_confirmation) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    try {
      //endereco e method
      await axios.post("http://127.0.0.1:8000/api/store", {
        name,
        email,
        phone,
        password,
        password_confirmation,
      });
      //sucesso
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate("Login");
      //erro
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível concluir o cadastro.");
    }
  };
  //estrutura
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
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Nome"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          style={styles.textInput}
        ></TextInput>
        <MaskedTextInput
          mask="(99) 99999-9999"
          value={phone}
          onChangeText={(text, rawText) => setPhone(rawText)}
          placeholder="Telefone"
          style={styles.textInput}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          placeholder="Confirmar Senha"
          value={password_confirmation}
          onChangeText={setPassword_confirmation}
          style={styles.textInput}
        ></TextInput>
      </View>
      <TouchableOpacity onPress={handleCadastro} style={styles.button}>
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

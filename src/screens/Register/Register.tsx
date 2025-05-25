import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Cadastro() {
  return (
    <View>
      <Image />
      <Text>Cadastre-se</Text>
      <Text>Insira seus dados para se cadastrar.</Text>
      <TextInput></TextInput>
      <TextInput></TextInput>
      <TextInput></TextInput>
      <TextInput></TextInput>
      <TextInput></TextInput>
      <TouchableOpacity>Próximo</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

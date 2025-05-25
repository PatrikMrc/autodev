import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../../assets/images/AutoDev.png")}
        />
      </View>
      <View style={styles.containerImage}>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.image}
            source={require("@/assets/images/moto.png")}
          />
          <Text>Anúncios De Motos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.image}
            source={require("@/assets/images/carro.png")}
          />
          <Text>Anúncios De Carros</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerImage}>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.image}
            source={require("@/assets/images/despachante.png")}
          />
          <Text>Despachantes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.image}
            source={require("@/assets/images/mecanico.png")}
          />
          <Text>Mecânicos</Text>
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
    height: "100%",
    width: "100%",
    gap: 70,
    backgroundColor: "white",
  },
  containerImage: {
    flexDirection: "row",
    gap: 50,
    top: 0,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  logo: {
    width: 300,
    height: 100,
    top: -80,
  },
  button: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

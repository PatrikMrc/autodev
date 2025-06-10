import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
function formatarPreco(valor) {
  const valorComDecimal = valor / 100;
  return valorComDecimal.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
export default function MyProposals({ myProposals }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImgInfos}>
        <Image style={styles.img} source={myProposals.image} />
        <View style={styles.containerInfos}>
          <Text style={{ fontSize: 16, fontWeight: 500 }}>
            {myProposals.name}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: 500, color: "#FF7816" }}>
            Proposta: R$ {formatarPreco(myProposals.amount)}
          </Text>
          <Text style={{ fontSize: 10, fontWeight: 500, color: "grey" }}>
            Condição: {myProposals.type}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    borderRadius: 15,
    marginLeft: 50,
    marginTop: 20,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: "15%",
  },
  containerImgInfos: {
    flexDirection: "row",
    gap: 10,
  },
  containerInfos: {
    gap: 5,
  },
  containerButtons: {
    flexDirection: "row",
    gap: 12,
  },
  button1: {
    backgroundColor: "#C50003",
    padding: 10,
    borderRadius: 10,
    width: 130,
  },
  button2: {
    backgroundColor: "#1F41BB",
    padding: 10,
    borderRadius: 10,
    width: 130,
  },
});

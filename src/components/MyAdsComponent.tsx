import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";

export default function MyAds({ myads, onDelete }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImgInfos}>
        <Image style={styles.img} source={myads.image} />
        <View style={styles.containerInfos}>
          <Text style={{ fontSize: 16, fontWeight: 500 }}>{myads.name}</Text>
          <Text style={{ fontSize: 14, fontWeight: 500, color: "#FF7816" }}>
            R$ {myads.amount}
          </Text>
          <Text style={{ fontSize: 10, fontWeight: 500, color: "grey" }}>
            Condição: {myads.type}
          </Text>
        </View>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity
          onPress={() => onDelete(myads.id)}
          style={styles.button1}
        >
          <Text style={{ color: "white", fontSize: 12, fontWeight: 400 }}>
            Excluir Anúncio
          </Text>
        </TouchableOpacity>
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

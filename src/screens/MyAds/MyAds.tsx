import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MyAdsComponent from "@/src/components/MyAdsComponent";
import { useNavigation } from "expo-router";

export default function MyAds() {
  const navigation = useNavigation();

  const listMyAds = [
    {
      image: require("../../../assets/images/myads1.png"),
      name: "Nissan GTR",
      value: "1,000,000",
      condition: "Usado",
    },
    {
      image: require("../../../assets/images/myads2.png"),
      name: "Mustang",
      value: "750,000",
      condition: "Novo",
    },
    {
      image: require("../../../assets/images/myads3.png"),
      name: "Golf GTI",
      value: "90,000",
      condition: "Usado",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {listMyAds.map((myads, index) => (
        <MyAdsComponent key={index} myads={myads} />
      ))}
      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateAds")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontSize: 13, fontWeight: 500 }}>
            Criar Anuncio
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
  },
  containerButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
  },
});

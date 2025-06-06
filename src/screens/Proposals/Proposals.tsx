import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MyProposalsComponent from "@/src/components/MyProposals";
export default function Proposals() {
  const listMyProposals = [
    {
      image: require("../../../assets/images/myads1.png"),
      name: "Nissan GTR",
      propostvalue: "940,000",
      condition: "Usado",
    },
    {
      image: require("../../../assets/images/myads2.png"),
      name: "Mustang",
      propostvalue: "700,000",
      condition: "Novo",
    },
    {
      image: require("../../../assets/images/myads3.png"),
      name: "Golf GTI",
      propostvalue: "50,000",
      condition: "Usado",
    },
    {
      name: "Royal Enfield",
      image: require("../../../assets/images/moto10.png"),
      propostvalue: "20.000",
      condition: "Usado",
    },
    {
      name: "Hornet",
      image: require("../../../assets/images/moto4.png"),
      propostvalue: "32.500",
      condition: "Usado",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
        Minhas Propostas
      </Text>
      {listMyProposals.map((myProposals, index) => (
        <MyProposalsComponent key={index} myProposals={myProposals} />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
  },
});

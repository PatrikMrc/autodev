import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MyProposalsComponent from "@/src/components/MyProposals";
import { useState, useEffect } from "react";
export default function Proposals() {
  const [myProposals, setMyProposals] = useState([]);
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
        Minhas Propostas
      </Text>
      {myProposals.map((proposal, index) => (
        <MyProposalsComponent key={index} myProposals={proposal} />
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

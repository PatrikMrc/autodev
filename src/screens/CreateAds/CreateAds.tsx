import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function CreateAds() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [VehicleOption, setVehicleOption] = useState(null);
  const options = ["Novo", "Usado"];
  const Vehicle = ["Carro", "Moto"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const brands = [
    "Honda",
    "Yamaha",
    "Suzuki",
    "BMW",
    "Toyota",
    "Ford",
    "Chevrolet",
    "Volkswagen",
    "Porsche",
    "Subaru",
    "Audi",
    "Royal Enfield",
    "Triumph",
    "Harley Davidson",
    "Nissan",
    "Renault",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectBrand = (brand) => {
    setSelectedBrand(brand);
    setIsOpen(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.text}>Nome Do Veículo</Text>
        <TextInput
          style={styles.inputs}
          placeholderTextColor="grey"
          placeholder="Ex: Caravan"
        ></TextInput>
      </View>
      <View style={{ marginTop: 20, gap: 10 }}>
        <Text style={styles.text}>Condições</Text>
        <View style={{ flex: 1, flexDirection: "row", gap: 20 }}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.radioContainer}
              onPress={() => setSelectedOption(option)}
            >
              <MaterialIcons
                name={
                  selectedOption === option
                    ? "radio-button-checked"
                    : "radio-button-unchecked"
                }
                size={24}
                color="black"
              />
              <Text style={styles.radioText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 20, gap: 10 }}>
        <Text style={styles.text}>Selecione O Tipo De Veículo</Text>
        <View style={{ flex: 1, flexDirection: "row", gap: 20 }}>
          {Vehicle.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.radioContainer}
              onPress={() => setVehicleOption(option)}
            >
              <MaterialIcons
                name={
                  VehicleOption === option
                    ? "radio-button-checked"
                    : "radio-button-unchecked"
                }
                size={24}
                color="black"
              />
              <Text style={styles.radioText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 20, gap: 10 }}>
        <Text style={styles.text}>Selecione a Marca:</Text>

        <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
          <Text style={{ color: selectedBrand ? "#000" : "#aaa" }}>
            {selectedBrand || "Selecione uma marca..."}
          </Text>
          <MaterialIcons
            name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>

        {isOpen && (
          <View style={styles.dropdownList}>
            <FlatList
              data={brands}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => selectBrand(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.text}>Cidade/Estado</Text>
        <TextInput
          placeholder="Ex: Caruaru/PE"
          style={styles.inputs}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.text}>Descrição</Text>
        <TextInput style={styles.inputs}></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.text}>Preço</Text>
        <TextInput placeholder="R$" style={styles.inputs}></TextInput>
      </View>
      <View style={{ width: "100%" }}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: 500 }}>
            Publicar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  radioText: {
    marginLeft: 10,
    fontSize: 18,
  },
  selectedText: {
    marginTop: 30,
    fontSize: 16,
    color: "gray",
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 400,
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#f2f2f2",
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginTop: 5,
    maxHeight: 200,
    backgroundColor: "#fff",
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  inputs: {
    backgroundColor: "white",
    borderWidth: 1,
    padding: 15,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "black",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
});

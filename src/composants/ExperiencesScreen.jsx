import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import groupesData from "../composants/groupes-data.json";

const ExperiencesScreen = () => {
  const [groupes, setGroupes] = useState([]);

  useEffect(() => {
    setGroupes(groupesData);
  }, []);

  const afficherCartes = () => {
    return groupes.map((groupe) => (
      <View key={groupe.id} style={styles.carte}>
        <Text style={styles.titre}>{groupe.nomEntreprise}</Text>
        <Text>{groupe.annee}</Text>
        <Text>{groupe.poste}</Text>
        <Text>{groupe.description}</Text>
      </View>
    ));
  };

  return (
    
    <ScrollView contentContainerStyle={styles.scrollConteneur}>
      <Text style={styles.text}>
        Expériences
      </Text>
      {afficherCartes()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollConteneur: {
    alignItems: "center",
    justifyContent: "center",
    top: "10%",
  },
  carte: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: "80%",
  },
  titre: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: "20%",
  },
  text: {
    paddingBottom: 30,
  }
});

export default ExperiencesScreen;
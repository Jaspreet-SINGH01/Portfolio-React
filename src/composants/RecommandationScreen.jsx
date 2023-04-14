import { StyleSheet, View, StatusBar, Text } from "react-native";
import React, { Component } from "react";
import Logo from "./Logo";
import Commentaires from "./Commentaires";
// import { StatusBar } from "expo-status-bar";
import Map from "./Map";

export default class RecommandationScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Logo style={styles.logo} />
        <Commentaires />
        <Map style={styles.map} />
        <StatusBar style="auto" />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  logo: {
    top: 80,
    position: "absolute",
    flex: 1,
  },
  map: {
    flex: 1,
  }
});
import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import Avatar from "./Avatar";
import Contact from "./Contact"
import Description from "./Description";
import Identity from "./Identity";
import { StatusBar } from "expo-status-bar";

export default class PresentationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Page de profil</Text>
        <Avatar />
        <Identity />
        <Description />
        <Contact />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  text: {
    flex: 1,
    position: "relative",
    alignSelf: "center",
    top: 50,
    fontSize: 30,
  },
});

import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jaspreet&Co &nbsp;

      <Image
        style={{ width: 40, height: 40, position:"absolute" }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      </Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 20,
    textAlign: "center",
    padding: 20,
    fontSize: 20,
  },
  text: {
    fontStyle: "italic",
    fontSize: 30,
  }
});

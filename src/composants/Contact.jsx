import React from "react";
import { View, Text, Linking, Button, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";

export default function Contact() {
  const openSms = () => {
    Linking.openURL("sms:061234578");
  };
  const openTel = () => {
    Linking.openURL("tel:0612345678");
  };
  const openEmail = () => {
    Linking.openURL("mailto:exemple@gmail.com");
  };
  const openSocial = () => {
    WebBrowser.openBrowserAsync("https://www.facebook.com/");
  };
  return (
    <View>
      <Text style={styles.text}>
        <Button onPress={openSms} title="sms"></Button> &nbsp;
        <Button onPress={openTel} title="tel"></Button> &nbsp;
        <Button onPress={openEmail} title="email"></Button> &nbsp;
        <Button onPress={openSocial} title="social"></Button> &nbsp;
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
  }
})

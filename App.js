import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PresentationScreen from "./src/composants/PresentationScreen";
import RecommandationScreen from "./src/composants/RecommandationScreen";
import PagerView from "react-native-pager-view";
import ExperiencesScreen from "./src/composants/ExperiencesScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.pagerView} initialPage={0}>
        <View key="1">
          <PresentationScreen />
        </View>
        <View key="2">
          <ExperiencesScreen />
        </View>
        <View key="3">
          <RecommandationScreen />
        </View>
      </PagerView>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        style={styles.statusbar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pagerView: {
    flex: 1,
    backgroundColor: "pink"
  },
  page: {
    alignItems: "center",
    justifyContent: "center",
  },
  statusbar: {
    padding: 30,
  }
});

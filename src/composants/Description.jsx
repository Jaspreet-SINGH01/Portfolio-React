import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Description() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Je suis un développeur React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 30,
  },
});

//           Code avec props:

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function Description(props) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>{props.description}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 20,
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 18,
//     textAlign: 'center',
//     lineHeight: 25,
//   },
// });

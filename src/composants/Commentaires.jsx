import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

const Commentaires = () => {
  const [commentaires, setCommentaires] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setCommentaires(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    
      <ScrollView style={styles.scrollview}>
        {commentaires.map((item) => (
          <View key={item.id} style={styles.view}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text style={styles.text}>{item.body}</Text>
          </View>
        ))}
      </ScrollView>
    
  );
};

export default Commentaires;

const styles = StyleSheet.create({
  text: {
    color: "blue",
    padding: 5,
  },
  scrollview: {
    marginTop: 10,
    width: '80%',
    margin: 10,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 20,
    borderColor: 'black',
    backgroundColor: 'lightblue',
    flexDirection:"column",
    flex: 1,
  }
});

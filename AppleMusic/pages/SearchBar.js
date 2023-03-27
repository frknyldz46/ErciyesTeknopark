import React from "react";
import { TextInput, View, StyleSheet, Dimensions } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="  Sanatçı,Parça,Şarkı Sözü ve Daha Fazlası" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eceff1",
    padding: 8,
    margin: 5,
    marginLeft: 15,
    borderRadius: 5,
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").height / 18,
  },
});

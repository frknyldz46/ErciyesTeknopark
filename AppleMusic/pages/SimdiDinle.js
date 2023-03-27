import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
export default function SimdiDinle(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text1}>Şimdi Dinle</Text>
        <Image style={styles.profil} source={require("./profil.jpeg")} />
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Radyodeneme")}
      >
        <Image style={styles.image} source={require("./prem.jpeg")} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
  text1: {
    fontSize: 35,
    fontWeight: "bold",
  },
  image: {
    height: Dimensions.get("window").height / 1.4,
    width: Dimensions.get("window").width / 1.1,
    marginTop: 15,
    borderRadius: 15,
  },
  profil: {
    height: Dimensions.get("window").height / 14,
    width: Dimensions.get("window").width / 8,
    borderRadius: 13,
    marginLeft: 115,
  },
  view: {
    flexDirection: "row",
    marginTop: 30,
  },
});

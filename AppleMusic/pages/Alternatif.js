import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";

export default function Alternatif(props) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.border1}
        onPress={() => props.navigation.navigate("Radyodeneme")}
      >
        <Image style={styles.resim} source={require("./alternatif.jpeg")} />
        <View style={styles.border2}>
          <Text style={styles.yazi1}>Alternatif İstasyonu</Text>
          <Text style={styles.yazi2}>Apple Music İstasyonu</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.seperator} />

      <TouchableOpacity
        style={styles.border1}
        onPress={() => props.navigation.navigate("Radyodeneme")}
      >
        <Image style={styles.resim} source={require("./indie.jpeg")} />
        <View style={styles.border2}>
          <Text style={styles.yazi1}>Indie İstasyonu</Text>
          <Text style={styles.yazi2}>Apple Music İstasyonu</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.seperator} />

      <TouchableOpacity
        style={styles.border1}
        onPress={() => props.navigation.navigate("Radyodeneme")}
      >
        <Image style={styles.resim} source={require("./kanada.jpeg")} />
        <View style={styles.border2}>
          <Text style={styles.yazi1}>Kanada Indie İstasyonu</Text>
          <Text style={styles.yazi2}>Apple Music İstasyonu</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.seperator} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
  },
  resim: {
    height: Dimensions.get("window").height / 6.4,
    width: Dimensions.get("window").width / 4,
    borderRadius: 5,
  },
  border1: {
    flexDirection: "row",
    margin: 15,
    marginLeft: 25,
  },
  border2: {
    margin: 15,
  },
  yazi1: {
    fontSize: 18,
    fontWeight: "500",
  },
  yazi2: {
    fontSize: 15,
    color: "gray",
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#eceff1",
  },
});

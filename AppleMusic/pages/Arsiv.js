import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function Arsiv() {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Text style={styles.text1}>Arşiv</Text>
        <Text style={styles.text2}>Düzenle</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text3}>Müziklerinizi mi arıyorsunuz?</Text>
        <Text style={styles.text4}>
          iTunes Store'dan satın aldığınız müzikler burada görünür.
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    margin: 20,
    marginTop: 55,
  },
  text1: {
    fontSize: 36,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 18,
    color: "red",
    fontWeight: "400",
    marginLeft: 190,
  },
  view2: {
    margin: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 210,
  },
  text3: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text4: {
    fontSize: 17,
    color: "gray",
    fontWeight: "500",
  },
});

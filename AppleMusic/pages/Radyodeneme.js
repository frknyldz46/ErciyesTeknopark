import React from "react";
import {
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";

export default function Radyodeneme() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.resim} source={require("./radyodeneme.jpeg")} />
      <View style={styles.view}>
        <Text style={styles.text1}>1 aylık ücretsiz müzik keyfi yaşayın.</Text>
        <Text style={styles.text2}>
          Üstelik tüm müzik arşivinize aygıtlarınızın hepsinden
          erişebilirsiniz.1 aylık ücretsiz,daha sonra ayda 19.99 TL
        </Text>
        <Text style={styles.text3}>Diğer Planları Gör</Text>
      </View>
      <View style={styles.buttonucretsiz}>
        <Button title="Ücretsiz Deneyin" color="red" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  resim: {
    height: Dimensions.get("window").height / 2,
    width: Dimensions.get("window").width / 1,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  view: {
    margin: 15,
  },
  text1: {
    fontSize: 35,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 15,
  },
  text3: {
    color: "red",
    fontSize: 18,
  },
  buttonucretsiz: {
    width: 250,

    marginLeft: 80,
  },
});

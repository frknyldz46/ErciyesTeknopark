import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Dimensions,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Apple Music İle Şarkı Söyle",
  },
];

const Item = ({ title }) => (
  <View>
    <Image style={styles.resim} source={require("./applemusicsöyle.jpeg")} />
    <Text style={styles.title1}>{title}</Text>
    <Text style={styles.title2}>
      Apple Music ile Şarkı Söyle,seni müziğin bir parçası olmaya davet
      ediyor.Bu yeni özellik ,vokallerin ses seviyesini ayarlamana olanak
      tanıyarak her bir vuruşta doğru sözlerle milyonlarca şarkıya eşlik etmeni
      sağlıyor...
    </Text>
    <Text style={styles.title3}>Şimdi Şarkı Söyle</Text>
    <Image style={styles.resim2} source={require("./videoresim.jpeg")} />
    <Text style={styles.title3}>Öne Çıkan Liste</Text>
    <Image style={styles.resim3} source={require("./SıraSende.jpeg")} />
    <Text style={styles.title4}>Hitlere Eşlik Et</Text>
    <Text style={styles.title5}>Apple Music</Text>
    <Text style={styles.title6}>
      Kalbinde yeri olan ve keyifle eşlik etmene hazır parçalar
    </Text>

    <Text style={styles.title3}> Şarkı Söyle İçin Oluşturuldu </Text>
    <ScrollView horizontal>
      <TouchableOpacity>
        <Image style={styles.card_kucuk} source={require("./parti.jpeg")} />
        <Text style={styles.text_resimalti}>Parti Marşları </Text>
        <Text style={styles.text_resimalti2}>Apple Music </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.card_kucuk} source={require("./herkes.jpeg")} />
        <Text style={styles.text_resimalti}>Tüm Zamanların Favo... </Text>
        <Text style={styles.text_resimalti2}>Apple Music </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.card_kucuk} source={require("./ikonik.jpeg")} />
        <Text style={styles.text_resimalti}>İkonik Düetler </Text>
        <Text style={styles.text_resimalti2}>Apple Music </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.card_kucuk} source={require("./kutlama.jpeg")} />
        <Text style={styles.text_resimalti}>Kutlama Başlasın</Text>
        <Text style={styles.text_resimalti2}>Apple Music </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.card_kucuk} source={require("./klasik.jpeg")} />
        <Text style={styles.text_resimalti}> Klasik Aşk Şarkıları</Text>
        <Text style={styles.text_resimalti2}>Apple Music</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  resim: {
    height: Dimensions.get("window").height / 2.8,
    width: Dimensions.get("window").width / 1,
  },
  title1: {
    fontWeight: "bold",
    fontSize: 35,
    marginLeft: 15,
    marginTop: 10,
  },
  title2: {
    fontSize: 18,
    margin: 13,
  },
  title3: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 15,
    marginTop: 10,
  },
  title4: {
    fontSize: 25,
    marginLeft: 15,
    marginTop: 0,
  },
  title5: {
    color: "gray",
    fontSize: 25,
    marginLeft: 15,
    marginTop: 0,
  },
  title6: {
    color: "gray",
    fontSize: 15,
    marginLeft: 15,
    marginTop: 0,
    marginBottom: 20,
  },
  resim2: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width / 1.1,
    margin: 10,
    marginLeft: 15,
    marginBottom: 20,
  },
  resim3: {
    height: Dimensions.get("window").height / 2,
    width: Dimensions.get("window").width / 1.1,
    margin: 10,
    marginLeft: 15,
    marginBottom: 5,
  },
  card_kucuk: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width / 2.2,
    margin: 10,
    borderRadius: 5,
    marginLeft: 20,
  },
  text_resimalti: {
    fontSize: 15,
    margin: 10,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 20,
  },
  text_resimalti2: {
    fontSize: 15,
    margin: 10,
    marginTop: 0,
    color: "gray",
    marginLeft: 20,
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#eceff1",
  },
});

export default App;

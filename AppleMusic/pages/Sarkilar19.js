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
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Top 25:İstanbul",
  },
];

const Item = ({ title }) => (
  <View>
    <Image style={styles.pemberesim} source={require("./music.jpeg")} />
    <Image style={styles.resim} source={require("./istanbul.jpeg")} />
    <View style={styles.textcerceve}>
      <Text style={styles.title1}>{title}</Text>
      <Text style={styles.title2}>Apple Music</Text>
      <Text style={styles.title3}>POP-2005</Text>
    </View>
    <View style={styles.butonlar}>
      <View style={styles.cal_button}>
        <Button title="Çal" onPress={null} color="red" />
      </View>

      <View style={styles.cal_button2}>
        <Button title="Karıştır" onPress={null} color="red" />
      </View>
    </View>

    <View style={styles.card1}>
      <Text style={styles.resimnumara}>1</Text>
      <View style={styles.card2}>
        <Text style={styles.sarkiadi}>10.000 Parça</Text>
        <Text style={styles.sarkiadialt}>Güneş</Text>
      </View>
    </View>
    <View style={styles.seperator} />
    <View style={styles.card1}>
      <Text style={styles.resimnumara}>2</Text>
      <View style={styles.card2}>
        <Text style={styles.sarkiadi}>NKBİ</Text>
        <Text style={styles.sarkiadialt}>Güneş</Text>
      </View>
    </View>

    <View style={styles.card1}>
      <Text style={styles.resimnumara}>3</Text>
      <View style={styles.card2}>
        <Text style={styles.sarkiadi}>Suçlarımdan Biri </Text>
        <Text style={styles.sarkiadialt}>Güneş</Text>
      </View>
    </View>

    <View style={styles.card1}>
      <Text style={styles.resimnumara}>4</Text>
      <View style={styles.card2}>
        <Text style={styles.sarkiadi}>Atlantis</Text>
        <Text style={styles.sarkiadialt}>Güneş</Text>
      </View>
    </View>

    <View style={styles.card1}>
      <Text style={styles.resimnumara}>5</Text>
      <View style={styles.card2}>
        <Text style={styles.sarkiadi}>Kelebek</Text>
        <Text style={styles.sarkiadialt}>Güneş</Text>
      </View>
    </View>

    <View style={styles.card1}>
      <Text style={styles.resimnumara}>6</Text>
      <View style={styles.card2}>
        <Text style={styles.sarkiadi}>Dikenlerinle</Text>
        <Text style={styles.sarkiadialt}>Güneş</Text>
      </View>
    </View>

    <View style={styles.card1}>
      <Text style={styles.resimnumara}>7</Text>
      <View style={styles.card2}>
        <Text style={styles.sarkiadi}>Kalmak Daha Zor</Text>
        <Text style={styles.sarkiadialt}>Güneş</Text>
      </View>
    </View>

    <View style={styles.card1}>
      <Text style={styles.resimnumara}>8</Text>
      <View style={styles.card2}>
        <Text style={styles.sarkiadi}>Bulanık</Text>
        <Text style={styles.sarkiadialt}>Güneş</Text>
      </View>
    </View>

    <View style={styles.card1}>
      <Text style={styles.resimnumara}>9</Text>
      <View style={styles.card2}>
        <Text style={styles.sarkiadi}>Kayboldum</Text>
        <Text style={styles.sarkiadialt}>Güneş</Text>
      </View>
    </View>

    <View style={styles.card1}>
      <Text style={styles.resimnumara}>10</Text>
      <View style={styles.card2}>
        <Text style={styles.sarkiadi}>Hala</Text>
        <Text style={styles.sarkiadialt}>Mavi&Güneş</Text>
      </View>
    </View>

    <View style={styles.view_1}>
      <Text style={styles.title}>Diğer Rihanna Eserleri </Text>
      <TouchableOpacity>
        <Text style={styles.text_tumunugor}>Tümünü Gör</Text>
      </TouchableOpacity>
    </View>

    <ScrollView horizontal>
      <TouchableOpacity>
        <Image style={styles.card_kucuk} source={require("./f1.jpeg")} />
        <Text style={styles.text_resimalti}>777</Text>
        <Text style={styles.text_resimalti2}>Güneş </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.card_kucuk} source={require("./f2.jpeg")} />
        <Text style={styles.text_resimalti}>Yola Koyul </Text>
        <Text style={styles.text_resimalti2}>Güneş</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.card_kucuk} source={require("./f3.jpeg")} />
        <Text style={styles.text_resimalti}>Kaçasım Gelir </Text>
        <Text style={styles.text_resimalti2}>Güneş</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={styles.card_kucuk}
          source={{
            uri: "https://evrimagaci.org/public/content_media/224a4357852224ab3d0eb800a664b28d.jpg",
          }}
        />
        <Text style={styles.text_resimalti}>On My Way</Text>
        <Text style={styles.text_resimalti2}>Güneş </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.card_kucuk} source={require("./f4.jpeg")} />
        <Text style={styles.text_resimalti}>Son Defa</Text>
        <Text style={styles.text_resimalti2}>Güneş </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.card_kucuk} source={require("./f5.jpeg")} />
        <Text style={styles.text_resimalti}>Bataklık </Text>
        <Text style={styles.text_resimalti2}>Güneş </Text>
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
    margin: 25,
    marginLeft: 85,
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width / 1.8,
    borderRadius: 10,
  },
  title1: {
    fontWeight: "bold",
    fontSize: 20,
    // marginLeft: 105,
  },
  title2: {
    color: "red",
    fontSize: 23,
    // marginLeft: 125,
  },
  title3: {
    color: "gray",
    fontSize: 10,
    //marginLeft: 145,
  },
  cal_button: {
    width: 100,
    margin: 25,
    marginLeft: 60,
  },
  butonlar: {
    flexDirection: "row",
  },
  cal_button2: {
    width: 100,
    margin: 25,
    marginLeft: 50,
  },
  kucukresim: {
    height: Dimensions.get("window").height / 12,
    width: Dimensions.get("window").width / 7.4,
    borderRadius: 7,
  },
  card2: {
    flexDirection: "column",
    margin: 10,
    marginLeft: 15,
  },
  card1: {
    flexDirection: "row",
    margin: 10,
    marginLeft: 15,
    marginBottom: 0,
    marginTop: 0,
  },
  sarkiadi: {
    fontSize: 20,
    fontWeight: "400",
  },
  sarkiadialt: {
    fontSize: 14,
    color: "gray",
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#eceff1",
  },
  textcerceve: {
    marginLeft: 110,
  },
  resimnumara: {
    fontSize: 20,
    color: "gray",
    marginTop: 15,
  },
  pemberesim: {
    height: Dimensions.get("window").height / 13,
    width: Dimensions.get("window").width / 1.09,
    margin: 15,
    borderRadius: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
    marginLeft: 15,
  },
  text_tumunugor: {
    textAlign: "right",
    fontSize: 19,
    marginLeft: 55,
    marginTop: 11,
    color: "red",
  },
  view_1: {
    flexDirection: "row",
  },
  text_resimalti: {
    fontSize: 15,
    margin: 10,
    marginBottom: 0,
    marginTop: 0,
  },
  text_resimalti2: {
    fontSize: 15,
    margin: 10,
    marginTop: 0,
    color: "gray",
  },
  card_kucuk: {
    height: Dimensions.get("window").height / 3.6,
    width: Dimensions.get("window").width / 2.2,
    margin: 10,
    borderRadius: 5,
  },
});

export default App;

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
  TouchableOpacity,
  ScrollView,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Güneş: En İyileri",
  },
];
const App = (props) => {
  Item = ({ title }) => {
    return (
      <View>
        <Image style={styles.resim} source={require("./gunes.jpeg")} />
        <View style={styles.textcerceve}>
          <Text style={styles.title1}>{title}</Text>
          <Text style={styles.title2}>Apple Music:R&B</Text>
          <Text style={styles.title3}>GÜNCELLEME:CUMA</Text>
        </View>
        <View style={styles.butonlar}>
          <View style={styles.cal_button}>
            <Button
              title="Çal"
              onPress={() => props.navigation.navigate("Radyodeneme")}
              color="red"
            />
          </View>

          <View style={styles.cal_button2}>
            <Button
              title="Karıştır"
              onPress={() => props.navigation.navigate("Radyodeneme")}
              color="red"
            />
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album1.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>10.000 Parça</Text>
            <Text style={styles.sarkiadialt}>Güneş</Text>
          </View>
        </View>
        <View style={styles.seperator} />
        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album2.png")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>NKBİ</Text>
            <Text style={styles.sarkiadialt}>Güneş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album3.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Suçlarımdan Biri </Text>
            <Text style={styles.sarkiadialt}>Güneş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album4.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Atlantis</Text>
            <Text style={styles.sarkiadialt}>Güneş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album5.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Kelebek</Text>
            <Text style={styles.sarkiadialt}>Güneş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album6.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Dikenlerinle</Text>
            <Text style={styles.sarkiadialt}>Güneş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album7.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Kalmak Daha Zor</Text>
            <Text style={styles.sarkiadialt}>Güneş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album8.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Bulanık</Text>
            <Text style={styles.sarkiadialt}>Güneş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album9.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Kayboldum</Text>
            <Text style={styles.sarkiadialt}>Güneş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album10.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Hala</Text>
            <Text style={styles.sarkiadialt}>Mavi&Güneş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album11.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Kalmak Daha Zor</Text>
            <Text style={styles.sarkiadialt}>Güneş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album12.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Bulanık</Text>
            <Text style={styles.sarkiadialt}>Güneş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album13.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Kayboldum</Text>
            <Text style={styles.sarkiadialt}>Güneş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album15.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Hala</Text>
            <Text style={styles.sarkiadialt}>Mavi&Güneş</Text>
          </View>
        </View>

        <View style={styles.view_1}>
          <Text style={styles.title}>Öne Çıkan Sanatçılar</Text>
          <TouchableOpacity>
            <Text style={styles.text_tumunugor}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./hakan.jpg")} />
            <Text style={styles.text_resimalti}>Hakan Altun</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./sinan.jpg")} />
            <Text style={styles.text_resimalti}>Sinan Akçıl </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.card_kucuk}
              source={require("./reynmen.jpeg")}
            />
            <Text style={styles.text_resimalti}>Reynmen </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./burak.jpeg")} />
            <Text style={styles.text_resimalti}>Burak Bulut</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.card_kucuk}
              source={require("./semincek.jpeg")}
            />
            <Text style={styles.text_resimalti}>Semincek</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

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
    fontSize: 18,
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
    marginTop: 20,
  },
  text_resimalti: {
    fontSize: 15,
    margin: 10,
    marginBottom: 0,
    marginTop: 0,
  },
  card_kucuk: {
    height: Dimensions.get("window").height / 7,
    width: Dimensions.get("window").width / 4,
    margin: 10,
    borderRadius: 50,
  },
});

export default App;
